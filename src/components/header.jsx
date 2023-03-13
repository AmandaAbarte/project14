import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";

export default function Header() {
  let navigate = useNavigate();
  const employees = () => {
    navigate("/employees");
  };
  const home = () => {
    navigate("/");
  };
  return (
    <header>
      <div className="logo-container" onClick={home}>
        <img src={logo} alt="" />
        <h1>HRnet</h1>
      </div>
      <div>
        <p onClick={employees} className="a">
          {" "}
          View Employees
        </p>
        <p onClick={home} className="a">
          {" "}
          Register Employee
        </p>
      </div>
    </header>
  );
}
