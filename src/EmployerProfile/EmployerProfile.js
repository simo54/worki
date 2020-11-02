import React, { useEffect, useState } from "react";
import PostAjob from "./FormJobPost";
import ListApplicants from "./ApplicationsList";
import axios from "axios";
import UpdateInfo from "./UpdateInfoEmployer";
// import ListApplications from "./ApplicationsList";

export default function RecruiterProfile({ dataId }) {
  const [profile, setProfile] = useState({});
  const [jobs, setJobs] = useState();

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

  return (
    <>
      <div>
        <div id="welcome" className="container">
          <div className="d-flex justify-content-between align-items-center border-bottom mb-5">
            <h2>
              Welcome{" "}
              {profile && profile.companyname
                ? `${profile.companyname}`
                : `${profile.firstname}`}
            </h2>
            <UpdateInfo data={dataId} />
          </div>
          <div className="row">
            {/* Left column for company logo picture and other info */}
            <div className="col-5">
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
            <div className="col-7">
              <div className="container-fluid text-center">
                <PostAjob data={dataId} />
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
                {profile ? (
                  <>
                    <form>
                      <div className="form-group col-md-4">
                        <label>
                          <h5>Company Name</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.companyname}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>
                          <h5>Name</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.firstname}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>
                          <h5>Last Name</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.lastname}
                        />
                      </div>
                      {profile.middlename ? (
                        <div className="form-group row">
                          <label>
                            <h5>Middle Name</h5>
                          </label>
                          <input
                            type="text"
                            readOnly
                            className="form-control"
                            value={profile.middlename}
                          />
                        </div>
                      ) : null}
                      <div className="form-row">
                        <div className="form-group row">
                          <label>
                            <h5>Email</h5>
                          </label>
                          <input
                            type="text"
                            readOnly
                            className="form-control"
                            value={profile.email}
                          />
                        </div>
                        <div className="form-group row">
                          <label>
                            <h5>Mobile</h5>
                          </label>
                          <input
                            type="text"
                            readOnly
                            className="form-control"
                            value={profile.mobile}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label>
                          <h5>Address</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.address}
                        />
                      </div>
                      <div className="form-group row">
                        <label>
                          <h5>City</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.city}
                        />
                      </div>

                      <div className="form-group row">
                        <label>
                          <h5>Zip</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.zip}
                        />
                      </div>
                      <div className="form-group row">
                        <label>
                          <h5>Country</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.country}
                        />
                      </div>
                      <div className="form-group row">
                        <label>
                          <h5>Company Size</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          value={profile.companysize}
                        />
                      </div>
                    </form>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
