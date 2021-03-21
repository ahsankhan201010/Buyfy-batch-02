import { firestore, serverTimestamp } from "./../../Firebase/Firebase";
import history from "./../../history/history";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IXPMzBsYP4EjIFwgqm8KQS2qtAj5GlNU8x7u0PsRsaJ8dg9iB233Ae9YDQmsBJA5ptA6WpTfUmRSGqq4r5Tremv00NW3dufmC"
);

export var generateOrder = () => async (dispatch, getState) => {
  try {
    var { auth } = getState();
    if (auth) {
      var orderInfo = {
        orderedBy: auth.uid,
        createdAt: serverTimestamp(),
        orderStatus: "pending",
      };
      console.log(orderInfo);
      var order = await firestore.collection("orders").add(orderInfo);
      history.push(`/checkout/${order.id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export var processOrder = ({ orderId, addressInfo, cart }) => async (
  dispatch
) => {
  try {
    const stripe = await stripePromise;
    //update order info
    await firestore
      .collection("/orders")
      .doc(orderId)
      .update({ addressInfo, cart });
    //call to stripe checkout session api
    var response = await fetch(
      "https://us-central1-buyfy-batch-02.cloudfunctions.net/generateCheckoutSession",
      {
        method: "POST",
        body: JSON.stringify({ orderId }),
      }
    );
    var {
      data: { session },
    } = await response.json();
    console.log(session);
    //redirect to stripe checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  } catch (error) {
    console.log(error);
  }
};
