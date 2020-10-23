import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import Login from "./UserLogin";
import "./NavigationBar.css";

export default function Navigation() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  // need to connect the useState to the child. We need to change the state with the login button on the effect module from  "./Login";
  // const userLoggedIn = () => {
  //   console.log("test");
  //   setLoggedIn(true);
  // };
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
              How does it work?
            </Nav.Link>
            <Nav.Link
              className="navLink align-items-center"
              href="/employersignup"
              id="linkEmployerSignup"
            >
              For Employers
            </Nav.Link>
            {loggedIn ? (
              <div>Welcome Back!</div>
            ) : (
              <div
                id="buttons"
                className={
                  location.pathname === "/employersignup"
                    ? "hide"
                    : "navLink d-flex align-self-center"
                }
              >
                <div className="d-flex align-self-center mr-5">
                  <Login testLogin={() => setLoggedIn(true)} />
                </div>
                <Link to="/usersignup">
                  <Button id="signupButton" className="btn btn-success">
                    Sign up!
                  </Button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
