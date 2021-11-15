import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function HomeDashboard() {
  return (
    <div className="home">
      <div className="company-register">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <label htmlFor="company" className="company-link">
            {" "}
            LOGIN
          </label>
        </Link>
      </div>
      <div className="driver-register">
        <Link to="/register" style={{ textDecoration: "none" }}>
          <label htmlFor="driver"> REGISTER</label>
        </Link>
      </div>
    </div>
  );
}

export default HomeDashboard;
