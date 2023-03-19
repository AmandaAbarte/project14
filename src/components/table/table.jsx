import React, { useEffect, useState } from "react";
import "./table.css";

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
  const rows = filterData.map((dataItem) => {
    const rowItems = dataItem.map((item) => {
      return (
        <div className="column" key={item.title}>
          <p>{item.title}</p>
        </div>
      );
    });
    return (
      <div className="row" key={dataItem[0].title}>
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
      <input
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
