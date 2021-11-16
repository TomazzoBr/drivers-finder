import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./new-job-form.css";

function NewJobForm({ postNewJob }) {
  const [kindOfJob, setKindOfJob] = useState("Small");
  const [timeRequired, setTimeRequired] = useState("Low");
  const [distance, setDistance] = useState("Short");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  function handleJobChange(e) {
    setKindOfJob(e.target.value);
  }

  function handleTimeChange(e) {
    setTimeRequired(e.target.value);
  }

  function handleDistanceChange(e) {
    setDistance(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDetails(e.target.value);
  }

  function handleSubmit() {
    if (!details) return alert(`Please, describe the job.`);
    postNewJob({ kindOfJob, timeRequired, distance, details }); // Post job
    setKindOfJob("Small");
    setTimeRequired("Low");
    setDistance("Short");
    setDetails("");
    navigate("/company/:id");
  }

  return (
    <div className="new-job-form-container">
      <Link
        to={"/company/:id"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h4>←</h4>
      </Link>
      <form className="new-job-form" onSubmit={handleSubmit}>
        <label
          className="form-label"
          title=" Small: 4 packages of 60x30cm &#13;
        Medium: 8 packages of 60x30cm &#13;
        Large: 12 packages of 60x30cm"
        >
          Kind of Job ⓘ
          <select onChange={handleJobChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label
          className="form-label"
          title=" Low: 1-4 Hours &#13;
        Medium: 4-7 Hours &#13;
        High: 7-10"
        >
          {" "}
          Time Required ⓘ
          <select onChange={handleTimeChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label
          className="form-label"
          title=" Short: 0-200 Km &#13;
        Medium: 200-500 Km &#13;
        Long: 500-700 Km"
        >
          {" "}
          Distance ⓘ
          <select onChange={handleDistanceChange}>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </label>
        <label className="form-label">
          {" "}
          Job description and payment details
          <input
            className="input-describe"
            id="details"
            type="text"
            placeholder="Please, describe the job and the payment details"
            onChange={handleDescriptionChange}
          ></input>
        </label>
        <div className="btn-container">
          <button className="add-job-btn">+</button>
        </div>
      </form>
    </div>
  );
}

export default NewJobForm;
