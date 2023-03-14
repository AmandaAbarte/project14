import React, { useState } from "react";
import { updateDropdown } from "../context/dropdownSlice.slice";
import { useDispatch} from "react-redux";

export default function Dropdown(props) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const list = props.list.map((item) => {
    return (
      <li
        key={item}
        onClick={() => {
          setInputValue(item);
          props.handler;
          setIsVisible(!isVisible);
          dispatch(updateDropdown({ key: [props.id], value: item }));
        }}
      >
        {item}
      </li>
    );
  });

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
      <span
        className="cust-input-value"
        name={props.name}
        id={props.id}
        value={inputValue}
        onClick={ToggleDropdown}
      >
        {inputValue}
      </span>
      <ul className="cust-dropdown-list" style={styles.list}>
        {list}
      </ul>
    </div>
  );
}
