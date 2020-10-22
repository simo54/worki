import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Autocomplete() {
  const Auto = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    // Fetching data from endpoint (jobtitles)
    useEffect(() => {
      const titles = [];
      new Array(5).fill().map((v, i) =>
        axios(`/jobs/${i + 1}`).then((res) => {
          if (res.data.jobtitle !== undefined) {
            titles.push({ jobtitle: res.data.jobtitle });
          }
        })
      );
      setOptions(titles);
    }, []);

    useEffect(() => {
      window.addEventListener("mousedown", handleClickOutside);
      return () => {
        window.removeEventListener("mousedown", handleClickOutside);
      };
    });

    const handleClickOutside = (event) => {
      const { current: wrap } = wrapperRef;
      if (wrap && !wrap.contains(event.target)) {
        setDisplay(false);
      }
    };

    const updateJobList = (title) => {
      setSearch(title);
      setDisplay(false);
    };

    return (
      <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <input
          id="auto"
          onClick={() => setDisplay(!display)}
          placeholder="Type to search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {display && (
          <div className="autoContainer">
            {options
              .filter(
                ({ jobtitle }) => jobtitle.indexOf(search.toLowerCase()) > -1
              )
              .map((value, i) => {
                return (
                  <div
                    onClick={() => updateJobList(value.jobtitle)}
                    className="option"
                    key={i}
                    tabIndex="0"
                  >
                    <span>{value.jobtitle}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="App">
        <h1>Custom AutoComplete React</h1>
        <div className="logo"></div>
        <div className="auto-container">
          <Auto />
        </div>
      </div>
    </div>
  );
}
