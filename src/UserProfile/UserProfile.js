import React, { useState, useEffect } from "react";
import "./Profile.css";

export default function UserProfile() {
  const [error, setError] = useState(false);
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
              />
            </div>
          </div>
          <div className="col-lg dataCol">
            <h3>Your info</h3>
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
      </div>
    </div>
  );
}
