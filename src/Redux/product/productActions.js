import { firestore, serverTimestamp, storage } from "./../../Firebase/Firebase";
import { v4 as uuid } from "uuid";
import { CLEAR_PRODUCTS, SET_PRODUCTS } from "./productContstants";

//admin side stuff
export var uploadProduct = (productObj) => async () => {
  try {
    // console.log(productObj)
    //1 - send file to storage and get download url
    var imageRef = storage.child(`products/img-${uuid()}`);
    var fileListener = imageRef.put(productObj.coverPhoto);
    // fileListener.on(
    // event_type,
    //  cb - file state,
    //  cb - error,
    //  cb - will trigger after file upload)
    fileListener.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        //will trriger after completion
        var downloadURL = await imageRef.getDownloadURL();

        //2 - modify productObj with coverPhoto url and createdAt
        productObj.coverPhoto = downloadURL;
        productObj.createdAt = serverTimestamp();
        productObj.cost = parseFloat(productObj.cost);
        productObj.quantity = parseInt(productObj.quantity);
        console.log(productObj);
        //3 - create doc in firestore
        await firestore.collection("products").add(productObj);
      }
    );
  } catch (error) {
    console.log(error);
  }
};



export var fetchProducts = () => async (dispatch) => {
  try {
    var query = await firestore.collection("products").get();
    var products = [];
    query.docs.forEach((doc) => {
      products.push({...doc.data(), id: doc.id});
    });
    dispatch({
      type: SET_PRODUCTS,
      payload: {
        products //array
      }
    })
  } catch (error) {
    console.log(error);
  }
};

export var fetchCategoryProducts = (category) => async (dispatch) => {
  try {
    var query = await firestore.collection("products").where("category","==",category).get();
    var products = [];
    query.docs.forEach((doc) => {
      products.push({...doc.data(), id: doc.id});
    });
    dispatch({
      type: SET_PRODUCTS,
      payload: {
        products //array
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export var fetchSpecificProduct = (productId) => async (dispatch) => {
  try {
    var query = await firestore.collection("products").doc(productId).get();
    var product = query.data();
    return product
  } catch (error) {
    console.log(error)
  }
}

export var clearProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_PRODUCTS
    })
  } catch (error) {
    console.log(error)
    
  }
}

