import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./common-dashboard.css";

function CommomDashboard(user) {
  return (
    <div className="menu">
      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
        <div
          className="app-name"
          style={{
            background:
              user.user === "company"
                ? "rgb(135, 206, 250, 0.6)"
                : "rgb(97, 194, 110, 0.6)",
          }}
        >
          <h1>Logo</h1>
          <h1 className="driver-finder"> Driver Finder </h1>
        </div>
        <div
          className="dashboard"
          style={{
            background:
              user.user === "company"
                ? "rgb(135, 206, 250, 0.6)"
                : "rgb(97, 194, 110, 0.6)",
          }}
        >
          <Link to="/">
            <h2>Home Sweet Home</h2>
          </Link>
          <h2>Finder</h2>
        </div>
      </Router>
    </div>
  );
}

export default CommomDashboard;
