import React from "react";
import "./table.css";

export default function Table({ columns, data }) {
  // map columns and for each title
  const titles = columns.map((columnItem) => {
    //loop over data array
    const rows = data.map((dataItem) => {
      //loop over each object in array
      const rowItem = dataItem.map((item) => {
        //check if data key matches title key and display data under appropriate title
        if (item.key === columnItem.key) {
          return (
            <div className="row-item" key={columnItem.key}>
              <p>{item.title}</p>
            </div>
          );
        }
      });
      return rowItem;
    });
    return (
      <div className="column" key={columnItem.key}>
        <h3 className="column-title">{columnItem.title}</h3>
        {rows}
      </div>
    );
  });
  return <div className="table-container">{titles}</div>;
}
