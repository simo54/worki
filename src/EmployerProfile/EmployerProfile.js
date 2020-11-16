// This component will be passed through the HOC isAuthenticated.js because we only want employers to be able to access their private area
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostAjob from "./FormJobPost";
import { Button } from "react-bootstrap";
import ListApplicants from "./ApplicationsList";
import UpdateInfo from "./UpdateEmployerInfo";
import apiUrl from "../config";
import { Link } from "react-router-dom";
import "./Style/EmployerProfile.css";

// As props, we are getting the id of the employer authenticated in order to get the info we want
export default function RecruiterProfile({ dataId }) {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState();
  const [nameLogo, setNameLogo] = useState();
  const [fileLogo, setFileLogo] = useState();
  const [logo, setLogo] = useState();

  // Fetching from multiple endpoints
  useEffect(() => {
    // Employer Id from props
    const id = dataId;
    // Getting employer data
    axios.get(`${apiUrl}employer/${id}`).then((res) => {
      setProfile(res.data);
    });
    // Getting the jobs posted by the employer
    axios.get(`${apiUrl}jobs/company/${id}`).then((res) => {
      setJobs(res.data);
    });
    // Getting the logo from database
    axios.get(`${apiUrl}employer/${id}/getlogo`).then((res) => {
      const url = res.config.url;
      setLogo(url);
    });
  }, [dataId, logo]);

  // Uploading logo
  const sendLogo = async (event) => {
    const id = dataId;
    const dataLogo = new FormData();
    dataLogo.append("name", nameLogo);
    dataLogo.append("file", fileLogo);
    await axios
      .put(`${apiUrl}employer/${id}/logo`, dataLogo)
      // If upload is successfully, alert the user and reload the page to see the image
      .then((res) => {
        alert("logo uploaded");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div id="welcome" className="container">
        <div className="d-flex justify-content-between align-items-center border-bottom mb-5">
          <h2>Welcome {profile ? `${profile.companyname}` : null}</h2>
          {/* Passing the employerId for update window */}
          <UpdateInfo data={dataId} />
        </div>
        <div className="row">
          {/* ======= Left column ======= */}
          <div className="col-4">
            {/* If profile logo exist, show it, otherwise we will ask if they want to upload it */}
            {profile.logo !== null ? (
              <div className="imgContainer">
                <img src={logo} alt="logo" className="img-thumbnail" />
              </div>
            ) : (
              <div className="container p-0">
                <form encType="multipart/form-data">
                  <h3>Do you want to upload a logo of your company?</h3>
                  <div className="d-flex justify-content-around">
                    {/* Hiding inputs for styling purpouse */}
                    <input
                      id="check1"
                      onChange={(e) => {
                        const { value } = e.target;
                        setNameLogo(value);
                      }}
                      className="form-control-file w-25"
                    />
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFileLogo(file);
                      }}
                      className="form-control-file"
                    />
                    <div className="mt-3 mb-5">
                      <Button onClick={sendLogo}>Upload</Button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            <div className="container text-center mt-3">
              <h3>About us</h3>
              <div className="text-justify mb-5">
                <p>{profile.aboutus}</p>
              </div>
              <PostAjob data={dataId} />
            </div>
          </div>
          {/* ======= Right column ======= */}
          <div className="col-8">
            <div className="joblists mb-3">
              <div className="d-flex justify-content-between">
                <label>
                  <h2>Job Listing</h2>
                </label>
                <Link
                  to={{
                    pathname: "/jobs",
                    state: { typeOfUser: "employer" },
                  }}
                >
                  <a className="btn btn-role">Global Jobs</a>
                </Link>
              </div>
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
            <form>
              {profile.companyname ? (
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label text-right">
                    <h5>Company</h5>
                  </label>
                  <div className="col-sm-9">
                    <input
                      readOnly
                      className="form-control"
                      value={profile.companyname || ""}
                    />
                  </div>
                </div>
              ) : null}
              {profile.name ? (
                <>
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-right">
                      <h5>Name</h5>
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly
                        className="form-control"
                        value={profile.firstname || ""}
                      />
                    </div>
                  </div>
                </>
              ) : null}
              {profile.lastname ? (
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label text-right">
                    <h5>Last Name</h5>
                  </label>
                  <div className="col-sm-9">
                    <input
                      readOnly
                      className="form-control"
                      value={profile.lastname || ""}
                    />
                  </div>
                </div>
              ) : null}
              {profile.middlename ? (
                <>
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label text-right">
                      <h5>Middle Name</h5>
                    </label>
                    <div className="col-sm-9">
                      <input
                        readOnly
                        className="form-control"
                        value={profile.middlename || ""}
                      />
                    </div>
                  </div>
                </>
              ) : null}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label text-right">
                  <h5>Email</h5>
                </label>
                <div className="col-sm-9">
                  <input
                    readOnly
                    className="form-control"
                    value={profile.email || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label text-right">
                  <h5>Mobile</h5>
                </label>
                <div className="col-sm-9">
                  <input
                    readOnly
                    className="form-control"
                    value={profile.mobile || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label text-right">
                  <h5>Address</h5>
                </label>
                <div className="col-sm-9">
                  <input
                    readOnly
                    className="form-control"
                    value={profile.address || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label text-right">
                  <h5>City</h5>
                </label>
                <div className="col-sm-9">
                  <input
                    readOnly
                    className="form-control"
                    value={profile.city || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label text-right">
                  <h5>Zip</h5>
                </label>
                <div className="col-sm-9">
                  <input
                    readOnly
                    className="form-control"
                    value={profile.zip || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label text-right">
                  <h5>Country</h5>
                </label>
                <div className="col-sm-9">
                  <input
                    readOnly
                    className="form-control"
                    value={profile.country || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label text-right">
                  <h5>Company Size</h5>
                </label>
                <div className="col-sm-9">
                  <input
                    readOnly
                    className="form-control"
                    value={profile.companysize || ""}
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
