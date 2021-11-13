import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./driver-profile.css";

function Profile({ user }) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/driver/:id/jobslist" />
        </Routes>
        <div>
          <h4>This is the profile component</h4>
          <p>this.name</p>
          <p>this.city</p>
          <p>this.jobs</p>
          <p>this.time</p>
          <button>Edit Details</button>
        </div>
        <Link to="/driver/:id/jobslist">
          <button>Find jobs Available</button>
        </Link>
      </Router>
    </div>
  );
}

export default Profile;
