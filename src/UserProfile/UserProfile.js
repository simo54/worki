import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UpdateInfo from "./UpdatePersonalInfo";
import axios from "axios";
import apiUrl from "../config";
import "./Profile.css";

export default function UserProfile({ dataId }) {
  const [profile, setProfile] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const [namePicture, setNamePicture] = useState();
  const [filePicture, setFilePicture] = useState();

  useEffect(() => {
    const id = dataId;
    axios.get(`${apiUrl}user/${id}`).then((res) => {
      setProfile(res.data);
    });
    axios.get(`${apiUrl}user/${id}/getprofilepicture`).then((res) => {
      const url = res.config.url;
      setProfilePicture(url);
    });
  }, [dataId]);

  // Uploading Resume on DB, this will be attached automatically once applied for a position
  const send = (event) => {
    const id = dataId;
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    axios
      .put(`${apiUrl}user/${id}/resume`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  // Upload new photo
  const sendProfilePicture = (event) => {
    const id = dataId;
    const dataPicture = new FormData();
    dataPicture.append("name", namePicture);
    dataPicture.append("file", filePicture);
    axios
      .put(`${apiUrl}user/${id}/profilepicture`, dataPicture)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  return (
    <div>
      <div className="container" id="profileContainer">
        <div className="d-flex justify-content-between align-items-center border-bottom mb-5">
          <h2>Hi {profile ? `${profile.firstname}` : null}! </h2>
          <UpdateInfo data={dataId} />
        </div>
        <div className="row">
          <div className="col-5">
            {profile ? (
              <>
                {profile.profilepicture !== null ? (
                  <div id="containerProfilePicture">
                    <img
                      src={profilePicture}
                      alt="profilepicture"
                      className="img-thumbnail"
                    />
                  </div>
                ) : (
                  <div className="container p-0">
                    <form encType="multipart/form-data">
                      <h3>Do you want to upload a profile picture?</h3>
                      <div className="d-flex justify-content-around">
                        <input
                          id="check1"
                          onChange={(e) => {
                            const { value } = e.target;
                            setNamePicture(value);
                          }}
                          className="form-control-file w-25"
                        />
                        <input
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            setFilePicture(file);
                          }}
                          className="form-control-file"
                        />
                        <div className="mt-3 mb-5">
                          <Button onClick={sendProfilePicture}>Upload</Button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                {profile.resume === null ? (
                  <div className="container p-0 mt-5">
                    <form encType="multipart/form-data">
                      <h3>
                        Please upload your resume before applying for any
                        position!
                      </h3>
                      <div className="d-flex justify-content-around ">
                        <input
                          id="check"
                          onChange={(e) => {
                            const { value } = e.target;
                            setName(value);
                          }}
                          className="form-control-file w-25 hide"
                        />
                        <input
                          type="file"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            setFile(file);
                          }}
                          className="form-control-file"
                        />
                      </div>
                      {file ? (
                        <div className="mt-3 mb-5">
                          <Button onClick={send}>Upload</Button>
                        </div>
                      ) : null}
                    </form>
                  </div>
                ) : (
                  <h3 className="text-center mt-5">✔ Resume Uploaded!</h3>
                )}
              </>
            ) : null}
            <div className="container text-center mt-5">
              <Link to="/jobs">
                <Button>Check out available jobs!</Button>
              </Link>
            </div>
          </div>
          {/* Right Col Personal Info */}
          <div className="col-7">
            {profile ? (
              <>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label className="col-sm-3 col-form-label">
                        <h5>First Name</h5>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        id="staticEmail"
                        value={profile.firstname || ""}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="col-sm-3 col-form-label">
                        <h5>Last Name</h5>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={profile.lastname || ""}
                      />
                    </div>
                    {profile.middlename ? (
                      <>
                        <div className="form-group col-md-6">
                          <label className="col-sm-3 col-form-label">
                            <h5>Middle Name</h5>
                          </label>
                          <input
                            type="text"
                            readOnly
                            className="form-control"
                            value={profile.middlename || ""}
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      <label className="col-sm-3 col-form-label">
                        <h5>Email</h5>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        id="inputAddress"
                        value={profile.email || ""}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label className="col-sm-3 col-form-label">
                        <h5>Mobile</h5>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        id="inputAddress2"
                        value={profile.mobile || ""}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-3 col-form-label">
                      <h5>Address</h5>
                    </label>
                    <input
                      type="text"
                      readOnly
                      className="form-control"
                      id="inputAddress"
                      value={
                        profile.address ? profile.address : undefined || ""
                      }
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-5">
                      <label className="col-sm-3 col-form-label">
                        <h5>City</h5>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        id="inputCity"
                        value={profile.city || ""}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label className="col-sm-3 col-form-label">
                        <h5>Country</h5>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={profile.country || ""}
                      />
                    </div>
                    <div className="form-group col-md-3">
                      <label className="col-sm-3 col-form-label">
                        <h5>Zip</h5>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={profile.zip || ""}
                      />
                    </div>
                    {/* <div className="form-group col-md-12">
                      <label>
                        <h5>Presentation</h5>
                      </label>
                      <textarea
                        className="form-control"
                        readOnly
                        rows="8"
                      ></textarea>
                    </div> */}
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
