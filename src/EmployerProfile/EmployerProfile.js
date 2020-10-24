import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PostAjob from "./FormJobPost";

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
                    alt="..."
                    className="img-thumbnail"
                  />
                </div>
              </div>

              {/* Right column for job posts available and other things */}
              <div className="col-6">
                <div className="joblists mb-3">
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Example: job1
                      <span className="badge badge-primary badge-pill">
                        14 Applications
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Example: job2
                      <span className="badge badge-primary badge-pill">
                        2 Applications
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Example: job2
                      <span className="badge badge-primary badge-pill">
                        1 Application
                      </span>
                    </li>
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
