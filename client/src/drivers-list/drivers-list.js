import React from "react";
import { Link } from "react-router-dom";
import "./drivers-list.css";

function DriversList() {
  return (
    <div className="driverslist">
      <div>
        <Link
          to={"/company/:id"}
          style={{
            textDecoration: "none",
          }}
        >
          <h4 className="left-arrow">← Back to profile</h4>
        </Link>
      </div>
      <div className="driver-option">
        <h3>Yevhen Prots</h3>
        <p>Accept: medium size jobs</p>
        <p
          title="select driver"
          onClick={() => alert("Message sent to the driver!")}
        >
          🚚
        </p>
      </div>
      <div className="driver-option">
        <h3>Grega Erzen</h3>
        <p>Accept: small size jobs</p>
        <p
          title="select driver"
          onClick={() => alert("Message sent to the driver!")}
        >
          🚚
        </p>
      </div>
      <div className="driver-option">
        <h3>Eugen Nikolajev</h3>
        <p>Accept: small size jobs</p>
        <p
          title="select driver"
          onClick={() => alert("Message sent to the driver!")}
        >
          🚚
        </p>
      </div>
    </div>
  );
}

export default DriversList;
