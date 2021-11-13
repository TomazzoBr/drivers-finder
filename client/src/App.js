import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CommonDashboard from "./common-dashboard/common-dashboard";
import CompanyDashboard from "./company/company-dashboard";
import CompanyProfile from "./company-profile/company-profile";
import DriversList from "./drivers-list/drivers-list";
import DriverDashboard from "./driver/driver-dashboard";
import DriverProfile from "./driver-profile/driver-profile";
import JobsList from "./jobs-list/jobs-list";

function App() {
  const [background, setBackground] = useState();
  // none = "rgba(117, 133, 150, 0.6)"
  // company = "rgb(135, 206, 250, 0.6)"
  // driver = "rgb(97, 194, 110, 0.6)"

  function handleClick(user) {
    if (user === "company") {
      setBackground("rgb(135, 206, 250, 0.6)");
    } else if (user === "driver") {
      setBackground("rgb(97, 194, 110, 0.6)");
    } else {
      setBackground("rgb(117, 133, 150, 0.6)");
    }
  }

  return (
    <div className="App">
      <Router>
        <CommonDashboard background={background} />
        <Routes>
          <Route path="/" />
          <Route path="/company" exact element={<CompanyDashboard />} />
          <Route path="/company/:id" exact element={<CompanyProfile />} />
          <Route path="/company/:id/driverslist" element={<DriversList />} />
          <Route path="/driver" exact element={<DriverDashboard />} />
          <Route path="/driver/:id" exact element={<DriverProfile />} />
          <Route path="/driver/:id/jobslist" element={<JobsList />} />
        </Routes>
        <div className="checkboxes">
          <div className="company-checkbox">
            <Link to="/company" onClick={() => handleClick("company")}>
              <label htmlFor="company"> I'm a Company</label>
            </Link>
          </div>
          <div className="driver-checkbox">
            <Link to="/driver" onClick={() => handleClick("driver")}>
              <label htmlFor="driver"> I'm a Driver</label>
            </Link>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

// <input
//                 type="checkbox"
//                 className="company"
//                 id="company"
//                 value="company"
//                 onClick={() => console.log("company")}
//               ></input>

// <input
//                 type="checkbox"
//                 className="driver"
//                 id="driver"
//                 value="driver"
//                 onClick={() => console.log("driver")}
//               ></input>
