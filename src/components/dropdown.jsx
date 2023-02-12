import React, { useState } from "react";

export default function Dropdown(props) {
  const list = props.list.map((item) => {
    return <li key={item}>{item}</li>;
  });
  const [isVisible, setIsVisible] = useState(false);
  const styles = {
    list: {
      display: isVisible ? "flex" : "none",
    },
  };
  function ToggleDropdown() {
    setIsVisible(!isVisible);
  }
  return (
    <div className="cust-dropdown-div">
      <span className="cust-input-value" onClick={ToggleDropdown}>
        Choose Option..
      </span>
      <ul className="cust-dropdown-list" style={styles.list}>
        {list}
      </ul>
    </div>
  );
}
