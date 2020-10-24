import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PostAjob from "./FormJobPost";
import ListApplications from "./ApplicationsList";

export default function RecruiterProfile() {
  const [error, setError] = useState(false);
  console.log(error);

  useEffect(() => {
    axios
      .get("/employer/profile", { validateStatus: () => true })
      .then((response) => {
        console.log(response.status);
        if (response.status === 401) {
          // redirect to login
          setError(true);
          return;
        }
      });
    // We need to fetch all jobs related to the company that logged in
    // axios.get().then().catch();

    // // We need to fetch also the total applications and count them inside our span
    // axios.get().then().catch();
  }, []);

  return (
    <div>
      {error ? (
        <Redirect to="/" />
      ) : (
        <>
          <div id="welcome" className="container">
            <h2>Welcome XYZ</h2>
          </div>

          <div className="container">
            <div className="row">
              {/* Left column for company logo picture and other info */}
              <div className="col-4">
                <div className="">
                  <img
                    src="https://i.ytimg.com/vi/7OD55d6iRCQ/maxresdefault.jpg"
                    alt="profilepicture"
                    className="img-thumbnail"
                  />
                </div>
                <div className="container text-justify mt-4">
                  <h3>About us</h3>
                  <text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </text>
                </div>
              </div>

              {/* Right column for job posts available and other things */}
              <div className="col-6">
                <div className="joblists mb-3">
                  <label>Open Positions in xxx</label>
                  <ul className="list-group">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">
                        14 Applications
                      </span>
                    </a>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">
                        14 Applications
                      </span>
                    </a>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      Dapibus ac facilisis in
                      <span className="badge badge-primary badge-pill">
                        14 Applications
                      </span>
                    </a>
                  </ul>
                </div>
                <PostAjob />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
