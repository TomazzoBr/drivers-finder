import React from "react";
// import { Link } from "react-router-dom";
import "./new-job-form.css";

function NewJobForm() {
  return (
    <div className="new-job-form-container">
      <form className="new-job-form">
        <label>
          Kind of Job ⓘ
          <select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          {" "}
          Time Required ⓘ
          <select>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label>
          {" "}
          Distance ⓘ
          <select>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </label>
        <label>
          {" "}
          Job description and payment details
          <input
            id="details"
            type="text"
            placeholder="Please, describe the job and the payment details"
          ></input>
        </label>
        <button>+</button>
      </form>
    </div>
  );
}

export default NewJobForm;
