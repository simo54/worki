import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import apiUrl from "../config";
import "./Style/Application.css";

// export default function MyVerticallyCenteredModal(props) {
export default function MyVerticallyCenteredModal(props) {
  const [userid] = useState(props.data);
  const [jobref] = useState(props.jobref);
  const [infoFromProfile, setInfoFromProfile] = useState({});

  useEffect(() => {
    const id = userid;
    axios.get(`${apiUrl}user/${id}`).then((results) => {
      const info = results.data;
      setInfoFromProfile(info);
    });
  }, []);

  const application = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}user/newjobapplication`, {
      // infoFromProfile.firstname,
      //       profile.lastname,
      //       profile.middlename,
      //       profile.email,
      //       profile.mobile,
      //       profile.city,
      //       profile.zip,
      //       profile.country,
      //       profile.coverletter,
      //       profile.resume,
      //       userid,
      //       jobref,
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
        <h4>Application</h4>
        <form className="form-group">
          <div className="mt-4">
            <label className="mandatory">First Name</label>
            <input
              required
              type="text"
              className={
                infoFromProfile && infoFromProfile.firstname
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              placeholder="Insert here your Firstname"
              value={infoFromProfile.firstname}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Last Name</label>
            <input
              required
              type="text"
              className={
                infoFromProfile && infoFromProfile.lastname
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              placeholder="Your Last Name..."
              value={infoFromProfile.lastname}
            />
          </div>
          {/* Hide middlename section if user has no middlename */}
          {infoFromProfile && infoFromProfile.middlename ? (
            <div className="mt-4">
              <label className="mandatory">Middle Name</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Your Middle Name..."
                value={infoFromProfile.middlename}
              />
            </div>
          ) : null}
          <div className="mt-4">
            <label className="mandatory">Email</label>
            <input
              required
              type="text"
              className={
                infoFromProfile && infoFromProfile.email
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              placeholder="Insert your email"
              value={infoFromProfile.email}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Mobile</label>
            <input
              required
              type="text"
              className={
                infoFromProfile && infoFromProfile.mobile
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              placeholder="Insert your mobile phone"
              value={infoFromProfile.mobile}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">City</label>
            <input
              required
              type="text"
              className={
                infoFromProfile && infoFromProfile.city
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              placeholder="Insert your current city"
              value={infoFromProfile.city}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Zip</label>
            <input
              required
              type="text"
              className={
                infoFromProfile && infoFromProfile.zip
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              placeholder="Insert the Zip code"
              value={infoFromProfile.zip}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Country</label>
            <input
              required
              type="text"
              className={
                infoFromProfile.country
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              placeholder=""
              value={infoFromProfile.country}
            />
          </div>
          <div className="mt-4">
            <label className="mandatory">Cover Letter</label>
            <textarea
              required
              className="form-control"
              rows="3"
              placeholder=""
            />
          </div>
          <div className="mt-4">
            <div class="form-group">
              <label className="mandatory">Resume</label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                value={infoFromProfile.resume}
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
