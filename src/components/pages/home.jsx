import React from "react";
import CreateEmployee from "../employeeForm";
import Modal from "../modal/modal";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const employees = () => {
    navigate("/employees");
  };
  

  return (
    <div className="home-container">
      <h1>HRnet</h1>
      <p onClick={employees} className="a"> View current employees</p>
      <CreateEmployee />
      <Modal />
    </div>
  );
}
