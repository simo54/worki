import React from "react";
import "./Profile.css";

function UserProfile() {
  return (
    <div>
      <div className="container" id="profileContainer">
        <div className="row">
          <div className="col-lg visualCol">
            <h2>Hi! xxx </h2>
            <div id="containerProfilePicture">
              <img
                src="https://www.hdnicewallpapers.com/Walls/Big/Monkey/Monkey_on_Tree_in_Jungle.jpg"
                alt=""
                className="img-thumbnail"
              />
            </div>
            <div className="container">
              <h3>Skills</h3>
            </div>
            <div className="container">
              <h3>Certifications</h3>
            </div>
            <div className="container">
              <h3>Resume</h3>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Click to Upload</label>
                  <input
                    type="file"
                    class="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col">
            <form>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-3 col-form-label">
                  <h5>Name</h5>
                </label>
                <div className="col-sm-9 w-50 pl-0">
                  <input
                    type="text"
                    readonly
                    className="form-control form-control-md w-50"
                    id="staticEmail"
                    value=""
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-3 col-form-label">
                  <h5>Last Name</h5>
                </label>
                <div className="col-sm-9 w-50 pl-0">
                  <input
                    type="text"
                    readonly
                    className="form-control form-control-md w-50"
                    id="staticEmail"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-3 col-form-label">
                  <h5>Email</h5>
                </label>
                <div className="col-sm-9 w-50 pl-0">
                  <input
                    type="text"
                    readonly
                    className="form-control form-control-md w-50"
                    id="staticEmail"
                    value=""
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-3 col-form-label">
                  <h5>Mobile</h5>
                </label>
                <div className="col-sm-9 w-50 pl-0">
                  <input
                    type="text"
                    readonly
                    className="form-control form-control-md w-50"
                    id="staticEmail"
                    value=""
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="example-date-input"
                  className="col-3 col-form-label"
                >
                  <h5>Birthday</h5>
                </label>
                <div className="col-9 w-50 pl-0">
                  <input
                    className="form-control form-control-md w-50"
                    readOnly
                    type="date"
                    value=""
                    id="example-date-input"
                  />
                </div>
              </div>
              <div class="form-group">
                <label
                  for="exampleTextarea"
                  className="col-3 col-form-label pl-0"
                >
                  <h5>About Me</h5>
                </label>
                <textarea
                  className="form-control w-75"
                  id="exampleTextarea"
                  rows="8"
                  value=""
                ></textarea>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
