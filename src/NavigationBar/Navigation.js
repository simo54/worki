import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import Login from "./UserLogin";
import "./NavigationBar.css";

export default function Navigation() {
  const location = useLocation();

  return (
    <div>
      <Navbar id="navbar" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <h1 id="mainTitle" className="display-3 text-center ml-5">
              Worki
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-right">
          <Nav className="text-right ml-auto" id="navUl">
            <Nav.Link
              className="navLink align-items-center"
              href="/howitworks?"
              id="linHowDoesItWork"
            >
              How does it worki?
            </Nav.Link>
            <Nav.Link
              className="navLink align-items-center"
              href="/employersignup"
              id="linkEmployerSignup"
            >
              For Employers
            </Nav.Link>
            <div
              id="buttons"
              className={
                location.pathname === "/employersignup"
                  ? "hide"
                  : "navLink d-flex align-self-center"
              }
            >
              <Login />
              <Link to="/usersignup">
                <Button id="signupButton" className="btn btn-success mr-5">
                  Sign up!
                </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
