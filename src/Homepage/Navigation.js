import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import ButtonLogin from "./Login";
import "./Style/NavigationBar.css";

export default function Navigation() {
  const location = useLocation();

  return (
    <div>
      <div id="titleContainer" className="d-flex align-items-center">
        <Link to="/">
          <h1 id="mainTitle" className="display-3 text-center ml-5">
            Worki
          </h1>
        </Link>

        <nav
          id="navigationBar"
          className="navbar navbar-light navbar-expand-lg justify-content-md-center justify-content-start mr-5"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-around align-items-center w-100"
            id="navbarSupportedContent"
          >
            <ul
              id="navList"
              className="navbar-nav mx-auto text-md-center text-left"
            >
              <li className="nav-item">
                <a className="nav-link mr-5" href="#">
                  {/* <Link to="/home">Home</Link> */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How does it work?
                </a>
              </li>
              <Link to="/employer">
                <li className="nav-item">
                  <a className="nav-link ml-5">For Employers</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        <div
          id="buttons"
          className={location.pathname === "/employer" ? "hide" : "mr-5 d-flex"}
        >
          <ButtonLogin />
          <Link to="/usersignup">
            <Button id="signupButton" className="ml-2">
              Sign up!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
