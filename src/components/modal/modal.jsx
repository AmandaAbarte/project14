import React from "react";

export default function Modal({ content, close, modalState }) {
  return (
    modalState && (
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-title">
            <p onClick={close} className="close-modal">
              X
            </p>
          </div>
          <div className="modal-custom-content">{content}</div>
        </div>
      </div>
    )
  );
}
