import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const data = useSelector((state) => state.employee.employees);
  const home = () => {
    navigate("/");
  };
  const list =
    data !== null &&
    data.map((item) => {
      return <p key={item.firstname}>{item.firstname}</p>;
    });

  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      {list}
      <p onClick={home}>Home</p>
    </div>
  );
}
