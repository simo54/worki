// Signup for employer, we will just get all info provided and create a new entry on our database
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PrefixDropdown from "../UserSignup/PhonePrefix";
import svg from "./icons/Business deal-rafiki.svg";
import EmployerLogin from "./LoginEmployer";
import axios from "axios";
import apiUrl from "../config";
import "./Style/ForEmployer.css";

export default function Employersignup() {
  const [toggle, setToggle] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [warning, setWarning] = useState(false);
  const location = useLocation();

  // Fixing issues when switching between pages (without this will let you see the page on half when reaching this page from another url)
  useEffect(() => {
    if (location.pathname === "/employersignup") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const [companyname, setCompanyname] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [middlename, setMiddlename] = useState();
  const [email, setEmail] = useState();
  const [prefixNumber, setPrefixNumber] = useState();
  const [mobileNoPrefix, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [companysize, setCompanysize] = useState();
  const [password, setPassword] = useState();

  // Getting the props prefix value from PhonePrefix.js
  const handleChange = (prefix) => {
    setPrefixNumber(prefix);
  };

  // Function that check if person is a freelance
  const checkBox = () => {
    setToggle(!toggle);
  };

  // Check if employer agreed on terms and conditions
  const checkAgreement = () => {
    setAgreement(!agreement);
  };

  // This post the new user into our database, if agreement has been accepted)
  const signup = (e) => {
    if (agreement === false) {
      setWarning(true);
      return;
    }
    const mobile = `+${prefixNumber}${mobileNoPrefix}`;
    axios
      .post(`${apiUrl}employer/create`, {
        companyname,
        firstname,
        lastname,
        middlename,
        email,
        mobile,
        address,
        city,
        zip,
        country,
        companysize,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status !== 200) {
          alert("Please check the info provided");
        }
        if (res.status === 200) {
          alert(`✔✔✔ Thanks for the signup! ✔✔✔\n\nPlease Click on Login button on the right-bottom side once this window is closed and page is reloaded!`);
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-7'>
            <h4>Sig up for Free!</h4>
            {/* If employer is a freelancer they can signup with their personal data. Futher inputs will be displayed such as firstname, lastname.. */}
            <div className='custom-control custom-checkbox'>
              <input type='checkbox' className='custom-control-input' id='customCheck' onClick={checkBox} />
              <label className='custom-control-label' htmlFor='customCheck'>
                {" "}
                <p>Are you a freelancer or a phisical person?</p>
              </label>
            </div>
            <form className='form-group'>
              {toggle === false ? (
                <div className='mt-1'>
                  <label className='mandatory'>Company Name</label>
                  <input required type='text' className='form-control' placeholder='Your Company Name...' onChange={(e) => setCompanyname(e.target.value)} />
                </div>
              ) : null}
              {toggle ? (
                <>
                  <div className='mt-2'>
                    <label className='mandatory'>First Name</label>
                    <input required type='text' className='form-control' placeholder='Your First Name...' onChange={(e) => setFirstname(e.target.value)} />
                  </div>
                  <div className='mt-2'>
                    <label className='mandatory'>Last Name</label>
                    <input required type='text' className='form-control' placeholder='Your Last Name...' onChange={(e) => setLastname(e.target.value)} />
                  </div>
                  <div className='mt-2'>
                    <label>Middle Names</label>
                    <input type='text' className='form-control' placeholder='Your Middle Name/s' onChange={(e) => setMiddlename(e.target.value)} />
                  </div>{" "}
                </>
              ) : null}
              <div className='mt-2'>
                <label className='mandatory'>Email</label>
                <input required type='email' className='form-control' placeholder='Your email...' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mt-2'>
                <div className='form-row'>
                  <div className='form-group col-md-4'>
                    <label className='mandatory'>Prefix</label>
                    <PrefixDropdown onChange={handleChange} />
                  </div>
                  <div className='form-group col-md-8'>
                    <label className='mandatory'>Mobile</label>
                    <input required type='email' className='form-control' placeholder='Insert your phone number...' onChange={(e) => setMobile(e.target.value)} />
                  </div>
                </div>
              </div>
              <div>
                <label className='mandatory'>Address</label>
                <input type='text' className='form-control' placeholder='Your Address...' onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className='form-row mt-2'>
                <div className='form-group col-lg-6'>
                  <label className='mandatory'>City</label>
                  <input type='text' className='form-control' onChange={(e) => setCity(e.target.value)} placeholder='Your city...' />
                </div>
                <div className='form-group col-lg-2'>
                  <label className='mandatory'>Zip</label>
                  <input type='text' className='form-control' onChange={(e) => setZip(e.target.value)} placeholder='Zipcode' />
                </div>
                <div className='form-group col-lg-4'>
                  <label className='mandatory'>Country</label>
                  <input type='text' className='form-control' onChange={(e) => setCountry(e.target.value)} placeholder='Your country...' />
                </div>
              </div>
              <div>
                <label className='mandatory'>Company Size</label>
                <select className='form-control' data-role='select-dropdown' onChange={(e) => setCompanysize(e.target.value)}>
                  <option disabled value='DEFAULT'>
                    Size of the company
                  </option>
                  <option>Small - 0/25 employees</option>
                  <option>Medium - 25/50 employees</option>
                  <option>Large - 50+ employees</option>
                </select>
              </div>
              <div className='mt-3'>
                <label className='mandatory'>Password</label>
                <input required type='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='mt-3'>
                <div className='form-check'>
                  <input className='form-check-input' type='checkbox' id='gridCheck' required onClick={checkAgreement} />
                  <label className='form-check-label'>
                    I accept{" "}
                    <a href='https://www.ecosia.org/?c=en'>
                      terms and conditions
                      <span className='mandatoryTerms'> *</span>
                    </a>
                    {warning === true ? <div className='text-danger'>Please read and accept terms and conditions</div> : null}
                  </label>
                </div>
              </div>
              <Button className='mt-3 btn' onClick={signup}>
                Signup!
              </Button>
            </form>
          </div>
          <div className='col-5 d-inline'>
            <h2 className='text-center'>Looking for your next talent? This way please!</h2>
            <img src={svg} alt='svg' />
            <h6 className='text-center'>
              Already an user? Please
              <EmployerLogin />!
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
