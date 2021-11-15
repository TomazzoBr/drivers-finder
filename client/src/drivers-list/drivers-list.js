import React from "react";
import { Link } from "react-router-dom";
import "./drivers-list.css";

function DriversList() {
  return (
    <div className="driverslist">
      <div>
        <Link to={"/company/:id"}>
          <h4>← Back to profile</h4>
        </Link>
      </div>
      <ul>
        <div>
          <ol>Driver1</ol>
          <p title="select driver">🚚</p>
        </div>
        <div>
          <ol>Driver2</ol>
          <p title="select driver">🚚</p>
        </div>
        <div>
          <ol>Driver3</ol>
          <p title="select driver">🚚</p>
        </div>
      </ul>
    </div>
  );
}

export default DriversList;
