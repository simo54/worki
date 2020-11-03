import React, { useState, useEffect } from "react";
import Map from "../LeafletMap/Map";
import axios from "axios";
import AutoSuggest from "./Autocode";
import { Button } from "react-bootstrap";
import Application from "./Application";
import apiUrl from "../config";
import "./Style/JobList.css";

export default function JobsList({ dataId }) {
  const [value, setValue] = useState("");
  const [jobsList, setJobList] = useState([]);
  const [jobDetails, setJobDetails] = useState();
  const [modalShow, setModalShow] = useState(false);

  // Fetching the data from api
  useEffect(() => {
    axios.get(`${apiUrl}jobs`).then((results) => {
      const jobs = results.data;
      setJobList(jobs);
    });
  }, []);

  const clickViewJob = (e) => {
    setJobDetails(e);
  };

  function search() {
    // let i, txtValue, items;
    // let input = document.getElementById("inputSearch");
    // let filter = input.value.toUpperCase();
    // let div = document.getElementsByClassName("cardToSearch");
    // let h5 = document.getElementsByTagName("h5");
    // // Loop through all list items
    // for (i = 0; i < berries.length; i++) {
    //   items = h5[i]; // Take as reference the h5 of each card
    //   txtValue = items.textContent || items.innerText; // Will take reference the input from the Input Onkeyup
    //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //     div[i].style.display = ""; // Show matches
    //   } else {
    //     div[i].style.display = "none"; // Hide no-matches
    //   }
    // }
  }

  return (
    <div className="container">
      <div className="container d-flex">
        {/* <AutoSuggest
          value={value}
          onChange={(value) => setValue(value)}
          dataSource={["beijing", "xian", "nanjing", "shanghai", "shenzhen"]}
        /> */}
      </div>
      <div className="container d-flex justify-content-center mt-4">
        {/* <div className="container p-0">
          <div className="container-fluid p-0" id="collapse">
            <Map />
          </div>
        </div> */}
        <input
          type="text"
          onKeyUp={search}
          placeholder="Search here..."
          className="form-control w-25"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          id="inputSearch"
        />
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            {jobsList && jobsList.length
              ? jobsList.map((element, index) => (
                  <div className="card mb-2" key={index}>
                    <div className="">
                      <div className="">
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
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div id="jobselectedCol" className="col-8">
            {jobDetails && jobDetails.length ? (
              <div className="card" fixed="top">
                <div id="bigCard" className="card-body">
                  <div className="row">
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
