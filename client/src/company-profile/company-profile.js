import React from "react";
import { Link } from "react-router-dom";
import "./company-profile.css";

function CompanyProfile() {
  return (
    <div>
      <div>
        <h4>This is the company profile component</h4>
        <p>this.name</p>
        <p>this.city</p>
        <p>this.goods</p>
        <p>this.jobs.length</p>
        <button>Edit Details</button>
      </div>
      <Link to={`/company/:id/driverslist`}>
        <button>Find driver</button>
        <label>
          {" "}
          Post new job<button>+</button>
        </label>
      </Link>
    </div>
  );
}

export default CompanyProfile;
