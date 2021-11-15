import React from "react";
import { Link } from "react-router-dom";
import "./company-profile.css";

function CompanyProfile() {
  return (
    <div>
      <div className="company-profile">
        <div>
          <Link to={"/company"}>
            <h4>←</h4>
          </Link>
          <h4>This is the company profile component</h4>
        </div>
        <p>this.name</p>
        <p>this.city</p>
        <p>this.goods</p>
        <div className="jobslist">
          <div>
            <p>job1 name</p>
            <p>job1 time</p>
            <p>job1 distance</p>
            <p>job1 description</p>
          </div>
          <div>
            <p>job2 name</p>
            <p>job2 time</p>
            <p>job2 distance</p>
            <p>job2 description</p>
          </div>
          <div>
            <p>job3 name</p>
            <p>job3 time</p>
            <p>job3 distance</p>
            <p>job3 description</p>
          </div>
        </div>
        <button>Edit Details</button>
      </div>
      <Link to={`/company/:id/driverslist`}>
        <button>Find driver</button>
      </Link>
      <Link to="/company/:id/newjob">
        <label>
          {" "}
          Post new job<button>+</button>
        </label>
      </Link>
    </div>
  );
}

export default CompanyProfile;
