import React from "react";
import CreateEmployee from "./employeeForm";
import Modal from "./modal/modal";

export default function Home() {
  return (
    <div className="home-container">
      <h1>HRnet</h1>
      <a href="/employees"> View current employees</a>
      <CreateEmployee />
      <Modal />
    </div>
  );
}
