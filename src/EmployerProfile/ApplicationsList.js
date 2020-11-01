import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./Style/ApplicationList.css";

// We are taking this "model" in order to display the list of people that applied to a certain job
export default function ApplicationsList({ jobtitle, employmenttype, jobref }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setProfile] = useState();
  const [applicantsNumber, setApplicantsNumber] = useState(5);
  console.log("applicationlistjobref " + jobref);
  console.log(profile);

  // Fetch all people that applied for the job clicked
  useEffect(() => {
    const id = jobref;
    axios
      .get(`http://localhost:5000/employer/applications/${id}`)
      .then((res) => setProfile(res.data));
  }, []);

  return (
    <div>
      <a
        href="#"
        className="btn btn-primary list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        onClick={handleShow}
      >
        <span>{jobtitle} </span>
        <span>{employmenttype} </span>
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Applicants for {jobtitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="boxApplications" class="list-group">
            {profile
              ? profile.map((element, index) => (
                  <li className="applications list-group-item" key={index}>
                    {element.lastname}
                  </li>
                ))
              : null}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
