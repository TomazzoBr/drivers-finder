import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./register.css";

function Register() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Register;
