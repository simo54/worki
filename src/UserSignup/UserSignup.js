// User signup component, here we collect all user info and we create a new entry on our database
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Fixing issues when switching between pages (without this will let you see the page on half)
  useEffect(() => {
    if (location.pathname === "/usersignup") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Getting the props prefix value from PhonePrefix.js
  const handleChange = (prefix) => {
    setPrefixNumber(prefix);
  };

  // Checking agreement
  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  // Signup function
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
    <div className="container mt-4">
      <div className="row">
        <div className="col-7">
          <h4>Please provide your personal info</h4>
          <form className="form-group">
            <div className="mt-4">
              <label className="mandatory">First Name</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Your First Name..."
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mandatory">Last Name</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Your Last Name..."
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label>Middle Names</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Middle Name/s"
                onChange={(e) => setMiddlename(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mandatory">Email</label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Your email..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row pb-0 m-0 mt-2">
              <div className="form-group col-4 m-0 p-0">
                <label className="mandatory">Prefix</label>
                <PrefixDropdown onChange={handleChange} />
              </div>
              <div className="form-group col-8 m">
                <label className="mandatory">Mobile</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Insert your phone number..."
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row p-0 m-0">
              <div className="form-group col-4 m-0 p-0 mb-0">
                <label className="mandatory">Zip Code</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Insert your zip code..."
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="form-group col-8 m-0 mb-0">
                <label className="mandatory">Country</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Insert your country..."
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="mandatory">City</label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Insert your city..."
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <label className="mandatory">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Write a secure password! "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
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
            <Button id="buttonSignup" className="mt-3 btn" onClick={signup}>
              Signup!
            </Button>
          </form>
        </div>
        <div className="col-5 d-inline">
          <h2 className="text-center">
            Looking for your next job? Signup and check it out!
          </h2>
          <img src={svg} alt="svg" />
        </div>
      </div>
    </div>
  );
}
