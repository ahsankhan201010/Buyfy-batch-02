import React, { useState } from "react";
import "./AuthForm.css";
import Button from "./../Button/Button";
import SigninForm from "../SigninForm/SigninForm";
import SignupForm from "../SignupForm/SignupForm";
import { connect } from "react-redux";
import { googleSignin } from "./../../Redux/auth/authActions";

const AuthForm = ({ googleSignin }) => {
  var [formType, setFormType] = useState("sign-in");
  return (
    <div className="auth-form">
      <div className="auth-form-switcher">
        <Button
          onClick={() => setFormType("sign-in")}
          style={{ position: "relative" }}
          background="white"
          color="black"
        >
          Sign in
          <div className="underLiner"></div>
        </Button>
        <Button
          onClick={() => setFormType("sign-up")}
          style={{ position: "relative", justifySelf: "end" }}
          background="white"
          color="black"
        >
          Sign up
          <div className="underLiner"></div>
        </Button>
      </div>
      <div className="auth-form-fields center">
        {formType === "sign-in" ? <SigninForm /> : <SignupForm />}
      </div>
      <div className="auth-form-btns">
        <div className="separator-or">OR</div>
        <Button
          onClick={googleSignin}
          type="button"
          background="rgba(0,0,0,0.7)"
          style={{ width: "70%", marginTop: "2em" }}
          color="white"
        >
          Google Sign-in
        </Button>
      </div>
    </div>
  );
};

var actions = {
  googleSignin,
};

export default connect(null, actions)(AuthForm);
