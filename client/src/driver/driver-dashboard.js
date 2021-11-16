import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./driver-dashboard.css";
// import CommomDashboard from "../common-dashboard/common-dashboard";

function DriverDashboard({ postDriverProfile }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("Fruits, vegetables");
  const [time, setTime] = useState("1-4 Hours");

  const navigate = useNavigate();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  function handleTimeChange(e) {
    setTime(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !city) return alert(`Driver, please complete the form!`);
    postDriverProfile({ name, city, job, time }); // Post driver
    setName("");
    setCity("");
    setJob("Fruits, vegetables");
    setTime("1-4 Hours");
    navigate("/driver/:id");
  }

  return (
    <div>
      <h5>Driver, please, tell us a bit about you</h5>
      <form
        type="submit"
        className="driver-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className="driver-label">
          {" "}
          Name
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
        <label className="driver-label">
          {" "}
          City Based
          <input
            id="city"
            type="text"
            placeholder="City based"
            value={city}
            onChange={handleCityChange}
          ></input>
        </label>
        <label className="driver-label">
          {" "}
          Kind of Job
          <select
            id="job"
            type="text"
            value={job}
            placeholder="Kind of job desired to work with"
            onChange={handleJobChange}
          >
            <option value="Fruits, vegetables">
              Fruits, vegetables, legumes
            </option>
            <option value="Small industrial products">
              Small industrial products
            </option>
            <option value="Personal stuff">Personal stuff</option>
            <option value="Electronics">Electronics</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="driver-label">
          {" "}
          Time available
          <select
            id="city"
            type="text"
            placeholder="How many hours you have available"
            value={time}
            onChange={handleTimeChange}
          >
            <option value="1-4 Hours">1-4 Hours</option>
            <option value="4-7 Hours">4-7 Hours</option>
            <option value="7-10 Hours">7-10 Hours</option>
          </select>
        </label>
        <button className="driver-btn">Create your profile!</button>
      </form>
    </div>
  );
}

export default DriverDashboard;
