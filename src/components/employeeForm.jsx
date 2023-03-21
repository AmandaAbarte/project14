import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../context/employeeSlice.slice";
import Dropdown from "./dropdown/dropdown";
import DatePicker from "react-date-picker";
import calendar from "../calendar.svg";

import { Modal } from "@amandaabarte/react-modal-lib";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const dropdowns = useSelector((state) => state.dropdown.dropdowns);
  const [modalVisibility, setModalVisibility] = useState(false);
  let navigate = useNavigate();
  const employees = () => {
    navigate("/employees");
  };
  const [dateofbirth, setdateofbirth] = useState("");
  const [startdate, setstartdate] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    street: "",
    city: "",
    zipcode: "",
  });
  //update form data on change
  function handleInput(event) {
    const name = event.target.id;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  //dispatch empoyee data to store on submit
  const saveEmployee = (e) => {
    e.preventDefault();
    //set date format before dispatching to store
    let birthDMY = `${dateofbirth.getDate()}-${
      dateofbirth.getMonth() + 1
    }-${dateofbirth.getFullYear()}`;
    let startDMY = `${startdate.getDate()}-${
      startdate.getMonth() + 1
    }-${startdate.getFullYear()}`;
    dispatch(
      addEmployee({
        ...formData,

        dateofbirth: birthDMY,
        startdate: startDMY,
        state: dropdowns.state,
        department: dropdowns.department,
      })
    );
    setModalVisibility(true);
    setFormData({
      firstname: "",
      lastname: "",
      street: "",
      city: "",
      zipcode: "",
    });
  };
  const closeModal = () => {
    setModalVisibility(false);
  };
  //dropdown data
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const departments = [
    "Sales",
    "Marketing",
    "Legal",
    "HR",
    "Engineering",
    "IT",
  ];
  const calendarIcon = <img src={calendar} />;
  const modalContent = (
    <div>
      <p>Employee Saved!</p>

      <p onClick={employees} className="a">
        See registered employees
      </p>
    </div>
  );
  return (
    <>
      <form onSubmit={saveEmployee}>
        <h2>Create Employee</h2>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          onChange={handleInput}
          required
          className="input"
          value={formData.firstname}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          onChange={handleInput}
          required
          className="input"
          value={formData.lastname}
        />

        <label htmlFor="dateofbirth">Date of Birth</label>
        <DatePicker
          onChange={setdateofbirth}
          value={dateofbirth}
          format="dd-MM-y"
          yearPlaceholder="YYYY"
          monthPlaceholder="MM"
          dayPlaceholder="DD"
          calendarIcon={calendarIcon}
        />
        <label htmlFor="startdate">Start Date</label>
        <DatePicker
          onChange={setstartdate}
          value={startdate}
          format="dd-MM-y"
          yearPlaceholder="YYYY"
          monthPlaceholder="MM"
          dayPlaceholder="DD"
          calendarIcon={calendarIcon}
        />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={handleInput}
            className="input"
            value={formData.street}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={handleInput}
            required
            className="input"
            value={formData.city}
          />

          <label htmlFor="state">State</label>
          <Dropdown list={states} name="state" id="state" />

          <label htmlFor="zipcode">Zip Code</label>
          <input
            id="zipcode"
            type="number"
            onChange={handleInput}
            required
            className="input"
            value={formData.zipcode}
          />
        </fieldset>
        <label htmlFor="department">Department</label>
        <Dropdown list={departments} name="department" id="department" />
        <button type="submit" className="button">
          Save
        </button>
      </form>
      <Modal
        modalState={modalVisibility}
        content={modalContent}
        close={closeModal}
      />
    </>
  );
}
