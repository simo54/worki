import React from "react";
import { Link } from "react-router-dom";
import "./HowDoesItWork.css";

export default function HowDoesItWork() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div id="titleHowDoesItWork" className="text-center">
              <h2 className="display-2">job board sites are boring</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="secondRow" className="container pt-5 pb-5 ">
        <div className="row">
          <div className="col m-0 p-0 text-center align-self-center">
            <h3 className="p-0 m-0">Are you an employer or jobhunter?</h3>
          </div>
        </div>
      </div>
      <div id="secondRow" className="container pt-5 pb-5 ">
        <div className="row">
          <div className="col m-0 p-0 text-center align-self-center">
            <h3 className="p-0 m-0">Are you an employer or jobhunter?</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
