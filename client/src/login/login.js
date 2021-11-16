import React from "react";
// import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h4>Welcome back!</h4>
        <input type="email" placeholder="Please, insert your e-mail"></input>
        <input
          type="password"
          placeholder="Please, inser your password"
        ></input>
        <button className="login-btn">Enter</button>
      </form>
    </div>
  );
}

// form on submit should redirect to the profile page
export default Login;
