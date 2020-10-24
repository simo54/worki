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
          <div className="col-lg dataCol">
            <h3>Your info</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
