import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "../table/table";

export default function Employees() {
  //handle navigation for "home button"
  let navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  //get employee data from store
  const employees = useSelector((state) => state.employee.employees);
  //organise employee data for table
  const employeesArray = employees.map((employee) => {
    return [
      { title: employee.firstname, key: "firstname" },
      { title: employee.lastname, key: "lastname" },
      { title: employee.dateofbirth, key: "dateofbirth" },
      { title: employee.startdate, key: "startdate" },
      { title: employee.street, key: "street" },
      { title: employee.city, key: "city" },
      { title: employee.state, key: "state" },
      { title: employee.zipcode, key: "zipcode" },
      { title: employee.department, key: "department" },
    ];
  });
  const columnTitles = [
    {
      title: "First Name",
      key: "firstname",
    },
    {
      title: "Last Name",
      key: "lastname",
    },
    {
      title: "Start Date",
      key: "startdate",
    },
    {
      title: "Department",
      key: "department",
    },
    {
      title: "Date of Birth",
      key: "dateofbirth",
    },
    {
      title: "Street",
      key: "street",
    },
    {
      title: "City",
      key: "city",
    },
    {
      title: "State",
      key: "states",
    },
    {
      title: "Zip Code",
      key: "zipcode",
    },
  ];
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Table columns={columnTitles} data={employeesArray} />
      <p onClick={home} className="a">
        Home
      </p>
    </div>
  );
}
