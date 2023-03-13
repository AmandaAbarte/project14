import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../context/modalSlice.slice";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);
  const employees = () => {
    navigate("/employees");
    dispatch(setModal(false));
  };
  const closeModal = () => {
    dispatch(setModal(false));
  };
  return (
    showModal && (
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-title">
            <p>Employee saved!</p>
            <p onClick={closeModal} className="close-modal">
              X
            </p>
          </div>
          <p onClick={employees} className="a">
            See registered employees
          </p>
        </div>
      </div>
    )
  );
}
