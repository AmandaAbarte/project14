import React, { useEffect, useState } from "react";
import "./table.css";

export default function Table({ columns, data }) {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState(data);

  // map columns and for each title
  const titles = columns.map((columnItem) => {
    //loop over data array
    const rows = filterData.map((dataItem) => {
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
      <div key={columnItem.key}>
        <div className="column">
          <h3 className="column-title">{columnItem.title}</h3>
        </div>
        {rows}
      </div>
    );
  });

  useEffect(() => {
    let newdata = [];
    data.map((item) => {
      const test = item.map((subitem) => {
        let lowercaseSubItem = subitem.title.toLowerCase();
        return lowercaseSubItem.includes(search.toLowerCase());
      });
      if (test.includes(true)) {
        newdata.push(item);
      }
    });
    setFilterData(newdata);
  }, [search]);

  return (
    <>
      <input
        type="text"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="table-container">
        <div className="table-header">{titles}</div>
        {/* {rows} */}
      </div>
    </>
  );
}
