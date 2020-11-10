// This is an HOC that is used to check if path user/profile, employer/profile and jobs have been accessed with an authentication token
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import apiUrl from "../config";

export default function IsAuthenticated(props) {
  // let { WrappedComponent, typeOfUser, location } = props;
  let { WrappedComponent, typeOfUser } = props;
  // let { WrappedComponent, typeOfUser, location } = props;
  const [error, setError] = useState(false);
  const [id, setId] = useState(); // This is the id taken from the axios fetch, it will assign the id of the user or the employer

  useEffect(() => {
    // Commenting out for debugging
    // if (location && location.state && location.state.typeOfUser)
    //   typeOfUser = location.state.typeOfUser;
    if (typeOfUser) {
      console.log(typeOfUser);
      const route =
        typeOfUser === "user"
          ? `${apiUrl}user/userIsAuthenticated`
          : `${apiUrl}employer/employerIsAuthenticated`;
      console.log("Line 23: " + route);
      axios
        .get(route, { withCredentials: true })
        .then((res) => {
          setId(res.data.user_id); // Getting the ID from authenticated user/employer
        })
        .catch((e) => {
          console.log("line 30" + e);
          setError(true);
        });
    }
  }, [typeOfUser]);

  return (
    <div>
      {/* If user or employer are not signed in, redirect to signup page */}
      {error ? (
        <Redirect to="/usersignup" />
      ) : id ? (
        <WrappedComponent dataId={id} {...props} />
      ) : null}
    </div>
  );
}
