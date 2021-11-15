import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register({ handleClick }) {
  return (
    <div>
      <div className="company-register">
        <Link
          to="/company"
          onClick={() => handleClick("company")}
          style={{ textDecoration: "none" }}
        >
          <label htmlFor="company" className="company-link">
            {" "}
            I'M A COMPANY
          </label>
        </Link>
      </div>
      <div className="driver-register">
        <Link
          to="/driver"
          onClick={() => handleClick("driver")}
          style={{ textDecoration: "none" }}
        >
          <label htmlFor="driver" className="driver-link">
            {" "}
            I'M A DRIVER
          </label>
        </Link>
      </div>
    </div>
  );
}

export default Register;
