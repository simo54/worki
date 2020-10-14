import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PrefixDropdown from "../Homepage/PhonePrefix";
import ButtonLogin from "../Homepage/UserLogin";
import svg from "./Supermarket workers-rafiki.svg";
import axios from "axios";
import "./UserSignup.css";

export default function Signup() {
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [middleName, setmiddleName] = useState("");
  // const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  // const [address, setaddress] = useState("");
  // const [city, setcity] = useState("");
  // const [zipCode, setzipCode] = useState("");
  // const [country, setcountry] = useState("");
  const [password, setpassword] = useState("");

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const signup = (e) => {
    // if (agreement === false) {
    //   setWarning(true);
    //   return;
    // }
    e.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      email: email,
      mobile: mobile,
      password: password,
    };

    axios
      .post("http://localhost:4000/user/create", userData)
      .then((response) => console.log(response.data));
    console.log("end of signup");
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
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="mandatory">LastName</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Your Last Name..."
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label>Middle Names</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Middle Name/s"
                onChange={(e) => setmiddleName(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <label className="mandatory">Email</label>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Your email..."
                onChange={(e) => setemail(e.target.value)}
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
                  onChange={(e) => setmobile(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id=""
                placeholder="Your Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" required />
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
