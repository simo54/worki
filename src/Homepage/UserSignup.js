import React from "react";
import PrefixDropdown from "./PhonePrefix";
import "./Style/UserSignup.css";

export default function Signup() {
  return (
    <div className="container mt-5">
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
        <div className="mt-3">
          <label className="mandatory">Mobile</label>
          <div className="form-inline">
            <PrefixDropdown />
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
            />
            <label className="form-check-label mandatory">
              I accept the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
