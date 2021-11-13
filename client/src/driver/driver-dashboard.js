import React from "react";
import { useState } from "react";
import "./driver-dashboard.css";

function DriverDashboard() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const [time, setTime] = useState(0);

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

  function handleSubmit() {
    if (!name || !city || !job || !time)
      return alert(`Driver, please complete the form!`);
    console.log(name, city, job, time); // Post driver
    setName("");
    setCity("");
    setJob("");
    setTime(0);
  }

  return (
    <div>
      <h5>Please driver, tell us a bit about you</h5>
      <form type="submit" className="driver-form" onSubmit={handleSubmit}>
        <label>
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
        <label>
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
        <label>
          {" "}
          Kind of Job
          <input
            id="job"
            type="text"
            placeholder="Kind of job desired to work with"
            value={job}
            onChange={handleJobChange}
          ></input>
        </label>
        <label>
          {" "}
          Time available
          <input
            id="city"
            type="text"
            placeholder="How many hours you have available"
            value={time}
            onChange={handleTimeChange}
          ></input>
        </label>
        <button className="driver-btn">Create your profile!</button>
      </form>
    </div>
  );
}

export default DriverDashboard;
