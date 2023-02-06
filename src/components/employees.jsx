import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Employees() {
  const data = useSelector((state) => state.data);

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
      <a href="/">Home</a>
    </div>
  );
}
