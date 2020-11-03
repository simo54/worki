import React, { useEffect, useState } from "react";
import PostAjob from "./FormJobPost";
import ListApplicants from "./ApplicationsList";
import UpdateInfo from "./UpdateEmployerInfo";
import axios from "axios";
import apiUrl from "../config";
import "./Style/EmployerProfile.css";

export default function RecruiterProfile({ dataId }) {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState();

  useEffect(() => {
    const id = dataId;
    axios.get(`${apiUrl}employer/${id}`).then((res) => {
      setProfile(res.data);
    });
    axios.get(`${apiUrl}jobs/company/${id}`).then((res) => {
      setJobs(res.data);
    });
  }, [dataId]);

  return (
    <div>
      <div id="welcome" className="container">
        <div className="d-flex justify-content-between align-items-center border-bottom mb-5">
          <h2>Welcome {profile ? `${profile.companyname}` : null}</h2>
          <UpdateInfo data={dataId} />
        </div>
        <div className="row">
          <div className="col-5">
            {profile.logo ? (
              <div className="imgContainer">
                <img
                  src={profile.logo}
                  alt="profilepicture"
                  className="img-thumbnail"
                />
              </div>
            ) : null}
            <div className="container text-center mt-4">
              <div className="container">{/* <img src={}/> */}</div>
              <h3>About us</h3>
              <div className="text-justify mb-5">
                <p>{profile.aboutus}</p>
              </div>
              <PostAjob data={dataId} />
            </div>
          </div>
          {/* Right column for job posts available and other things */}
          <div className="col-7">
            <div className="joblists mb-3">
              <label>
                <h2>Job Listing</h2>
              </label>
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
            <form>
              {profile.companyname ? (
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-3 col-form-label"
                  >
                    <h5>Company</h5>
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      readOnly
                      className="form-control"
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
                      className="col-sm-4 col-form-label"
                    >
                      <h5>Name</h5>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readOnly
                        className="form-control"
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
                  <div className="col-sm-9">
                    <input
                      type="text"
                      readOnly
                      className="form-control"
                      value={profile.lastname}
                    />
                  </div>
                </div>
              ) : null}
              {profile.middlename ? (
                <>
                  <div className="form-group row">
                    <label
                      htmlFor="staticEmail"
                      className="col-sm-3 col-form-label"
                    >
                      <h5>Middle Name</h5>
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        readOnly
                        className="form-control"
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={profile.companysize}
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
                <div className="col-sm-9">
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={profile.companysize}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
