import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import apiUrl from "../config";
import "./Style/Application.css";

export default function MyVerticallyCenteredModal(props) {
  const [userid] = useState(props.data);
  const [jobref] = useState(props.jobref);
  const [infoFromProfile, setInfoFromProfile] = useState({});
  const [coverLetter, setCoverLetter] = useState();

  useEffect(() => {
    const id = userid;
    axios.get(`${apiUrl}user/${id}`).then((results) => {
      const info = results.data;
      setInfoFromProfile(info);
    });
  }, [userid]);

  const application = (e) => {
    e.preventDefault();
    const profile = infoFromProfile;
    const firstname = profile.firstname;
    const lastname = profile.lastname;
    const middlename = profile.middlename;
    const email = profile.email;
    const mobile = profile.mobile;
    const city = profile.city;
    const zip = profile.zip;
    const country = profile.country;
    const coverletter = coverLetter;
    const resume = profile.resume;
    axios.post(`${apiUrl}user/newjobapplication`, {
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
      jobref,
    });
    alert(
      "✨🎊🎉 WHOOP WHOOP Thanks for applying! ✨🎊🎉\nYou can close this windows and continue to browse our page! "
    );
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
          <form className="form-row">
            <div className="col-md-4 mt-4">
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
            <div className="col-md-4 mt-4">
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
            {infoFromProfile.middlename ? (
              <div className="col-md-4 mt-4">
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
          </form>
          {/* Hide middlename section if user has no middlename */}

          <form className="form-row">
            <div className="col-md-4 mt-4">
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
            <div className="col-md-8 mt-4">
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
          </form>
          <form className="form-row">
            <div className="col-md-4 mt-4">
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
            <div className="col-md-4 mt-4">
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
            <div className="col-md-4 mt-4">
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
          </form>
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
            <div className="form-group">
              <label className="mandatory">Resume</label>
              <input
                className="form-control-file"
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
