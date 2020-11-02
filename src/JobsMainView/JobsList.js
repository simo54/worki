import React, { useState, useEffect } from "react";
import Map from "../LeafletMap/Map";
import axios from "axios";
import { Button } from "react-bootstrap";
import Application from "./Application";
import Autocomplete from "./Autocode";
import "./Style/JobList.css";

export default function JobsList({ dataId }) {
  const [jobsList, setJobList] = useState([]);
  const [jobDetails, setJobDetails] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [titles, setOptions] = useState(null);

  // Fetching the data from api
  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((results) => {
      const jobs = results.data;
      const titles = jobs.map((array) => array.jobtitle); // Fetching data from endpoint, map them and get jobtitles, this was taken from homepage and originally this was displayed in an input tag at the homepage
      setOptions(titles); //Setting array of jobtitles
      setJobList(jobs);
    });
  }, []);

  const clickViewJob = (e) => {
    setJobDetails(e);
  };

  return (
    <div className="container-fluid">
      <div>
        {/* <AutoSearch dataSource={jobsList} /> */}
        <Autocomplete suggestions={titles} />
      </div>
      <div className="container-fluid text-center p-0">
        <div className="container p-0">
          <div className="container-fluid p-0" id="collapse">
            <Map />
          </div>
        </div>
      </div>

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
                              Published on{" "}
                              <strong>{element.datejobpost}</strong>
                            </small>
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              Job ID: <strong>{element.jobref}</strong>
                            </small>
                          </p>
                          <button
                            className="btn btn-primary"
                            data-id={element.id}
                            jobreference={element.jobref}
                            onClick={(e) => {
                              clickViewJob([
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
                                element.jobref,
                              ]);
                            }}
                          >
                            View Details and Apply
                          </button>
                        </div>
                      </div>
                      {/* <div className="col-md-4">
                        <div id="containerLogo" className="align-middle">
                          <img
                            // src="./logo2.jpg"
                            href="https://logos-download.com/26555-eos-2-logo-download.html"
                            alt="something"
                            // width="10"
                            // height="200"
                          />
                        </div>
                      </div> */}
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
                      <p>Job Reference: {jobDetails[11]}</p>
                      <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                        on
                      >
                        Apply!
                      </Button>

                      <Application
                        data={dataId}
                        jobref={jobDetails[11]}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
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
