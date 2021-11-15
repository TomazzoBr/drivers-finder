import React from "react";
import { Link } from "react-router-dom";
import "./drivers-list.css";

function DriversList() {
  return (
    <div>
      <div>
        <Link to={"/company/:id"}>
          <h4>← Back to profile</h4>
        </Link>
      </div>
      <ul>
        <ol>Driver1</ol>
        <ol>Driver2</ol>
        <ol>Driver3</ol>
      </ul>
    </div>
  );
}

export default DriversList;
