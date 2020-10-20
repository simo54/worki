import React, { useState, useEffect } from "react";
// import JobDetails from "./DetailedJob";
import Apply from "../JobApplication/JobApplication";
import Map from "../LeafletMap/Map";
import axios from "axios";
import "./Style/JobList.css";

export default function JobsList() {
  const [clickAndView, setClickAndView] = useState();
  const [jobslist, setJoblist] = useState([]);

  // Fetching the data from api
  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((results) => {
      const jobs = results.data;
      setJoblist(jobs);
    });
  }, []);

  const clickViewJob = (e) => {
    e.preventDefault();
    setClickAndView(e.target.value);
  };

  return (
    <div className="container-fluid">
      <Map />
      <div className="container-fluid mt-3">
        <div className="row">
          <div id="jobListCol" className="col-4">
            {jobslist && jobslist.length
              ? jobslist.map((element, index) => (
                  <div className="card mb-2" key={index}>
                    <div className="row no-gutters">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{element.jobtitle}</h5>
                          <p className="card-text">{element.id}</p>
                          <p className="card-text">{element.role}</p>
                          <p className="card-text">{element.country}</p>
                          <p className="card-text">{element.city}</p>
                          <p className="card-text">{element.zip}</p>
                          <p className="card-text">
                            <small className="text-muted">
                              Published on {element.datejobpost}
                            </small>
                          </p>
                          <button
                            className="btn btn-primary"
                            value={element.id}
                            onClick={(e) => {
                              clickViewJob(e, "value");
                            }}
                          >
                            View Details and Apply
                          </button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img src="..." className="card-img" alt="something" />
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div id="jobselectedCol" className="col-6">
            {jobslist && jobslist.length
              ? jobslist.map((element, index) => (
                  // Hiding all jobs, if clicked on the same id, g

                  <div className="card" key={index}>
                    <div className="row no-gutters">
                      <div className="col">
                        <h5 className="card-title">{element.jobtitle}</h5>
                        <p className="card-text">{element.id}</p>
                        <p>{element.employmenttype}</p>
                        <p>{element.introduction}</p>
                        <p>{element.role}</p>
                        <p>{element.requirements}</p>
                        <p>{element.address}</p>
                        <p>{element.zip}</p>
                        <p>{element.city}</p>
                        <p>{element.country}</p>
                        <p>{element.contactdetails}</p>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
