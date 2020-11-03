import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PrefixDropdown from "./PhonePrefix";
import svg from "./Supermarket workers-rafiki.svg";
import axios from "axios";
import apiUrl from "../config";
import "./UserSignup.css";

export default function Signup() {
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [middlename, setMiddlename] = useState();
  const [email, setEmail] = useState();
  const [prefixNumber, setPrefixNumber] = useState();
  const [mobileNoPrefix, setMobile] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleChange = (newValue) => {
    setPrefixNumber(newValue);
  };

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const signup = (e) => {
    e.preventDefault();
    if (agreement === false) {
      setWarning(true);
      return;
    }
    const mobile = `+${prefixNumber}${mobileNoPrefix}`;
    axios
      .post(`${apiUrl}user/create`, {
        firstname,
        lastname,
        middlename,
        email,
        mobile,
        city,
        zip,
        country,
        password,
      })
      .then((res) => {
        if (res.status !== 200) {
          alert("Please check the info provided");
        }
        if (res.status === 200) {
          alert(
            `🎉🎉🎉🎉 WHOOP WHOOP YOU MADE IT 🎉🎉🎉🎉\n\nPlease Click on Login button on the right side once this window is closed!`
          );
          history.push("/"); // Redirect on user profile if everything went good
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>Please provide your personal info</h2>
          <form className="form-group">
            <div className="mt-4">
              <label className="mandatory">FirstName</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Your First Name..."
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="">
              <label className="mandatory">LastName</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Your Last Name..."
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="">
              <label>Middle Names</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Middle Name/s"
                onChange={(e) => setMiddlename(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="mandatory">Email</label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Your email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-row p-0 m-0">
              <div className="form-group col-md-4  m-0">
                <label className="mandatory">Prefix</label>
                <PrefixDropdown onChange={handleChange} />
              </div>
              <div className="form-group col-md-8  m-0">
                <label className="mandatory">Mobile</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="inputMobile"
                  placeholder="Insert your phone number..."
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row  m-0">
              <div className="form-group col-md-8  m-0">
                <label className="mandatory">Zip Code</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="inputMobile"
                  placeholder="Insert your zip code..."
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="form-group col-md-4 p-0 m-0">
                <label className="mandatory">Country</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="inputMobile"
                  placeholder="Insert your country..."
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <label className="mandatory">City</label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Insert your city..."
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="">
              <label className="mandatory">Password</label>
              <input
                type="password"
                className="form-control"
                id=""
                placeholder="Write a secure password! "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

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
                    <div className="text-danger">
                      Please read and accept terms and conditions
                    </div>
                  ) : null}
                </label>
              </div>
            </div>
            <Button className="mt-3 btn" onClick={signup}>
              Signup!
            </Button>
          </form>
        </div>
        <div className="col inline">
          <h2 id="test" className="text-center">
            Looking for your next job? Signup and check it out!
          </h2>
          <img src={svg} alt="svg" />
        </div>
      </div>
    </div>
  );
}
