import React from "react";
import { connect } from "react-redux";
import { driverDashboard, companyDashboard } from "./redux/action";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CommonDashboard from "./common-dashboard/common-dashboard";
import CompanyDashboard from "./company/company-dashboard";
import CompanyProfile from "./company-profile/company-profile";
import DriversList from "./drivers-list/drivers-list";
import DriverDashboard from "./driver/driver-dashboard";
import DriverProfile from "./driver-profile/driver-profile";
import JobsList from "./jobs-list/jobs-list";
import NewJobForm from "./new-job-form/new-job-form";
import ApiService from "./api/api-service";
import HomeDashboard from "./home/home";
import Login from "./login/login";
import Register from "./register/register";

function App() {
  const [background, setBackground] = useState();
  const [company, setCompany] = useState({});
  const [driver, setDriver] = useState({});
  const [job, setJob] = useState([]);

  function handleClick(user) {
    if (user === "company") {
      setBackground("rgb(135, 206, 250, 0.9)");
    } else if (user === "driver") {
      setBackground("rgb(97, 194, 110, 0.9)");
    } else {
      setBackground("rgb(117, 133, 150, 0.9)");
    }
  }

  // --- GET FUNCTIONS ----

  useEffect(() => {
    ApiService.getCompanyProfile().then((company) => {
      setCompany(company);
    });
    ApiService.getDriverProfile().then((driver) => {
      setDriver(driver);
    });
    ApiService.getJobs().then((job) => {
      setJob(job);
    });
  }, []);

  // --- POST FUNCTIONS ----

  function postCompanyProfile(company) {
    ApiService.postCompanyProfile({ company }).then((company) =>
      setCompany(company)
    );
  }

  function postDriverProfile(driver) {
    ApiService.postDriverProfile({ driver }).then((driver) =>
      setDriver(driver)
    );
  }

  function postNewJob(job) {
    ApiService.postNewJob({ job }).then((job) => setJob(job));
  }

  return (
    <div className="App">
      <Router>
        <CommonDashboard background={background} />
        <Routes>
          <Route path="/" exact element={<HomeDashboard />} />
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/register"
            exact
            element={<Register handleClick={handleClick} />}
          />
          <Route
            path="/company"
            exact
            element={
              <CompanyDashboard postCompanyProfile={postCompanyProfile} />
            }
          />
          <Route
            path="/company/:id"
            element={<CompanyProfile company={company} />}
          />
          <Route
            path="/company/:id/driverslist"
            element={<DriversList driver={driver} />}
          />
          <Route
            path="/company/:id/newjob"
            element={<NewJobForm postNewJob={postNewJob} />}
          />
          <Route
            path="/driver"
            exact
            element={<DriverDashboard postDriverProfile={postDriverProfile} />}
          />
          <Route
            path="/driver/:id"
            exact
            element={<DriverProfile driver={driver} />}
          />
          <Route path="/driver/:id/jobslist" element={<JobsList job={job} />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  // Map your state to props
  // REMOVE-START
  counter: state.counter,
  todos: state.todos,
  //REMOVE-END
});

const mapDispatchToProps = (dispatch) => ({
  driverDashboard: () => dispatch(driverDashboard()),
  companyDashboard: () => dispatch(companyDashboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
