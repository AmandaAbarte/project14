import React, { useState } from "react";
import { updateDropdown } from "../../context/dropdownSlice.slice";
import { useDispatch } from "react-redux";
import arrow from "../../arrowdown.svg";

export default function Dropdown({ list, id, name }) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  //generate dropdown list from data
  const listElement = list.map((item) => {
    return (
      <li
        key={item}
        // onclick display chosen option, change visibility and update state
        onClick={() => {
          setInputValue(item);
          setIsVisible(!isVisible);
          dispatch(updateDropdown({ key: [id], value: item }));
        }}
      >
        {item}
      </li>
    );
  });

  //change visibility of dropdown and rotation of arrow on click
  const styles = {
    list: {
      display: isVisible ? "flex" : "none",
    },
    img: {
      transform: isVisible ? "rotate(180deg)" : "rotate(0deg)",
    },
  };
  function ToggleDropdown() {
    setIsVisible(!isVisible);
  }
  return (
    <div className="cust-dropdown-div">
      <span
        className="cust-input-value"
        name={name}
        id={id}
        value={inputValue}
        onClick={ToggleDropdown}
      >
        {inputValue}
        <img src={arrow} alt="" className="arrow" style={styles.img} />
      </span>
      <ul className="cust-dropdown-list" style={styles.list}>
        {listElement}
      </ul>
    </div>
  );
}
