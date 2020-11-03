import React, { useState } from "react";
import axios from "axios";
import apiUrl from "../config";
import { Button, Modal } from "react-bootstrap";

export default function ApplicantsDetails(props) {
  const [applicantDetails] = useState(props);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [resume, setResume] = useState(applicantDetails.resume);

  const download = (id, jobref) => {
    axios
      .get(`${apiUrl}employer/applications/${id}/${jobref}/resume`)
      .then((res) => {
        const url = res.config.url;
        window.open(url);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <a href="#" className="text-success" onClick={handleShow}>
        Open Application
      </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          {applicantDetails ? (
            <>
              <div className="container">
                <div>
                  {/* <h2>{applicantDetails.firstname}</h2> */}
                  <h2>{applicantDetails.firstname}</h2>
                </div>
                <div>
                  <h2>{applicantDetails.lastname}</h2>
                </div>
                {applicantDetails && applicantDetails.middlename ? (
                  <div>
                    <h2>{applicantDetails.middlename}</h2>
                  </div>
                ) : null}
                <div>
                  <h4>{applicantDetails.email}</h4>
                </div>
                <div>
                  <h4>{applicantDetails.mobile}</h4>
                </div>
                <div>
                  <h4>{applicantDetails.zip}</h4>
                </div>
                <div>
                  <h4>{applicantDetails.city}</h4>
                </div>
                <div>
                  <h4>{applicantDetails.country}</h4>
                </div>
              </div>
            </>
          ) : null}
          <button
            onClick={() =>
              download(applicantDetails.userid, applicantDetails.jobref)
            }
          >
            download
          </button>
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
