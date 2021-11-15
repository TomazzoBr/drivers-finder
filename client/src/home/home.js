import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function HomeDashboard() {
  return (
    <div className="home">
      <div className="login">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <label htmlFor="company" className="login-link">
            {" "}
            LOGIN
          </label>
        </Link>
      </div>
      <div className="register">
        <Link to="/register" style={{ textDecoration: "none" }}>
          <label htmlFor="driver" className="register-link">
            {" "}
            REGISTER
          </label>
        </Link>
      </div>
    </div>
  );
}

export default HomeDashboard;
