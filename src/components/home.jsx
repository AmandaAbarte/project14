import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <h1>HRnet</h1>
      <a href="/employees"> View current employees</a>
      <form action="">
        <h2>Create Employee</h2>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="date" />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="date" />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state">
            <option>Alabama</option>
            <option>California</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  );
}
