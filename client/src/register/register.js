import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import factory from "../media/7.png";
import truck from "../media/6.png";

function Register({ handleClick }) {
  return (
    <div className="options-container">
      <div className="company-register">
        <Link
          to="/company"
          onClick={() => handleClick("company")}
          style={{ textDecoration: "none" }}
        >
          <img
            className="companyimg"
            src={factory}
            alt="Factory company"
            title="Factory company"
          ></img>
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
          <img
            className="driverimg"
            src={truck}
            alt="Truck driver"
            title="Truck driver"
          ></img>
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
