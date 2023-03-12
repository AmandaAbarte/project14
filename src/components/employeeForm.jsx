import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./dropdown";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
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
    console.log(name, value);
  }

  function saveEmployee(e) {
    e.preventDefault();
    dispatch({
      type: "getEmployees",
      data: formData,
    });
  }
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
  return (
    <form action="">
      <h2>Create Employee</h2>
      <label htmlFor="firstname">First Name</label>
      <input type="text" id="firstname" onChange={handleInput} />
      <label htmlFor="lastname">Last Name</label>
      <input type="text" id="lastname" onChange={handleInput} />

      <label htmlFor="dateofbirth">Date of Birth</label>
      <input id="dateofbirth" type="date" onChange={handleInput} />

      <label htmlFor="startdate">Start Date</label>
      <input id="startdate" type="date" onChange={handleInput} />
      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" onChange={handleInput} />

        <label htmlFor="city">City</label>
        <input id="city" type="text" onChange={handleInput} />

        <label htmlFor="state">State</label>
        <Dropdown list={states} name="state" id="state" handler={handleInput} />

        <label htmlFor="zipcode">Zip Code</label>
        <input id="zipcode" type="number" onChange={handleInput} />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select name="department" id="department" onChange={handleInput}>
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <button onClick={saveEmployee}>Save</button>
    </form>
  );
}
