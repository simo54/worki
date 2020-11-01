import React, { useEffect, useState } from "react";
import PostAjob from "./FormJobPost";
import ListApplicants from "./ApplicationsList";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import ListApplications from "./ApplicationsList";

export default function RecruiterProfile({ dataId }) {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState();
  const history = useHistory();

  useEffect(() => {
    const id = dataId;
    axios.get(`http://localhost:5000/employer/${id}`).then((res) => {
      setProfile(res.data);
    });
    axios.get(`http://localhost:5000/jobs/company/${id}`).then((res) => {
      setJobs(res.data);
    });
    // Get Applications for that specific jobs
  }, [dataId]);

  const timeout = () => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  console.log(profile);

  return (
    <>
      <div>
        <div id="welcome" className="container">
          <h2>Welcome {profile ? `${profile.companyname}` : null}</h2>
        </div>
        <div className="container">
          <div className="row">
            {/* Left column for company logo picture and other info */}
            <div className="col-4">
              {profile ? (
                <>
                  <div className="imgContainer">
                    <img
                      src={profile.logo !== null ? profile.logo : null}
                      alt="profilepicture"
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="container text-justify mt-4">
                    <h3>About us</h3>
                    <text>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </text>
                  </div>
                </>
              ) : null}
            </div>
            {/* Right column for job posts available and other things */}
            <div className="col-6">
              <div className="joblists mb-3">
                <label>Job Listing</label>
                <ul className="list-group">
                  {jobs && jobs.length
                    ? jobs.map((element, index) => (
                        <>
                          <ListApplicants
                            jobtitle={element.jobtitle}
                            employmenttype={element.employmenttype}
                            jobref={element.jobref}
                          />
                        </>
                      ))
                    : null}
                </ul>
              </div>
              {/* Passing props to child component */}
              <PostAjob data={dataId} />
              <form>
                {profile.companyname ? (
                  <div className="form-group row">
                    <label
                      htmlFor="staticEmail"
                      className="col-sm-3 col-form-label"
                    >
                      <h5>Company Name</h5>
                    </label>
                    <div className="col-sm-9 w-50 pl-0">
                      <input
                        type="text"
                        readOnly
                        className="form-control form-control-md w-50"
                        value={profile.companyname}
                      />
                    </div>
                  </div>
                ) : null}
                {profile.name ? (
                  <>
                    <div className="form-group row">
                      <label
                        htmlFor="staticEmail"
                        className="col-sm-3 col-form-label"
                      >
                        <h5>Name</h5>
                      </label>
                      <div className="col-sm-9 w-50 pl-0">
                        <input
                          type="text"
                          readOnly
                          className="form-control form-control-md w-50"
                          value={profile.firstname}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                {profile.lastname ? (
                  <div className="form-group row">
                    <label
                      htmlFor="staticEmail"
                      className="col-sm-3 col-form-label"
                    >
                      <h5>Last Name</h5>
                    </label>
                    <div className="col-sm-9 w-50 pl-0">
                      <input
                        type="text"
                        readOnly
                        className="form-control form-control-md w-50"
                        value={profile.lastname}
                      />
                    </div>
                  </div>
                ) : null}
                {profile.middlename ? (
                  <>
                    {" "}
                    <div className="form-group row">
                      <label
                        htmlFor="staticEmail"
                        className="col-sm-3 col-form-label"
                      >
                        <h5>Middle Name</h5>
                      </label>
                      <div className="col-sm-9 w-50 pl-0">
                        <input
                          type="text"
                          readOnly
                          className="form-control form-control-md w-50"
                          value={profile.middlename}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>Email</h5>
                  </label>
                  <div className="col-sm-9 w-50 pl-0">
                    <input
                      type="text"
                      readOnly
                      className="form-control form-control-md w-50"
                      value={profile.email}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>Mobile</h5>
                  </label>
                  <div className="col-sm-9 w-50 pl-0">
                    <input
                      type="text"
                      readOnly
                      className="form-control form-control-md w-50"
                      value={profile.mobile}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>Address</h5>
                  </label>
                  <div className="col-sm-9 w-50 pl-0">
                    <input
                      type="text"
                      readOnly
                      className="form-control form-control-md w-50"
                      value={profile.address}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>City</h5>
                  </label>
                  <div className="col-sm-9 w-50 pl-0">
                    <input
                      type="text"
                      readOnly
                      className="form-control form-control-md w-50"
                      value={profile.city}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>Zip</h5>
                  </label>
                  <div className="col-sm-9 w-50 pl-0">
                    <input
                      type="text"
                      readOnly
                      className="form-control form-control-md w-50"
                      value={profile.zip}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>Country</h5>
                  </label>
                  <div className="col-sm-9 w-50 pl-0">
                    <input
                      type="text"
                      readOnly
                      className="form-control form-control-md w-50"
                      value={profile.country}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>Company Size</h5>
                  </label>
                  <div className="col-sm-9 w-50 pl-0">
                    <input
                      type="text"
                      readOnly
                      className="form-control form-control-md w-50"
                      value={profile.companysize}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
