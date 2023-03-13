import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../context/modalSlice.slice";

export default function Modal() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);

  const closeModal = () => {
    dispatch(setModal(false));
  };
  return (
    showModal && (
      <div className="modal-container">
        <div className="modal-content">
          <p>Employee saved!</p>
          <p onClick={closeModal} className="close-modal">
            X
          </p>
        </div>
      </div>
    )
  );
}
