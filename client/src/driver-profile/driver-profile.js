import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./driver-profile.css";

function DriverProfile() {
  // const [driverProfile, setDriverProfile] = useState([]);

  return (
    <div>
      <div>
        <div>
          <Link to={"/driver"}>
            <h4>←</h4>
          </Link>
          <h4>This is the driver profile component</h4>
        </div>
        <p>this.name</p>
        <p>this.city</p>
        <p>this.jobs</p>
        <p>this.time</p>
        <button>Edit Details</button>
      </div>
      <Link to={`/driver/:id/jobslist`}>
        <button>Find jobs Available</button>
      </Link>
    </div>
  );
}

export default DriverProfile;
