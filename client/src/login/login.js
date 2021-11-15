import React from "react";
// import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div>
      <form>
        <input type="email" placeholder="Please, insert your e-mail"></input>
        <input
          type="password"
          placeholder="Please, inser your password"
        ></input>
        <button>Enter</button>
      </form>
    </div>
  );
}

// form on submit should redirect to the profile page
export default Login;
