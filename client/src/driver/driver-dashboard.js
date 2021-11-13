import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./driver-dashboard.css";
// import CommomDashboard from "../common-dashboard/common-dashboard";

function DriverDashboard() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const [time, setTime] = useState(0);

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
    if (!name || !city || !time)
      return alert(`Driver, please complete the form!`);
    console.log(name, city, job, time); // Post driver
    setName("");
    setCity("");
    setTime(0);
    navigate("/driver/:id");
  }

  return (
    <div>
      <h5>Please driver, tell us a bit about you</h5>
      <form
        type="submit"
        className="driver-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
          <select
            id="job"
            type="text"
            placeholder="Kind of job desired to work with"
            value={job}
            onChange={handleJobChange}
          >
            <option value="fresh-food">Fruits, vegetables, legumes</option>
            <option value="industrial">Small industrial products</option>
            <option value="personal">Personal stuff</option>
            <option value="eletronics">Eletronics</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          {" "}
          Time available
          <select
            id="city"
            type="text"
            placeholder="How many hours you have available"
            value={time}
            onChange={handleTimeChange}
          >
            <option value="short">1-4 Hours</option>
            <option value="medium">4-7 Hours</option>
            <option value="long">7-10 Hours</option>
          </select>
        </label>
        <button className="driver-btn">Create your profile!</button>
      </form>
    </div>
  );
}

export default DriverDashboard;
