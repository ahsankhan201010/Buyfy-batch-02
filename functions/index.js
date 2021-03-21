const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51IXPMzBsYP4EjIFwJl6k9O7nsVCIiZnCJRdyf3D4ohnuCw1ijZ347bDoWNvxUsRt2tjy7gyXmyhgGWaRqqe2xS2v00KSKRdOA9"
);
const admin = require("firebase-admin");

admin.initializeApp();

const firestore = admin.firestore();

//auth triggers

exports.userCreated = functions.auth.user().onCreate((user) => {
  console.log(user);
  console.log("user added ......");
  return Promise.resolve;
  //send user a welcome email
});

exports.userDeleted = functions.auth.user().onDelete((user) => {
  console.log(user);
  console.log("user deleted .........");
  return Promise.resolve;
  //feedback email
});

// firestore triggers

exports.createOrder = functions.firestore
  .document("/orders/{docId}")
  .onCreate((snap, context) => {
    console.log(snap.data());
    console.log(context.params.docId);
    return Promise.resolve;
  });

exports.updateOrder = functions.firestore
  .document("/orders/{docId}")
  .onUpdate((snap, context) => {
    console.log(snap.before.data());
    console.log(snap.after.data());
    console.log(context.params.docId);
    return Promise.resolve;
  });

exports.deleteOrder = functions.firestore
  .document("/orders/{docId}")
  .onDelete((snap, context) => {
    console.log(snap.data());
    console.log(context.params.docId);
    return Promise.resolve;
  });

// HTTPS Triggers (for making an api)

exports.sayHello = functions.https.onRequest((req, res) => {
  res.status(200).json({
    msg: "hello!",
  });
  return Promise.resolve;
});

exports.printMyName = functions.https.onRequest((req, res) => {
  var data = req.body;
  res.status(200).json({
    msg: `hello ${data.name}`,
  });
  return Promise.resolve;
});

var shapeCartItems = (cart) => {
  return cart.map(({ title, coverPhoto, cost, quantity }) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: title,
        images: [coverPhoto],
      },
      unit_amount: cost * 100, //cents
    },
    quantity: quantity,
  }));
};

exports.generateCheckoutSession = functions.https.onRequest(
  async (req, res) => {
    try {
      //fetch order
    //   var { orderId } = req.body;
      var body = JSON.parse(req.body);
      var {orderId} = body;
      var query = await firestore.collection("orders").doc(orderId).get();
      var order = query.data(); 
      console.log(order) 
      //shape cart items
      var line_items = shapeCartItems(order.cart);

      //generate stripe session with that amount
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `https://webicamp.com`,
        cancel_url: `https://webicamp.com`,
      });

      //send session to frontend
      res.set({ 'Access-Control-Allow-Origin': '*' }).status(200).json({
        data: {
          session,
        },
      });
    } catch (error) {
    //   res.status(401).set({ 'Access-Control-Allow-Origin': '*' }).json({
    //     error,
    //   });
    console.log(error)
    }
  }
);

exports.stripeHook = functions.https.onRequest(async (req,res) => {
  try {
    //--------security check-------
    console.log("stripee hookieee")
    const sig = req.headers['stripe-signature'];
    var event;
    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, "whsec_l7TzRpCSZci8TZseexPDIB1tuOsj88XZ")
    }
    catch (error) {
      res.status(401).json({
        error: error.message
      })
      console.log("signature doesnt match")
    }
    //----------security check-----------
    if(event.type === "checkout.session.completed") {
      console.log("Got payment ...............");
    } else {
      console.log("Payment rejected ...............");
    }
    res.status(200).json({
      msg: "resposne from server"
    })
  } catch (error) {
       res.status(401).json({
        error: error.message,
      });
  }
})
