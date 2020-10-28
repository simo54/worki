import React, { useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Style/LoginEmployer.css";

export default function LoginEmployer({ testLogin }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkstatus, setCheckStatus] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginSubmission = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/login/userEmployer",
        { email, password },
        { withCredentials: true }
      )
      .then((res) => setCheckStatus(true));
  };
  return (
    <>
      <Nav.Link onClick={handleShow} className="navLink align-items-center">
        Login
      </Nav.Link>

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
