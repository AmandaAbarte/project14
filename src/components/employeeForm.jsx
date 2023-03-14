import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../context/employeeSlice.slice";
import { setModal } from "../context/modalSlice.slice";
import Dropdown from "./dropdown/dropdown";
import Modal from "./modal/modal";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const dropdowns = useSelector((state) => state.dropdown.dropdowns);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    startdate: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    department: "",
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

    dispatch(addEmployee(formData));
    dispatch(setModal(true));
  };
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
  useEffect(() => {
    setFormData({
      ...formData,
      state: dropdowns.state,
      department: dropdowns.department,
    });
  }, [dropdowns]);
  return (
    <>
      <form onSubmit={saveEmployee}>
        <h2>Create Employee</h2>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" onChange={handleInput} required />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" onChange={handleInput} required />

        <label htmlFor="dateofbirth">Date of Birth</label>
        <input id="dateofbirth" type="date" onChange={handleInput} required />

        <label htmlFor="startdate">Start Date</label>
        <input id="startdate" type="date" onChange={handleInput} required />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" onChange={handleInput} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" onChange={handleInput} required />

          <label htmlFor="state">State</label>
          <Dropdown
            list={states}
            name="state"
            id="state"
            handler={handleInput}
          />

          <label htmlFor="zipcode">Zip Code</label>
          <input id="zipcode" type="number" onChange={handleInput} required />
        </fieldset>
        <label htmlFor="department">Department</label>
        {/* <select
          name="department"
          id="department"
          onChange={handleInput}
          required
        >
          
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select> */}
        <Dropdown
          list={departments}
          name="department"
          id="department"
          handler={handleInput}
        />
        <button type="submit">Save</button>
      </form>
      <Modal />
    </>
  );
}
