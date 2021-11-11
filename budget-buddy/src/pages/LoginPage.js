import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import firebase from "../firebase.js";

function LoginPage() {
  const auth = firebase.auth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(email);
    console.log(password);
    console.log("Login called");
  };

  return (
    <div className="LoginScreen">
      <div className="container">
        <h1>Login</h1>
        <form className="add-form">
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              placeholder="Input email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="text"
              placeholder="Input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <Button color="green" text="Login" onClick={login} />
      </div>
    </div>
  );
}

export default LoginPage;
