import React from "react";
import { Link } from "react-router-dom";
import "./jobs-list.css";

function JobsList() {
  return (
    <div className="jobs-list-container">
      <div>
        <Link
          to={"/driver/:id"}
          style={{
            "text-decoration": "none",
          }}
        >
          <h4 className="left-arrow">← Jobs available</h4>
        </Link>
      </div>
      <div className="jobslist">
        <div className="jobs">
          <h3>Delivery of 5 boxes of laptops to Codeworks</h3>
          <h5>From Castelldefels To Barcelona</h5>
          <h5>Short Distance</h5>
          <h5>
            Our company needs to delivery a few boxes of laptops to a School in
            Poblenou, Barcelona. Payment of 10 euros.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default JobsList;
