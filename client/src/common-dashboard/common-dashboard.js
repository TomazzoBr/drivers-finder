import React from "react";
import { Link } from "react-router-dom";
import truck from "../media/truck.png";
import logo from "../media/aa.png";
import "./common-dashboard.css";

function CommomDashboard({ background }) {
  return (
    <div className="menu">
      <div
        className="app-name"
        style={{
          background: background,
        }}
      >
        <img className="driver-finder" src={logo} alt="logo-name" />
        <img
          className="truck"
          src={truck}
          alt="truck"
          onClick={() => alert("You found a driver!")}
        />
      </div>
      <div
        className="dashboard"
        style={{
          background: background,
        }}
      >
        <Link
          to="/"
          onClick={(background = "rgb(117, 133, 150, 0.6)")}
          style={{ textDecoration: "none" }}
        >
          <h2 style={{ color: "white" }}>Home Sweet Home</h2>
        </Link>
        <h2>Finder</h2>
      </div>
    </div>
  );
}

export default CommomDashboard;
