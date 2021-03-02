import React from "react";
import SigninForm from "../../Components/SigninForm/SigninForm";
import SignoutBtn from "../../Components/SignoutBtn/SignoutBtn";
import SignupForm from "../../Components/SignupForm/SignupForm";
import GoogleSigninBtn from "../../Components/GoogleSigninBtn/GoogleSigninBtn";
import "./Authtentication.css";
import AuthForm from "../../Components/AuthForm/AuthForm";

const Authtentication = () => {
  return (
    <div className="authentication">
      <div className="auth-left"></div>
      <div className="auth-right center" style={{alignItems: "start"}}>
        <AuthForm />
      </div>
      {/* <h1>Authtentication page</h1>
            <SignupForm/>
            <SigninForm/>
            <GoogleSigninBtn/>
            <SignoutBtn/> */}
    </div>
  );
};

export default Authtentication;
