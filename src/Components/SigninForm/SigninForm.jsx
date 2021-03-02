import React, { useState } from "react";
import { connect } from "react-redux";
import { signin } from "./../../Redux/auth/authActions";
import "./SigninForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";
import "./SigninForm.css";

const SigninForm = ({ signin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSumit = (e) => {
    e.preventDefault();
    var cred = {
      email,
      password,
    };
    signin(cred);
  };
  return (
    <form className="sign-in-form" onSubmit={handleFormSumit}>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="password"
      />
      <Button
        type="submit"
        background="rgba(0,0,0,0.7)"
        style={{ width: "70%", marginTop: "2em" }}
        color="white"
      >
        sign in
      </Button>
      {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type="submit" >Submit</button> */}
    </form>
  );
};

var actions = {
  signin,
};

export default connect(null, actions)(SigninForm);
