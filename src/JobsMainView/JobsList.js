import React, { useState, useEffect } from "react";
import Map from "../LeafletMap/Map";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style/JobList.css";

export default function JobsList() {
  const [jobsList, setJobList] = useState([]);
  const [jobDetails, setJobDetails] = useState();

  // Fetching the data from api
  useEffect(() => {
    axios.get("/jobs").then((results) => {
      const jobs = results.data;
      setJobList(jobs);
    });
  }, []);

  const clickViewJob = (e) => {
    setJobDetails(e);
  };

  return (
    <div className="container-fluid">
      <Map />
      <div className="container-fluid mt-3">
        <div className="row">
          <div id="jobListCol" className="col-4">
            {jobsList && jobsList.length
              ? jobsList.map((element, index) => (
                  <div className="card mb-2" key={index}>
                    <div className="row no-gutters">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{element.jobtitle}</h5>
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
                            data-id={element.id}
                            onClick={(e) => {
                              clickViewJob(
                                [
                                  element.id,
                                  element.jobtitle,
                                  element.employmenttype,
                                  element.introduction,
                                  element.role,
                                  element.requirements,
                                  element.address,
                                  element.zip,
                                  element.city,
                                  element.country,
                                  element.contactdetails,
                                ],
                                e
                              );
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
          <div id="jobselectedCol" className="col-6 m-0">
            {jobDetails && jobDetails.length ? (
              <div className="card" fixed="top">
                <div id="bigCard" className="card-body">
                  <div className="row no-gutters">
                    <div className="col">
                      <h5 className="card-title">{jobDetails[1]}</h5>
                      <p className="card-text">{jobDetails[2]}</p>
                      <p>{jobDetails[3]}</p>
                      <hr />
                      <p>{jobDetails[4]}</p>
                      <p>{jobDetails[5]}</p>
                      <hr />
                      <p>{jobDetails[6]}</p>
                      <p>{jobDetails[7]}</p>
                      <p>{jobDetails[8]}</p>
                      <p>{jobDetails[9]}</p>
                      <hr />
                      <p>{jobDetails[10]}</p>
                      <p>{jobDetails[11]}</p>
                      <Link to="/">
                        <Button>Apply</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
