import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./company-dashboard.css";

function CompanyDashboard({ postCompanyProfile }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [goods, setGoods] = useState("Fruits, vegetables");

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

  function handleSubmit() {
    if (!name || !city) return alert(`You need to complete the form!`);
    postCompanyProfile({ name, city, goods });
    setName("");
    setCity("");
    setGoods("Fruits, vegetables");
    navigate("/company/:id");
  }

  return (
    <div>
      <h5>Please, tell us a bit about your company</h5>
      <form type="submit" className="company-form" onSubmit={handleSubmit}>
        <label className="company-label">
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
        <label className="company-label">
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
        <label className="company-label">
          {" "}
          Type of Goods
          <select
            id="goods"
            type="text"
            placeholder="Kind of goods to transport"
            value={goods}
            onChange={handleGoodsChange}
          >
            <option value="Fruits, vegetables">Fruits, vegetables</option>
            <option value="Small industrial products">
              Small industrial products
            </option>
            <option value="Personal stuff">Personal stuff</option>
            <option value="Electronics">Electronics</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button className="company-btn">Create company profile!</button>
      </form>
    </div>
  );
}

export default CompanyDashboard;
