import React, { useState } from "react";
import { connect } from "react-redux";
import { signup } from "./../../Redux/auth/authActions";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";
import "./SignupForm.css";

const SignupForm = ({ signup }) => {
  var [fullName, setFullName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var handleFormSumit = (e) => {
    e.preventDefault();
    var cred = {
      fullName,
      email,
      password,
    };
    signup(cred);
  };
  return (
    <form className="sign-up-form" onSubmit={handleFormSumit}>
      <TextField
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        id="standard-basic"
        style={{ width: "100%" }}
        label="full name"
      />
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
        sign up
      </Button>
      {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type="submit" >Submit</button> */}
    </form>
  );
};

var actions = {
  signup,
};

export default connect(null, actions)(SignupForm);
