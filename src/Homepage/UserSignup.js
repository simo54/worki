import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PrefixDropdown from "./PhonePrefix";
import ButtonLogin from "./Login";
import svg from "./icons/Supermarket workers-rafiki.svg";
import "./Style/UserSignup.css";

export default function Signup() {
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const signup = () => {
    if (agreement === false) {
      setWarning(true);
      return;
    }
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
                id=""
                placeholder="Your First Name..."
              />
            </div>
            <div className="mt-3">
              <label className="mandatory">LastName</label>
              <input
                required
                type="text"
                className="form-control"
                id=""
                placeholder="Your Last Name..."
              />
            </div>
            <div className="mt-3">
              <label>Middle Names</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Your Middle Name/s"
              />
            </div>
            <div className="mt-3">
              <label className="mandatory">Email</label>
              <input
                required
                type="email"
                className="form-control"
                id=""
                placeholder="Your email..."
              />
            </div>

            <div className="form-row mt-3">
              <div className="form-group col-md-4">
                <label className="mandatory">Prefix</label>
                <PrefixDropdown />
              </div>
              <div className="form-group col-md-8">
                <label className="mandatory">Mobile</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="inputMobile"
                  placeholder="Insert your phone number..."
                />
              </div>
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
            <Button className="mt-3 btn" onClick={signup}>
              Signup!
            </Button>
          </form>
        </div>
        <div className="col inline">
          <h2 className="text-center">
            Looking for your next talent? You came in the right place!
          </h2>
          <img src={svg} alt="svg" />
          <div className="container d-inline">
            <h6 className="text-center">
              Already a user? Please <ButtonLogin /> !{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
