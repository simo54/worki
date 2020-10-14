import React from "react";
import video from "./Editor-1.m4v";
import myIcon from "./icons/undraw_job_offers_kw5d.svg";
import svgfirstrow from "./icons/Job hunt-pana.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style/Homepage.css";

export default function Homepage() {
  return (
    <div className="bodyContainer">
      <div id="imgOnMobile">
        {/* Loading the svg for small devices */}
        <img src={myIcon} alt="icon" id="myIcon" width="100%" height="auto" />
        {/* Loading the svg for small devices */}
      </div>

      <div className="video-section">
        <video id="video-elem" preload="true" autoPlay loop>
          <source src={video} type="video/mp4"></source>
          Video not supported
        </video>
        {/* <iframe
          id="video-elem"
          src="https://player.vimeo.com/video/466163847?autoplay=1&loop=1&title=0"
          frameborder="0"
          allow="autoplay"
          autoplay
          preload
        ></iframe> */}

        <div className="video-overlay">
          <div className="titleInputWrapper">
            <h1>Start your Job Hunt!</h1>
            <div id="inputContainer">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Try to search Baker..."
                  id="searchBar"
                />
                <span className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="searchButton"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-search"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div className="mt-3">
              Or visit our job page
              <Link to="jobs"> clicking here</Link>
            </div>
          </div>
        </div>
      </div>
      {/* first row - explaining jobby  */}
      <div
        id="introRow"
        className="container-fluid d-flex justify-content-center pt-5 pb-5"
      >
        <div className="row align-items-center">
          <div id="textIntroRow" className="col">
            <h2>
              The most Liable job platform for handy-people and qualified
              workers!
            </h2>
            <p>
              Worki! allows you to find jobs in your area and will provide the
              best application experience
            </p>
          </div>
          <div id="imgIntroRow" className="col">
            {/* Loading the svg for small devices */}
            <div className="container p-0">
              <img src={svgfirstrow} alt="icon" width="100%" height="auto" />
            </div>
            {/* Loading the svg for small devices */}
          </div>
        </div>
      </div>
      <div id="firstvisualColRow" className="container-fluid pt-5 pb-5 ">
        <div className="row text-center firstvisualColRowText">
          <div className="col">How does it work?</div>
        </div>
        <div className="row text-center listHowWorks">
          <div className="col connectedNumbers">
            1.<span className="howItWorks"> Sign up on our website</span>
          </div>
          <div className="col connectedNumbers">
            2.
            <span className="howItWorks"> Search for a suitable position</span>
          </div>
          <div className="col connectedNumbers">
            3.
            <span className="howItWorks"> Send your personal application</span>
          </div>
        </div>
      </div>
      {/* third row - employer  */}
      <div
        id="employerColRow"
        className="container-fluid d-flex justify-content-center pt-5 pb-5 "
      >
        <div className="row">
          <div className="col" id="employerDiv">
            Are you an employer/jobhunter?
          </div>
          <div>
            <Link to="/usersignup">
              <Button>ClickHere</Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="meetTheTeamColRow"
        className="container-fluid d-flex justify-content-center pt-5 pb-5 "
      >
        <div className="row-fluid">
          <div className="col">Meet the Team</div>
          <div className="container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Glasto17-44_%2835547413626%29_Cropped.jpg"
              width="250px"
            />
          </div>
        </div>
      </div>
      <div
        id="connectColRow"
        className="container-fluid d-flex justify-content-center pt-5 pb-5 "
      >
        <div className="row">
          <div className="col text-center">
            Connect with us!
            <ul className="list-inline d-flex justify-content-around">
              <li className="list-inline-item mr-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179319.svg"
                  width="70px"
                />
              </li>
              <li className="list-inline-item mr-4 ml-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179342.svg"
                  width="70px"
                />
              </li>
              <li className="list-inline-item mr-4 ml-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179346.svg"
                  width="70px"
                />
              </li>
              <li className="list-inline-item ml-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179330.svg"
                  width="70px"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
