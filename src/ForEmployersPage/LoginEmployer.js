import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

// import "../Homepage/Style/NavigationBar.css";

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
              name="uname"
              required
              className="w-100 form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
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
