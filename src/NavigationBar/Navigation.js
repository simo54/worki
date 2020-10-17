import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Collapse, Navbar, Nav, NavDropdown } from "react-bootstrap";
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <h1 id="mainTitle" className="display-3 text-center ml-5">
              Worki
            </h1>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=" text-right">
          <Nav className="text-right ml-auto" id="navUl">
            <Nav.Link href="/howitworks?">How does it work?</Nav.Link>
            <Nav.Link href="#link">
              <Link to="/employersignup">For Employers</Link>
            </Nav.Link>
            {loggedIn ? (
              <div>Welcome Back!</div>
            ) : (
              <div
                id="buttons"
                className={
                  location.pathname === "/employersignup" ? "hide" : ""
                }
              >
                <Login testLogin={() => setLoggedIn(true)} />
                <Link to="/usersignup">
                  <Button id="signupButton" className="ml-2">
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
