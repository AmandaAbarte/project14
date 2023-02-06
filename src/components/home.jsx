import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
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
  }

  function saveEmployee(e) {
    e.preventDefault();
    dispatch({
      type: "getEmployees",
      data: formData,
    });
    // console.log(formData);
  }

  useEffect(() => {
    localStorage.setItem("employeeData", JSON.stringify(data));
    console.log(data);
  }, [data]);
  
  return (
    <div className="home-container">
      <h1>HRnet</h1>
      <a href="/employees"> View current employees</a>
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
          <select name="state" id="state" onChange={handleInput}>
            <option>Alabama</option>
            <option>California</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>

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
    </div>
  );
}
