import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PrefixDropdown from "../Homepage/PhonePrefix";
import svg from "./icons/Business deal-rafiki.svg";
import "./Style/ForEmployer.css";

export default function ForEmployer() {
  const [toggle, setToggle] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);

  const checkBox = () => {
    setToggle(!toggle);
  };

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const signup = () => {
    if (agreement === false) {
      setWarning(!warning);
    }
    if (agreement === true) {
      return;
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h4>Sig up for Free!</h4>

            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck"
                name="example1"
                onClick={checkBox}
              />
              <label class="custom-control-label" for="customCheck">
                {" "}
                <p>Are you a freelancer or a phisical person?</p>
              </label>
            </div>

            <form className="form-group">
              {toggle === false ? (
                <div className="mt-4">
                  <label className="mandatory">Company Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Your Company Name..."
                  />
                </div>
              ) : null}
              {toggle ? (
                <>
                  <div className="mt-3">
                    <label className="mandatory">First Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Your First Name..."
                    />
                  </div>
                  <div className="mt-3">
                    <label className="mandatory">Last Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Your Last Name..."
                    />
                  </div>
                  <div className="mt-3">
                    <label>Middle Names</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Middle Name/s"
                    />
                  </div>{" "}
                </>
              ) : null}

              <div className="mt-3">
                <label className="mandatory">Email</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Your email..."
                />
              </div>
              <div className="mt-3">
                <div className="form-row">
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
              </div>
              <div>
                <label className="mandatory">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Address..."
                />
              </div>

              <div className="form-row mt-3">
                <div className="form-group col-lg-6">
                  <label className="mandatory">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-lg-4">
                  <label className="mandatory">Country</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-lg-2">
                  <label className="mandatory">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div>
                <label className="mandatory">Company Size</label>
                <select className="form-control" data-role="select-dropdown">
                  <option disabled selected>
                    Size of the company
                  </option>
                  <option>Small - 0/25 employees</option>
                  <option>Medium - 25/50 employees</option>
                  <option>Large - 50+ employees</option>
                </select>
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
                  <label className="form-check-label mandatory">
                    I accept the <a href="#">terms and conditions</a>{" "}
                    {warning === true ? (
                      <div>Plase accept terms and conditions</div>
                    ) : null}
                  </label>
                </div>
              </div>
              <Button className="mt-3 btn" onClick={signup}>
                Signup!
              </Button>
            </form>
          </div>
          <div className="col">
            <h2 className="text-center">
              Looking for your next talent? You came in the right place!
            </h2>
            <img src={svg} alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid">Few things here</div>
      <div className="container-fluid">Few things here</div>
      <div className="container-fluid">Few things here</div>
    </div>
  );
}
