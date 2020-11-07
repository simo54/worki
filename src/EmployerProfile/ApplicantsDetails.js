// Inside this component you can find the application details of the application list. The employer can access this component by pressing "Open Application" from the ApplicationsList
import React, { useState } from "react";
import axios from "axios";
import apiUrl from "../config";
import { Button, Modal } from "react-bootstrap";

export default function ApplicantsDetails(props) {
  const [applicantDetails] = useState(props);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // The following fetch the resume associated to user that applied for a particular job, once fetched we will get the url link so the employer can have the pdf in a new page
  const download = (id, jobref) => {
    axios
      .get(`${apiUrl}employer/applications/${id}/${jobref}/resume`)
      .then((res) => {
        const url = res.config.url;
        window.open(url); // Open a new window
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <a href="#" className="text-success" onClick={handleShow}>
        Open Application
      </a>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Body>
          {applicantDetails ? (
            <>
              <div className="container">
                <small>
                  Applied for <strong>{applicantDetails.jobref}</strong>
                </small>
                <ul id="boxApplications" className="list-group">
                  <li className="applications list-group-item p-2">
                    <h6>First Name:</h6>
                    <h3>{applicantDetails.firstname}</h3>
                  </li>
                  <li className="applications list-group-item p-2">
                    <h6>Last Name:</h6>
                    <h3>{applicantDetails.lastname}</h3>
                  </li>
                  {applicantDetails && applicantDetails.middlename ? (
                    <li className="applications list-group-item p-2">
                      <h6>Middle Name:</h6>
                      <h3>{applicantDetails.middlename}</h3>
                    </li>
                  ) : null}
                  <li className="applications list-group-item p-2">
                    <h6>Email:</h6>
                    <h3>{applicantDetails.email}</h3>
                  </li>
                  <li className="applications list-group-item p-2">
                    <h6>Mobile:</h6>
                    <h3>{applicantDetails.mobile}</h3>
                  </li>
                  <li className="applications list-group-item p-2">
                    <h6>Zip:</h6>
                    <h3>{applicantDetails.zip}</h3>
                  </li>
                  {applicantDetails.city ? (
                    <li className="applications list-group-item p-2">
                      <h6>City:</h6>
                      <h3>{applicantDetails.city}</h3>
                    </li>
                  ) : null}
                  <li className="applications list-group-item p-2">
                    <h6>Country:</h6>
                    <h3>{applicantDetails.country}</h3>
                  </li>
                  <li className="applications list-group-item p-2">
                    <h6>CoverLetter:</h6>
                    <p>{applicantDetails.coverletter}</p>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
          <div className="text-center mt-2">
            <Button
              className="btn-success"
              onClick={() =>
                download(applicantDetails.userid, applicantDetails.jobref)
              }
            >
              Download CV
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Window
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
