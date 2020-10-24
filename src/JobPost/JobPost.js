import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import PrefixDropdown from "../UserSignup/PhonePrefix";
import "./JobApplication.css";

export default function Example() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const checkBox = () => {
    setToggle(!toggle);
  };

  const submitJob = () => {
    if (agreement === false) {
      setWarning(true);
      return;
    }
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
                id=""
                placeholder=""
              />
            </div>
            <div className="mt-3">
              <label className="mr-2 mandatory">Type of contract</label>
              <select>
                <option disabled selected value="DEFAULT">
                  -- select one --
                </option>
                <option>eeeeeebbbbll</option>
                <option>bla</option>
                <option>eeeeee</option>
                <option>eeeeee</option>
                <option>eeeeee</option>
                <option>eeeeee</option>
                <option>eeeeee</option>
              </select>
            </div>
            <div className="mt-3">
              <label className="mandatory">Role details</label>
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
                  <a href="#">
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
          <Button variant="primary" onClick={submitJob}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
