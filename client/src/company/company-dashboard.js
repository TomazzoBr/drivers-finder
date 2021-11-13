import React from "react";
import { useState } from "react";
// import Profile from "../profile/profile";
import "./company-dashboard.css";

function CompanyDashboard() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [goods, setGoods] = useState("");

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
    if (!name || !city || !goods)
      return alert(`You need to complete the form!`);
    console.log(name, city, goods); // Post company
    setName("");
    setCity("");
    setGoods("");
  }

  return (
    <div>
      <h5>Please, tell us a bit about your company</h5>
      <form type="submit" className="company-form" onSubmit={handleSubmit}>
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
            <option value="fresh-food">Fruits, vegetables, legumes</option>
            <option value="industrial">Small industrial products</option>
            <option value="personal">Personal stuff</option>
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
