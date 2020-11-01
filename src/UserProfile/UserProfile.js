import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

export default function UserProfile({ dataId }) {
  const [profile, setProfile] = useState();
  const history = useHistory();

  useEffect(() => {
    const id = dataId;
    axios.get(`http://localhost:5000/user/${id}`).then((res) => {
      setProfile(res.data);
    });
  }, [dataId]);
  console.log(profile);

  const timeout = () => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  return (
    <>
      <div>
        <div className="container" id="profileContainer">
          <div className="border-bottom mb-5">
            <h2 className="mb-3">
              Hi! {profile ? `${profile.firstname}` : null}{" "}
            </h2>
          </div>
          <div className="row">
            <div className="col-lg visualCol">
              {profile ? (
                <>
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
                      {profile.skills ? (
                        profile.skills.map((element, index) => (
                          <h4 key={index}>
                            <span className="badge badge-secondary personalBadge">
                              {element}
                            </span>
                          </h4>
                        ))
                      ) : (
                        <input placeholder="please select few skills" />
                      )}
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
              <div className="container">
                <Link to={"/jobs"}>
                  <Button>Check out jobs!</Button>
                </Link>
              </div>
            </div>
            <div className="col">
              {profile ? (
                <>
                  <form>
                    {/* 
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
      
                  
                    
                    */}
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>
                          <h5>First Name</h5>
                        </label>
                        <input
                          type="text"
                          readOnly
                          className="form-control"
                          id="staticEmail"
                          value={profile.firstname}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>
                          <h5>Last Name</h5>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={profile.lastname}
                        />
                      </div>
                      {profile.middlename ? (
                        <>
                          <div className="form-group col-md-6">
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
                        </>
                      ) : null}
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-8">
                        <label>
                          <h5>Email</h5>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          value={profile.email}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>
                          <h5>Mobile</h5>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          value={profile.mobile}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        <h5>Address</h5>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        value={profile.address}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-5">
                        <label>
                          <h5>City</h5>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                          value={profile.city}
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>
                          <h5>Country</h5>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={profile.country}
                        />
                      </div>
                      <div className="form-group col-md-3">
                        <label>
                          <h5>Zip</h5>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={profile.zip}
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <label>
                          <h5>Presentation</h5>
                        </label>
                        <textarea className="form-control" rows="8"></textarea>
                      </div>
                    </div>
                  </form>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
