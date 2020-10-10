import React from "react";
import "./Style/JobList.css";

export default function JobsList() {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center"></div>
      <div className="row text-center">
        <div id="jobListCol" className="col">
          One of two columns
        </div>
        <div id="jobselectedCol" className="col">
          One of two columns
        </div>
      </div>
    </div>
  );
}
