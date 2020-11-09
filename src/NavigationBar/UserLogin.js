// Modal component where we create the token session for existing user
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import apiUrl from "../config";
import "./UserLogin.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginSubmission = (e) => {
    e.preventDefault();
    axios
      .post(
        `${apiUrl}login/user`,
        { email, password },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status !== 200) {
          alert("please insert right credentials");
        }
        if (res.status === 200) {
          history.push("/user/profile"); // Redirect on user profile if everything went good
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
              <a href="/usersignup"> Click here!</a>
            </span>
          </div>
          <Button
            variant="primary"
            className="ml-3"
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
