import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./Style/Application.css";

export default function MyVerticallyCenteredModal(props) {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [middlename, setMiddlename] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [coverletter, setCoverLetter] = useState();
  const [resume, setResume] = useState();

  const application = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/user/newjobapplication", {
      firstname,
      lastname,
      middlename,
      email,
      mobile,
      city,
      zip,
      country,
      coverletter,
      resume,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Body>
        <h4>Centered Modal</h4>
        <form className="form-group">
          <div className="mt-4">
            <label className="mandatory">First Name</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Last Name</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Middle Name</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setMiddlename(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Email</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Mobile</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">City</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Zip</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Country</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder=""
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Cover Letter</label>
            <textarea
              required
              className="form-control"
              rows="3"
              placeholder=""
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <div class="form-group">
              <label className="mandatory">Resume</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                onChange={(e) => setResume(e.target.value)}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close Application</Button>
        <Button
          onClick={(e) => {
            props.onHide();
            application(e);
          }}
        >
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
