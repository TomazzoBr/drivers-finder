import React from "react";
import { Link } from "react-router-dom";
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
        <h1>Logo</h1>
        <h1 className="driver-finder"> Driver Finder </h1>
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
          <h2>Home Sweet Home</h2>
        </Link>
        <h2>Finder</h2>
      </div>
    </div>
  );
}

export default CommomDashboard;
