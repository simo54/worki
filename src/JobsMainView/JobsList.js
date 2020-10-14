import React, { useState } from "react";
// import JobDetails from "./DetailedJob";
import Apply from "../JobApplication/JobApplication";
import Map from "../LeafletMap/Map";
import "./Style/JobList.css";

export default function JobsList() {
  const [clickAndView, setClickAndView] = useState(false);

  const clickViewJob = () => {
    setClickAndView(!clickAndView);
  };

  return (
    <div className="container-fluid">
      <Map />
      <div className="container-fluid">
        <div className="row">
          <div id="jobListCol" className="col-4">
            <div>
              Job number 1<button onClick={clickViewJob}>click here</button>
            </div>
          </div>
          <div id="jobselectedCol" className="col-6">
            {clickAndView ? <h1>Here I am</h1> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
