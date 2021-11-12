import React from "react";
import "./company-dashboard.css";

function CompanyDashboard() {
  return (
    <div>
      <h3>Hello from Company Dashboard</h3>
      <h5>Please, tell us a bit about your company</h5>
      <form>
        <label>
          {" "}
          Company Name
          <input id="name" type="text" placeholder="Company's name"></input>
        </label>
        <label>
          {" "}
          City Based
          <input id="city" type="text" placeholder="City based"></input>
        </label>
        <label>
          {" "}
          Type of Goods
          <input
            id="goods"
            type="text"
            placeholder="Kind of goods to transport"
          ></input>
        </label>
        <button>Create company profile!</button>
      </form>
    </div>
  );
}

export default CompanyDashboard;
