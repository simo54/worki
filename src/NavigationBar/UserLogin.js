import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "./UserLogin.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [positiveStatus, setPositiveStatus] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginSubmission = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/login/user",
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log("OK");
          setPositiveStatus(true);
        }
      });
  };
  return (
    <>
      <span id="loginButton" className="ml-2 mr-1 align-self-center">
        <a onClick={handleShow}>Login</a>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Username / Email</label>
            <input
              type="text"
              placeholder="Enter Username"
              required
              className="w-100 form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-100 form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            Not a member?
            <span>
              <a href="http://localhost:3000/"> Click here!</a>
            </span>{" "}
          </div>
          <Button
            variant="primary"
            className=""
            onClick={(e) => {
              handleClose();
              loginSubmission(e);
            }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
