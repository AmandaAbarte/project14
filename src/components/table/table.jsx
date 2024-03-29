import React, { useEffect, useState } from "react";
import "./table.css";

/**
 * Displays table of employees
 * @param {array} columns array of objects containing column titles and corresponding keys
 * @param {array} data array of objects containing data and corresponding keys
 * @returns {jsxElement} Table of employees registered
 */

export default function Table({ columns, data }) {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState(data);
  //define the order of data keys based on column title order
  let sortOrder = [];
  columns.map((column) => {
    sortOrder.push(column.key);
  });

  //loop over data and reorganise based on sortOrder, comparing the value of item.key
  filterData.map((item) => {
    const itemPositions = {};
    for (const [index, key] of sortOrder.entries()) {
      itemPositions[key] = index;
    }
    item.sort((a, b) => itemPositions[a.key] - itemPositions[b.key]);
  });

  //loop over column array and return div of column titles
  const titles = columns.map((columnItem) => {
    return (
      <div className="column" key={columnItem.key}>
        <h3 className="column-title">{columnItem.title}</h3>
      </div>
    );
  });

  //loop over data and return table rows
  let keyid = 0;
  const rows = filterData.map((dataItem) => {
    keyid++;
    const rowItems = dataItem.map((item) => {
      return (
        <div className="column" key={item.title}>
          <p>{item.title}</p>
        </div>
      );
    });
    return (
      <div className="row" key={dataItem[0].title + keyid}>
        {rowItems}
      </div>
    );
  });

  //on change of search state, loop over data
  useEffect(() => {
    let newdata = [];
    data.map((item) => {
      //if search matches any data, push data item to newdata
      const test = item.map((subitem) => {
        let lowercaseSubItem = subitem.title.toLowerCase();
        return lowercaseSubItem.includes(search.toLowerCase());
      });
      if (test.includes(true)) {
        newdata.push(item);
      }
    });
    //set filteredData state with new filtred value
    setFilterData(newdata);
  }, [search]);

  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        name="search"
        type="text"
        onInput={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="table-container">
        <div className="table-header">{titles}</div>
        {rows}
      </div>
    </>
  );
}
