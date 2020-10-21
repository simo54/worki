import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "./NavigationBar.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmission = (e) => {
    e.preventDefault();
    axios.post(
      "/login/user",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    alert("loggedin!"); // must pressed ok otherwise will not finish the sending
  };
  return (
    <>
      <span className="align-items-center mx-auto p-0 m-0">
        <a id="loginButton" className="align-items-center" onClick={handleShow}>
          Login
        </a>
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
