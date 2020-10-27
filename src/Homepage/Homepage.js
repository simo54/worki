import React, { useState, useEffect } from "react";
import axios from "axios";
import video from "./Editor-1.m4v";
import myIcon from "./icons/undraw_job_offers_kw5d.svg";
import svgfirstrow from "./icons/Job hunt-pana.svg";
import signupscvg from "./icons/Add User-pana.svg";
import searchsvg from "./icons/Usability testing-pana.svg";
import applysvg from "./icons/Resume folder-pana.svg";
import imgEmployer from "./icons/women-1209678_640.jpg";
import AutoComplete from "./Autocode";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style/Homepage.css";

// palette is https://colorhunt.co/palette/218884

export default function Homepage() {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  // Fetching data from endpoint, map them and get jobtitles
  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/`).then((res) => {
      console.log(res.data);
      const arrayOfObjects = res.data;
      const titles = arrayOfObjects.map((array) => array.jobtitle);
      setOptions(titles); //Setting array of jobtitles
    });
  }, []);

  return (
    <div className="bodyContainer">
      <div id="imgOnMobile">
        {/* Loading the svg for small devices */}
        <img src={myIcon} alt="icon" id="myIcon" width="100%" height="auto" />
        {/* Loading the svg for small devices */}
      </div>

      <div id="videoContainer">
        <div className="video-section">
          {/* <video id="video-elem" preload="true" autoPlay loop>
            <source src={video} type="video/mp4"></source>
            Video not supported
          </video> */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="video-elem"
              preload="true"
              src="https://player.vimeo.com/video/466163847?autoplay=1&loop=1&title=0"
              allow="autoplay"
              className="embed-responsive-item"
            />
          </div>
          <div className="video-overlay">
            <div className="titleInputWrapper">
              <div
                id="containerSearchTitle"
                className="d-flex justify-content-center"
              >
                <h2>Start your Job Hunt!</h2>
              </div>
              <AutoComplete
                value={value}
                onChange={(value) => setValue(value.toLowerCase())}
                dataSource={options.map((element) => element.toLowerCase())}
              />
              <div id="textUnderSearch" className="mt-3">
                Or visit our job page
                <Link to="jobs"> here</Link>
              </div>
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
              The most Liable job platform for workhands and qualified workers!
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
        <div className="row listHowWorks d-flex justify-content-around mt-5">
          <div className="card-deck">
            <div className="card cards">
              <img src={signupscvg} className="card-img-top" alt="signup" />
              <div className="card-body">
                <h3 className="card-title">1. Signup</h3>
                <p className="card-text">Signup and make a free account!</p>
              </div>
            </div>
            <div className="card cards">
              <img src={searchsvg} className="card-img-top" alt="search" />
              <div className="card-body">
                <h3 className="card-title">2. Search for new jobs!</h3>
                <p className="card-text">Browse and discover new positions</p>
              </div>
            </div>
            <div className="card cards">
              <img src={applysvg} className="card-img-top" alt="apply" />
              <div className="card-body">
                <h3 className="card-title">3. Send your application</h3>
                <p className="card-text">Apply with your profile!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third row - employer  */}
      <div id="employerColRow" className="container pt-5 pb-5 ">
        <div className="row">
          <div
            className="col-6 m-0 p-0 text-left align-self-center"
            id="employerText"
          >
            <h3 className="p-0 m-0">Are you an employer or jobhunter?</h3>
            <br />
            <p>We offer a free platform for posting you open positions. </p>
            <div className="row m-0 p-0">
              <Link to="/employersignup">
                <Button>ClickHere</Button>
              </Link>
            </div>
          </div>

          <div
            className="col-6 text-center align-self-center p-0 m-0"
            id="employerButton"
          >
            <div className="container" id="containerRecruiters">
              <img src={imgEmployer} alt="recruiters" width="300px" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="connectColRow"
        className="container-fluid d-flex justify-content-center pt-5 pb-5 "
      >
        <div className="row-fluid ">
          <div className="col text-center">
            Connect with us!
            <ul className="list-inline d-flex justify-content-around mt-5">
              <li className="list-inline-item mr-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179319.svg"
                  width="70px"
                  alt="test"
                />
              </li>
              <li className="list-inline-item mr-4 ml-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179342.svg"
                  width="70px"
                  alt="test"
                />
              </li>
              <li className="list-inline-item mr-4 ml-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179346.svg"
                  width="70px"
                  alt="test"
                />
              </li>
              <li className="list-inline-item ml-4">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/179/179330.svg"
                  width="70px"
                  alt="test"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
