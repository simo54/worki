import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import PrefixDropdown from "../UserSignup/PhonePrefix";
import "./Style/FormJobPost.css";

export default function JobPost(props) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);

  // Taking the id from the actual user
  const [jobtitle, setJobtitle] = useState();
  const [employmenttype, setEmploymenttype] = useState();
  const [role, setRole] = useState();
  const [requirements, setRequirements] = useState();
  const [zip, setZip] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [contactdetails, setContactdetails] = useState();
  const [jobref, setJobId] = useState();

  // console.log(jobid);

  useEffect(() => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setJobId(result);
  }, []);

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const checkBox = () => {
    setToggle(!toggle);
  };

  const submitJob = () => {
    const companyid = props.data;
    console.log(companyid);
    if (agreement === false) {
      setWarning(true);
      return;
    }
    axios.post("http://localhost:5000/jobs/create", {
      jobtitle,
      employmenttype,
      role,
      requirements,
      zip,
      city,
      country,
      contactdetails,
      // introduction,
      companyid,
      jobref,
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Post a job
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Jobs details</Modal.Title>
        </Modal.Header>
        <form className="form-group" onSubmit={submitJob}>
          <Modal.Body>
            <div className="mt-4">
              <label className="mandatory">Job Title</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder=""
                onChange={(e) => setJobtitle(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="mr-2 mandatory">Type of contract</label>
              <select onChange={(e) => setEmploymenttype(e.target.value)}>
                <option disabled value="DEFAULT">
                  -- select one --
                </option>
                <option>Permanent </option>
                <option>Fixed-term</option>
                <option>Casual</option>
              </select>
            </div>
            <div className="mt-3">
              <label className="mr-2 mandatory">Working Hours</label>
              <select>
                <option disabled selected value="DEFAULT">
                  -- select one --
                </option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Flexible</option>
              </select>
            </div>
            <div className="mt-3">
              <label className="mandatory">Position details</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="If you need more space you can expand this box..."
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div class="form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck"
                onClick={checkBox}
              />
              <label class="form-check-label">
                {" "}
                <p>
                  Do you want to provide contact details for any possible
                  question?
                </p>
              </label>
            </div>
            {toggle ? (
              <>
                <div className="mt-3">
                  <label className="">Email</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id=""
                    placeholder=""
                  />
                </div>
                <div className="form-row mt-3">
                  <div className="form-group col-md-4">
                    <label className="">Prefix</label>
                    <PrefixDropdown />
                  </div>
                  <div className="form-group col-md-8">
                    <label className="">Mobile</label>
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="inputMobile"
                      placeholder="Insert your phone number..."
                    />
                  </div>
                </div>{" "}
              </>
            ) : null}

            <div className="mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  required
                  onClick={checkAgreement}
                />
                <label className="form-check-label">
                  I accept the{" "}
                  <a href="http://localhost:3000/">
                    terms and conditions
                    <span className="mandatoryTerms"> *</span>
                  </a>{" "}
                  {warning === true ? (
                    <div className="">
                      Please read and accept terms and conditions
                    </div>
                  ) : null}
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <a
              href="http://localhost:3000/"
              role="button"
              class="btn btn-secondary popover-test"
              title="Popover title"
              data-content="Popover body content is set in this attribute."
            >
              button
            </a>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
