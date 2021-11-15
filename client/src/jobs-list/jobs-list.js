import React from "react";
import { Link } from "react-router-dom";
import "./jobs-list.css";

function JobsList() {
  return (
    <div>
      <div>
        <Link to={"/driver/:id"}>
          <h4>←</h4>
        </Link>
      </div>
      <ul>
        <ol>Job1</ol>
        <ol>Job2</ol>
        <ol>Job3</ol>
      </ul>
    </div>
  );
}

export default JobsList;
