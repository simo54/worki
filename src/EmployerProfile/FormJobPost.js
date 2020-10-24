import React, { useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import PrefixDropdown from "../UserSignup/PhonePrefix";
import "./Style/FormJobPost.css";

export default function Example() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);

  const [jobtitle, setJobtitle] = useState(false);
  const [employmenttype, setEmploymenttype] = useState(false);
  const [introduction, setIntroduction] = useState(false);
  const [role, setRole] = useState(false);
  const [requirements, setRequirements] = useState(false);
  const [zip, setZip] = useState(false);
  const [city, setCity] = useState(false);
  const [country, setCountry] = useState(false);
  const [contactdetails, setContactdetails] = useState(false);

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const checkBox = () => {
    setToggle(!toggle);
  };

  const signup = () => {
    if (agreement === false) {
      setWarning(true);
      return;
    }
    axios.post("/jobs/create", {
      jobtitle,
      employmenttype,
      introduction,
      role,
      requirements,
      zip,
      city,
      country,
      contactdetails,
    });

    alert("jobcreated!"); // must pressed ok otherwise will not finish the sending
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
        <Modal.Body>
          <form className="form-group">
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
                <option disabled selected value="DEFAULT">
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
              ></textarea>
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
          </form>
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
          <Button variant="primary" onClick={signup}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
