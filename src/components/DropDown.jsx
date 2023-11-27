import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "../styles/DropDown.css";

const DropDown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [selection, setSelection] = useState("Select Community");
  const [arrowDropdown, setArrowDropdown] = useState([
    "Data Analysis",
    "Web Development",
    "Product Design",
  ]);

  return (
    <div
      onClick={() => {
        setToggleDropdown(!toggleDropdown);
      }}
      
    >
      <div className="dropdown-cover d-flex border border-dark rounded w-100  p-2">
        <div className="d-flex gap-5 mx-1  position-relative align-items-center ">
            <div>
            <p  className="rounded fs-6 mb-0 selection-p">{selection}</p>
            </div>
          

          <RiArrowDownSLine
            style={{
              transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s ease-in-out",
              cursor: "pointer",
            }}
            className="arrow-down position-absolute"
          />
        </div>
      </div>
      <div className="position-relative options-list ">
        {toggleDropdown && (
          <ul className="dropdown-options py-3 px-0 rounded-2 top-100 border position-absolute w-100 ">
            {arrowDropdown.map((options) => {
              return (
                <li
                  key={options}
                  onClick={() => {
                    setSelection(
                      options === "Select Community"
                        ? "Select Community"
                        : options
                    );
                    setToggleDropdown(false);
                  }}
                  className="ps-2 py-1 dropdown-list"
                >
                  {options}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
