import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PrefixDropdown from "./PhonePrefix";
import ButtonLogin from "../NavigationBar/UserLogin";
import svg from "./Supermarket workers-rafiki.svg";
import axios from "axios";
import "./UserSignup.css";

export default function Signup() {
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [prefixNumber, setPrefixNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  const signup = (e) => {
    e.preventDefault();
    if (agreement === false) {
      setWarning(true);
      return;
    }
    axios.post("http://localhost:5000/user/create", {
      firstname,
      lastname,
      middlename,
      email,
      age,
      mobile,
      city,
      zip,
      country,
      password,
    });

    alert("usercreated!"); // must pressed ok otherwise will not finish the sending
  };

  // axios
  //   .post("http://localhost:4000/user/create", userData)
  //   .then((response) => console.log(response.data));
  // console.log("end of signup");

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

            <div className="form-row p-0 m-0">
              <div className="form-group col-md-4  m-0">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="form-group col-md-8  m-0">
                <label className="mandatory">Email</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Your email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row p-0 m-0">
              <div className="form-group col-md-4  m-0">
                <label className="mandatory">Prefix</label>
                <PrefixDropdown />
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
                  placeholder="Insert your phone number..."
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
                  placeholder="Insert your phone number..."
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
                placeholder=""
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id=""
                placeholder="Your Password"
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
