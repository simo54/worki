import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import "./Style/Application.css";

// export default function MyVerticallyCenteredModal(props) {
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
  const [userid] = useState(props.data);
  const [jobref] = useState(props.jobref);
  const [infoFromProfile, setInfoFromProfile] = useState();

  useEffect(() => {
    const id = userid;
    axios.get(`http://localhost:5000/user/${id}`).then((results) => {
      const info = results.data;
      setInfoFromProfile(info);
    });
  }, []);

  const application = (e) => {
    console.log(
      firstname,
      infoFromProfile.lastname,
      middlename,
      email,
      mobile,
      city,
      zip,
      country,
      coverletter,
      resume,
      userid,
      jobref
    );
    // axios.post("http://localhost:5000/user/newjobapplication", {
    //   firstname,
    //   lastname,
    //   middlename,
    //   email,
    //   mobile,
    //   city,
    //   zip,
    //   country,
    //   coverletter,
    //   resume,
    //   userid,
    //   jobref,
    // });
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
        {infoFromProfile ? (
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
                onSubmit={(e) => setFirstName(e.target.value)}
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
                value={infoFromProfile ? infoFromProfile.lastname : null}
                onChange={(e) => setLastName(e.target.value)}
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
                  value={infoFromProfile ? infoFromProfile.middlename : null}
                  onChange={(e) => setMiddlename(e.target.value)}
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
                value={infoFromProfile ? infoFromProfile.email : null}
                onChange={(e) => setEmail(e.target.value)}
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
                value={infoFromProfile ? infoFromProfile.mobile : null}
                onChange={(e) => setMobile(e.target.value)}
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
                value={infoFromProfile ? infoFromProfile.city : null}
                onChange={(e) => setCity(e.target.value)}
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
                value={infoFromProfile ? infoFromProfile.zip : null}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="mandatory">Country</label>
              <input
                required
                type="text"
                className={
                  infoFromProfile && infoFromProfile.country
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder=""
                value={infoFromProfile ? infoFromProfile.country : null}
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
                value=""
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
                  value={infoFromProfile ? infoFromProfile.resume : null}
                  onChange={(e) => setResume(e.target.value)}
                />
              </div>
            </div>
          </form>
        ) : null}
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
