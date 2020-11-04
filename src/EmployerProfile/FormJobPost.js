import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import PrefixDropdown from "../UserSignup/PhonePrefix";
import apiUrl from "../config";
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
  const [employmentContract, setEmploymentContract] = useState();
  const [role, setRole] = useState();
  const [requirements, setRequirements] = useState();
  const [workingHours, setWorkingHours] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [email, setEmail] = useState();
  const [prefix, setPrefix] = useState();
  const [mobileNoPrefix, setMobileNoPrefix] = useState();
  const [jobref, setJobId] = useState();

  // Creating a job reference using a for loops in order to assign a certain and unique value to be easily found in our backend
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

  const handleChange = (newValue) => {
    setPrefix(newValue);
  };

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
    const contactdetails = `+${prefix + " " + mobileNoPrefix + "   " + email}`;
    const employmenttype = `${employmentContract + "   " + workingHours}`;
    console.log(employmenttype);
    axios
      .post(`${apiUrl}jobs/create`, {
        jobtitle,
        employmenttype,
        role,
        requirements,
        zip,
        country,
        contactdetails,
        companyid,
        jobref,
      })
      .then((res) => {
        if (res.status !== 200) {
          alert("Mmm there was an error, please try again");
        }
        if (res.status === 200) {
          alert(`🎉🎉🎉🎉 WHOOP WHOOP THE JOB IS AVAILABLE AT /jobs 🎉🎉🎉🎉`);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Post a job and receive applications!
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <form className="form-group" onSubmit={submitJob}>
          <Modal.Body>
            <h2>Jobs details</h2>
            <div>
              <label className="mandatory">Job Title</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder=""
                onChange={(e) => setJobtitle(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mandatory">Type of contract</label>
              <select onChange={(e) => setEmploymentContract(e.target.value)}>
                <option disabled value="DEFAULT">
                  -- select one --
                </option>
                <option>Permanent </option>
                <option>Fixed-term</option>
                <option>Casual</option>
              </select>
            </div>
            <div className="mt-2">
              <label className="mandatory">Working Hours</label>
              <select onChange={(e) => setWorkingHours(e.target.value)}>
                <option disabled selected value="DEFAULT">
                  -- select one --
                </option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Flexible</option>
              </select>
            </div>
            <div>
              <label className="mr-2 mandatory">Zip</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Please input here the city of the job position"
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mr-2 mandatory">Country</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Please input here the city of the job position"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mandatory">Position details</label>
              <textarea
                required
                className="form-control"
                rows="3"
                placeholder="If you need more space you can expand this box..."
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mandatory">Requirements</label>
              <textarea
                required
                className="form-control"
                rows="3"
                placeholder="If you need more space you can expand this box..."
                onChange={(e) => setRequirements(e.target.value)}
              />
            </div>
            <div class="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck"
                onClick={checkBox}
              />
              <label class="form-check-label">
                <p>
                  Do you want to provide contact details for any possible
                  question?
                </p>
              </label>
            </div>
            {toggle ? (
              <>
                <div className="mt-2">
                  <label className="">Email</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-row mt-2">
                  <div className="form-group col-md-4">
                    <label className="">Prefix</label>
                    <PrefixDropdown onChange={handleChange} />
                  </div>
                  <div className="form-group col-md-8">
                    <label className="">Mobile</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="inputMobile"
                      placeholder="Insert your phone number..."
                      onChange={(e) => setMobileNoPrefix(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : null}
            <div className="mt-2">
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
                  </a>
                  {warning === true ? (
                    <div className="text-danger">
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
            <Button variant="primary" type="submit">
              Create New Job
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
