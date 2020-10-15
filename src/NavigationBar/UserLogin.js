import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "./NavigationBar.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmission = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    axios
      .post("/login", {
        username,
        password,
      })
      .then((results) => console.log(results.data));
    console.log("loggedIn");
  };
  return (
    <>
      <Button id="loginButton" onClick={handleShow}>
        Login
      </Button>

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
              required
              className="w-100 form-control mb-3"
              onChange={(e) => setUsername(e.target.value)}
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
              <a href="#"> Click here!</a>
            </span>{" "}
          </div>
          <Button
            variant="primary"
            className="ml-3"
            onClick={handleClose}
            onClick={loginSubmission}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
