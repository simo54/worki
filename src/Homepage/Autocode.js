import React, { useEffect, useState, useRef } from "react";
import "./Style/Autocomplete.css";

export default function AutoComplete({ value, onChange, dataSource }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const rootEl = useRef(null);

  const KEY_CODE = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
  };

  useEffect(() => {
    const onClick = (event) => {
      if (rootEl.current && !rootEl.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  });

  const candidates = dataSource.filter((item) => item.includes(value));

  return (
    <div
      className="auto-complete"
      ref={rootEl}
      onKeyDown={(event) => {
        switch (event) {
          case KEY_CODE.UP:
            if (!dropdownOpen) {
              setDropdownOpen(true);
              return;
            }
            if (!candidates.length) {
              setActiveItem(null);
              return;
            }
            if (!activeItem) {
              setActiveItem({
                value: candidates[0],
                idx: 0,
              });
              return;
            }
            if (activeItem.idx > 0) {
              setActiveItem({
                value: candidates[activeItem.idx - 1],
                idx: activeItem.idx - 1,
              });

              return;
            }
            break;
          case KEY_CODE.DOWN:
            if (!dropdownOpen) {
              setDropdownOpen(true);
              return;
            }
            if (!candidates.length) {
              setActiveItem(null);
              return;
            }
            if (!activeItem) {
              setActiveItem({
                value: candidates[0],
                idx: 0,
              });
              return;
            }
            if (activeItem.idx < candidates.length - 1) {
              setActiveItem({
                value: candidates[activeItem.idx + 1],
                idx: activeItem.idx + 1,
              });
              return;
            }
            break;
          case KEY_CODE.ENTER:
            if (dropdownOpen && activeItem) {
              onChange(activeItem.value);
              setDropdownOpen(false);
              setActiveItem(null);
              return;
            }
            break;
          default:
            console.log("nothing to see here");
        }
      }}
    >
      <div id="inputContainer">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Try to search Baker..."
            id={dropdownOpen ? "searchBarAutocomplete" : "searchBar"}
            value={value}
            onFocus={() => setDropdownOpen(true)}
            onChange={(event) => {
              onChange(event.target.value);
              setDropdownOpen(true);
              setActiveItem(null);
            }}
          />
          <span className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id={dropdownOpen ? "searchButtonAutocomplete" : "searchButton"}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      {dropdownOpen && candidates.length > 0 && (
        <div className="dropdown">
          {candidates.map((item, idx) => (
            <div
              className={
                activeItem && activeItem.value === item ? "item active" : "item"
              }
              onMouseEnter={() => setActiveItem({ value: item, idx })}
              onClick={() => {
                onChange(item);
                setDropdownOpen(false);
                setActiveItem(null);
              }}
            >
              <div
                className="container list-group text-left pr-0"
                id="dropdownlist"
              >
                <a
                  href="#"
                  className="list-group-item list-group-item-action  pt-4 pb-4"
                >
                  {item}
                </a>
              </div>
              {/* <h1>{item}</h1> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
