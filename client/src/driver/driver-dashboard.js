import React from "react";
import "./driver-dashboard.css";

function DriverDashboard({ profile }) {
  return (
    <div>
      <h3>Hello from Driver Dashboard</h3>
      <h5>Please, tell us a bit about you</h5>
      <form>
        <label>
          {" "}
          Name
          <input id="name" type="text" placeholder="Your full name"></input>
        </label>
        <label>
          {" "}
          City Based
          <input id="city" type="text" placeholder="City based"></input>
        </label>
        <label>
          {" "}
          Kind of Job
          <input
            id="goods"
            type="text"
            placeholder="Kind of goods to transport"
          ></input>
        </label>
        <label>
          {" "}
          Time available
          <input id="city" type="text" placeholder="City based"></input>
        </label>
        <button>Create your profile!</button>
      </form>
    </div>
  );
}

export default DriverDashboard;
