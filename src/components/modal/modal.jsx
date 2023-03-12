import React, { useState } from "react";

export default function Modal({showModal}) {
  const [isModalOpen, setIsModalOpen] = useState(showModal);
  return (
    showModal && (
      <div className="modal-container">
        <div className="modal-content">
          <p>Employee saved!</p>
          <p>X</p>
        </div>
      </div>
    )
  );
}
