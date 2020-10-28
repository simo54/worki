import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

export default function UserProfile({ dataId }) {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState({});
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const id = dataId;
    axios.get(`http://localhost:5000/user/${id}`).then((res) => {
      setProfile(res.data);
    });
  }, []);

  return (
    <div>
      <div className="container" id="profileContainer">
        <div className="row">
          <div className="col-lg visualCol">
            {profile ? (
              <>
                <h2>Hi! {profile.firstname} </h2>
                <div id="containerProfilePicture">
                  <img
                    src="https://www.hdnicewallpapers.com/Walls/Big/Monkey/Monkey_on_Tree_in_Jungle.jpg"
                    alt=""
                    className="img-thumbnail"
                  />
                </div>
                <div className="container">
                  <h3>Skills</h3>
                  <div className="container d-flex justify-content-between flex-wrap">
                    {/* mapping of all new skills */}
                    <h4>
                      <span className="badge badge-secondary personalBadge">
                        Fixing Roof
                      </span>
                    </h4>{" "}
                    <h4>
                      <span className="badge badge-secondary">
                        Swallow spaghetti
                      </span>
                    </h4>{" "}
                    <h4>
                      <span className="badge badge-secondary">
                        Buing dinner for me
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="container">
                  <h3>Certifications</h3>
                </div>
                <div className="container">
                  <h3>Resume</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlFile1">
                        Click to Upload
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </form>
                </div>
              </>
            ) : null}
          </div>
          <div className="col">
            {profile ? (
              <>
                <form>
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
                        id="staticEmail"
                        value={profile.firstname}
                      />
                    </div>
                  </div>
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
                        id="staticEmail"
                        value={profile.lastname}
                      />
                    </div>
                  </div>
                  {profile.middlename ? (
                    <>
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
                        id="staticEmail"
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
                        id="staticEmail"
                        value={profile.mobile}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="example-date-input"
                      className="col-3 col-form-label"
                    >
                      <h5>Birthday</h5>
                    </label>
                    <div className="col-9 w-50 pl-0">
                      <input
                        className="form-control form-control-md w-50"
                        readOnly
                        type="date"
                        id="example-date-input"
                        value={profile.age}
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
                        id="staticEmail"
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
                        id="staticEmail"
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
                        id="staticEmail"
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
                        id="staticEmail"
                        value={profile.country}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleTextarea"
                      className="col-3 col-form-label pl-0"
                    >
                      <h5>Presentation</h5>
                    </label>
                    <textarea
                      className="form-control w-75"
                      id="exampleTextarea"
                      rows="8"
                    ></textarea>
                  </div>
                </form>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
