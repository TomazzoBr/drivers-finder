import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import CommomDashboard from "../common-dashboard/common-dashboard";
import "./company-dashboard.css";

function CompanyDashboard() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [goods, setGoods] = useState("fruits, vegetables, legumes");

  const navigate = useNavigate();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handleGoodsChange(e) {
    setGoods(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !city) return alert(`You need to complete the form!`);
    console.log(name, city, goods); // Post company
    setName("");
    setCity("");
    setGoods("fruits, vegetables, legumes");
    navigate("/company/:id");
  }

  return (
    <div>
      <h5>Please, tell us a bit about your company</h5>
      <form
        type="submit"
        className="company-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          {" "}
          Company Name
          <input
            id="name"
            type="text"
            placeholder="Company's name"
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
          Type of Goods
          <select
            id="goods"
            type="text"
            placeholder="Kind of goods to transport"
            value={goods}
            onChange={handleGoodsChange}
          >
            <option value="fruits, vegetables, legumes">
              Fruits, vegetables, legumes
            </option>
            <option value="fmall industrial products">
              Small industrial products
            </option>
            <option value="personal stuff">Personal stuff</option>
            <option value="eletronics">Eletronics</option>
            <option value="other">Other</option>
          </select>
        </label>

        <button className="company-btn">Create company profile!</button>
      </form>
    </div>
  );
}

export default CompanyDashboard;
