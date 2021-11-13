import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CommonDashboard from "./common-dashboard/common-dashboard";
import CompanyDashboard from "./company/company-dashboard";
import DriverDashboard from "./driver/driver-dashboard";

function App() {
  const [userState, setUserState] = useState("none");

  function handleClick(user) {
    if (user === "company") {
      setUserState("company");
    } else if (user === "driver") {
      setUserState("driver");
    }
  }

  return (
    <div className="App">
      <CommonDashboard user={userState} />
      <Router>
        <Routes>
          <Route path="/company" exact element={<CompanyDashboard />} />
          <Route path="/driver" exact element={<DriverDashboard />} />
        </Routes>
        <div className="checkboxes">
          <div className="company-checkbox">
            <Link to="/company">
              <label htmlFor="company" onClick={() => handleClick("company")}>
                {" "}
                I'm a Company
              </label>
            </Link>
          </div>
          <div className="driver-checkbox">
            <Link to="/driver">
              <label htmlFor="driver" onClick={() => handleClick("driver")}>
                {" "}
                I'm a Driver
              </label>
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
