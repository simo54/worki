import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import apiUrl from "../config";

export default function IsAuthenticated(props) {
  const { WrappedComponent, typeOfUser } = props;
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (typeOfUser) {
      const route =
        typeOfUser === "user"
          ? `${apiUrl}user/userIsAuthenticated`
          : `${apiUrl}employer/employerIsAuthenticated`;

      axios
        .get(route, { withCredentials: true })
        .then((res) => {
          setUserId(res.data.user_id); // Getting the ID from authenticated user
        })
        .catch((e) => {
          setError(true);
        });
    }
  }, [typeOfUser]);

  return (
    <div>
      {/* If user or employer are not signed in, redirect to signup page */}
      {error ? (
        <Redirect to="/usersignup" />
      ) : userId ? (
        <WrappedComponent dataId={userId} {...props} />
      ) : null}
    </div>
  );
}
