import React, { useState } from "react";
import JobDetails from "./DetailedJob";
import Map from "../LeafletMap/Map";
import "./Style/JobList.css";

export default function JobsList() {
  const [clickAndView, setClickAndView] = useState(false);

  const clickViewJob = () => {
    setClickAndView(!clickAndView);
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <Map />
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <div id="jobListCol" className="col">
            <div className="container">
              Job number 1<button onClick={clickViewJob}>click here</button>
            </div>
          </div>
          <div id="jobselectedCol" className="col">
            {clickAndView ? <h1>Here I am</h1> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
