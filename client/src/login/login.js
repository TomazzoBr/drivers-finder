import React from "react";
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

export default Login;
