import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MaterialReactTable from "material-react-table";

export default function Employees() {
  //handle navigation for "home button"
  let navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  //get employee data from store
  const data = useSelector((state) => state.employee.employees);

  const columns = useMemo(
    () => [
      {
        header: "First Name",
        accessorKey: "firstname",
      },
      {
        header: "Last Name",
        accessorKey: "lastname",
      },
      {
        header: "Start Date",
        accessorKey: "startdate",
      },
      {
        header: "Department",
        accessorKey: "department",
      },
      {
        header: "Date of Birth",
        accessorKey: "dateofbirth",
      },
      {
        header: "Street",
        accessorKey: "street",
      },
      {
        header: "City",
        accessorKey: "city",
      },
      {
        header: "State",
        accessorKey: "states",
      },
      {
        header: "Zip Code",
        accessorKey: "zipcode",
      },
    ],
    []
  );
  const list =
    data !== null &&
    data.map((item) => {
      return (
        <div key={item.lastname} className="employee-container">
          <div className="employee-item">{item.firstname}</div>
          <div className="employee-item">{item.lastname}</div>
          <div className="employee-item">{item.dateofbirth}</div>
          <div className="employee-item">{item.startdate}</div>
          <div className="employee-item">{item.street}</div>
          <div className="employee-item">{item.city}</div>
          <div className="employee-item">{item.state}</div>
          <div className="employee-item">{item.zipcode}</div>
          <div className="employee-item">{item.department}</div>
        </div>
      );
    });

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
      />
      <p onClick={home} className="a">
        Home
      </p>
    </div>
  );
}
