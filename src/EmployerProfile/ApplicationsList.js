import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import ApplicationDetails from "./ApplicantsDetails";
import axios from "axios";
import apiUrl from "../config";
import "./Style/ApplicationList.css";

// We are taking this "model" in order to display the list of people that applied to a certain job
export default function ApplicationsList({ jobtitle, employmenttype, jobref }) {
  const [show, setShow] = useState(false);
  const [applicants, setApplicants] = useState();
  const [applicantsNumber, setApplicantsNumber] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch all people that applied for the job clicked
  useEffect(() => {
    async function lazyLoad() {
      const id = jobref;
      axios.get(`${apiUrl}employer/applications/${id}`).then((res) => {
        setApplicants(res.data);
        setApplicantsNumber(res.data.length);
      });
    }
    lazyLoad();
  }, [jobref]);

  return (
    <div>
      <a
        href="#"
        className="btn btn-primary list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        onClick={handleShow}
      >
        <span>{jobtitle} </span>
        <span>{employmenttype}</span>
        <span>{jobref} </span>
        <span className="badge badge-primary badge-pill">
          {applicantsNumber}
        </span>
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Applicants for {jobtitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="boxApplications" className="list-group">
            {applicants
              ? applicants.map((element, index) => (
                  <li className="applications list-group-item" key={index}>
                    <h4>
                      {element.lastname} {element.firstname}
                    </h4>
                    {/* Passing props manually as each button will open a modal with the data of the candidate */}
                    <ApplicationDetails
                      userid={element.userid}
                      firstname={element.firstname}
                      lastname={element.lastname}
                      middlename={element.middlename}
                      mobile={element.mobile}
                      zip={element.zip}
                      resume={element.resume}
                      jobref={element.jobref}
                      email={element.email}
                      country={element.country}
                      coverletter={element.coverletter}
                    />
                  </li>
                ))
              : null}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Window
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
