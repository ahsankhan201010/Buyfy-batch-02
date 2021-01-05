import { firestore, serverTimestamp} from "./../../Firebase/Firebase";
import history from './../../history/history';

export var generateOrder = () => async (dispatch, getState) => {
  try {
    var { auth, cart: products } = getState();
    var orderInfo = {
      ...auth,
      products,
      createdAt: serverTimestamp(),
      orderStatus: "pending"
    };
    var order = await firestore.collection("orders").add(orderInfo);
    history.push(`/checkout/${order.id}`)
  } catch (error) {
    console.log(error);
  }
};
