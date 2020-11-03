import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import apiUrl from "../config";
import axios from "axios";
import "./UpdateInfo.css";

export default function UpdatePersonalInfo(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [email, setEmail] = useState("");
  // const [prefixNumber, setPrefixNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const updateInfo = () => {
    const id = props.data;
    const myParam = {
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      email: email,
      mobile: mobile,
      address: address,
      city: city,
      zip: zip,
      country: country,
    };
    Object.keys(myParam).forEach(
      (key) =>
        (myParam[key] === null || myParam[key] === "") && delete myParam[key]
    );
    axios.put(`${apiUrl}user/${id}/updateinfo`, myParam);
  };

  return (
    <>
      <span id="setting">
        <a onClick={handleShow}>
          <svg
            width="3em"
            height="1.9em"
            viewBox="0 0 16 16"
            className="bi bi-gear-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"
            />
          </svg>
        </a>
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Settings
            {/* <small>You can change your personal info here</small> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <div className="col">
          <form className="form-group">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>
                  <h5>First Name</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <h5>Last Name</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label>
                  <h5>Middle Name</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setMiddlename(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label>
                  <h5>Email</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group col-md-4">
                <label>
                  <h5>Mobile</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                <h5>Address</h5>
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-5">
                <label>
                  <h5>City</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group col-md-4">
                <label>
                  <h5>Country</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <label>
                  <h5>Zip</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="form-group col-md-12">
                <label>
                  <h5>Presentation</h5>
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  onChange={(e) => setLastname(e.target.value)}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateInfo()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
