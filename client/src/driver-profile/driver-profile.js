import React from "react";
import { Link } from "react-router-dom";
import "./driver-profile.css";

function DriverProfile({ driver }) {
  return (
    <div className="driver-data">
      <div>
        <div>
          <div>
            <Link
              to={"/driver"}
              style={{
                textDecoration: "none",
              }}
            >
              <h4 className="left-arrow">←</h4>
            </Link>
            {driver ? <h4>Hello, {driver.name}!</h4> : <h4>Hello stranger!</h4>}
          </div>
          {driver ? (
            <div className="wrapper">
              <h5>Name: {driver.name}</h5>
              <p>City based: {driver.city}</p>
              <p>Type of job: {driver.job}</p>
              <p>Time available: {driver.time}</p>
            </div>
          ) : (
            <div className="wrapper">
              <p>No Data</p>
            </div>
          )}
          <button className="edit-btn">Edit Details</button>
        </div>
      </div>
      <div className="find-jobs">
        <Link to={`/driver/:id/jobslist`}>
          <button className="find-btn">Find jobs available</button>
        </Link>
      </div>
    </div>
  );
}

export default DriverProfile;
