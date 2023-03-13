import React from "react";
import CreateEmployee from "../employeeForm";
import Modal from "../modal/modal";

export default function Home() {
  return (
    <div className="home-container">
      <CreateEmployee />
      <Modal />
    </div>
  );
}
