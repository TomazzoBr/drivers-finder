import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./common-dashboard.css";

function CommomDashboard() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" />
        </Routes>
        <div className="app-name">
          <h1>Logo</h1>
          <h1 className="driver-finder"> Driver Finder </h1>
        </div>
        <div className="dashboard">
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
