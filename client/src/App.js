import React from "react";
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
  const [companies, setCompanies] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [jobs, setJobs] = useState([]);

  function handleClick(user) {
    if (user === "company") {
      setBackground("rgb(135, 206, 250, 0.6)");
    } else if (user === "driver") {
      setBackground("rgb(97, 194, 110, 0.6)");
    } else {
      setBackground("rgb(117, 133, 150, 0.6)");
    }
  }

  // --- GET USE EFFECTS ----

  // get companies
  useEffect(() => {
    ApiService.getCompanyProfile().then((companies) => {
      setCompanies(companies);
    });
  }, []);

  // get drivers
  useEffect(() => {
    ApiService.getDriverProfile().then((drivers) => {
      setDrivers(drivers);
    });
  }, []);

  //get jobs
  useEffect(() => {
    ApiService.getJobs().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  // --- POST FUNCTIONS ----

  // post company profile
  function postCompanyProfile(company) {
    ApiService.postCompanyProfile({ company }).then((company) =>
      setCompanies((companies) => [...companies, company])
    );
  }
  // post driver
  function postDriverProfile(driver) {
    ApiService.postDriverProfile({ driver }).then((driver) =>
      setDrivers((drivers) => [...drivers, driver])
    );
  }
  // post jobs
  function postNewJob(job) {
    ApiService.postNewJob({ job }).then((job) =>
      setJobs((jobs) => [...jobs, job])
    );
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
            element={<CompanyProfile companies={companies} />}
          />
          <Route
            path="/company/:id/driverslist"
            element={<DriversList drivers={drivers} />}
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
            element={<DriverProfile drivers={drivers} />}
          />
          <Route
            path="/driver/:id/jobslist"
            element={<JobsList jobs={jobs} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
