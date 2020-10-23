import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Style/LoginEmployer.css";

export default function LoginEmployer({ testLogin }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmission = (e) => {
    e.preventDefault();
    axios.post("/login/userEmployer", {
      email,
      password,
    });
    alert("loggedin!"); // must pressed ok otherwise will not finish the sending
  };
  return (
    <>
      <span id="loginButton" className="ml-2 pr-0 align-self-center">
        <a onClick={handleShow}>Login</a>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Username / Email</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
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
            <Link to="/usersignup">Click here!</Link>
          </div>
          <Button
            variant="primary"
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
