import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Style/NavigationBar.css";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {" "}
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
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
                className="w-100 form-control mb-3"
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
                className="w-100 form-control"
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
            <Button variant="primary" className="ml-3" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}
