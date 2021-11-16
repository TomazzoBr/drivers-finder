import React from "react";
import { Link } from "react-router-dom";
import "./company-profile.css";

function CompanyProfile({ company }) {
  return (
    <div className="company-profile">
      <div>
        <Link
          to={"/company"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 className="left-arrow">←</h4>
        </Link>
        {company ? <h4>Hello, {company.name}!</h4> : <h4>Hello stranger!</h4>}
      </div>
      <div className="company-data">
        {company ? (
          <div className="wrapper">
            <h3>Name: {company.name}</h3>
            <p>City based: {company.city}</p>
            <p>Type of goods: {company.goods}</p>
          </div>
        ) : (
          <div className="wrapper">
            <p>No Data</p>
          </div>
        )}
        <button className="edit-btn">Edit Details</button>
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
      <div className="bottom-container">
        <div>
          <Link
            to={`/company/:id/driverslist`}
            style={{ textDecoration: "none" }}
          >
            <button className="find-driver">Find driver</button>
          </Link>
        </div>
        <Link to="/company/:id/newjob" style={{ textDecoration: "none" }}>
          <label className="btn-label">
            {" "}
            Post new job<button className="add-btn">+</button>
          </label>
        </Link>
      </div>
    </div>
  );
}

export default CompanyProfile;

// {job ? (
//   <div>
//     <p>{job}</p>
//   </div>
// ) : (
//   <p>No jobs created.</p>
// )}
