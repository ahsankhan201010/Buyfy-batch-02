import { auth, firestore, serverTimestamp } from "./../../Firebase/Firebase";
import { REMOVE_USER, SET_USER } from "./authContstants";

export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export var removeUser = () => ({
  type: REMOVE_USER
});

export var signup = ({ email, password, fullName }) => async (dispatch) => {
  try {
    //create user on firebase auth section
    var {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password);

    //save user data to firestore
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimestamp(),
    };
    await firestore.collection("users").doc(uid).set(userInfo);

    //setting up redux state
    var userDataForState = {
      fullName,
      email,
      uid,
    };
    dispatch(setUser(userDataForState));
  } catch (error) {
    console.log(error);
  }
};

export var signin = ({ email, password }) => async (dispatch) => {
  try {
    //signin user with auth
    var {
      user: { uid },
    } = await auth.signInWithEmailAndPassword(email, password);
    //fetch user data from firestore
    var userData = await firestore.collection("users").doc(uid).get();
    var { fullName, email: userEmail } = userData.data();
    //set user data to auth state
    var userDataForState = {
      fullName,
      email: userEmail,
      uid,
    };
    dispatch(setUser(userDataForState));
  } catch (error) {
    console.log(error);
  }
};

export var signout = () => async (dispatch) => {
  try {
      //signout user from firebase auth
      await auth.signOut();
      //set auth state to null
      dispatch(removeUser())
  } catch (error) {
    console.log(error);
  }
};
