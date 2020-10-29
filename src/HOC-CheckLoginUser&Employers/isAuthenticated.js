import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function IsAuthenticated(props) {
  const { WrappedComponent, typeOfUser } = props;
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (typeOfUser) {
      const route =
        typeOfUser === "user"
          ? "http://localhost:5000/user/userIsAuthenticated"
          : "http://localhost:5000/employer/employerIsAuthenticated";
      axios
        .get(route, { withCredentials: true })
        .then((res) => {
          setUserId(res.data.user_id); // Sending the ID from authenticated user
        })
        .catch((e) => {
          setError(true);
        });
    }
  }, [typeOfUser]);

  return (
    <div>
      {error ? (
        <Redirect to="/" />
      ) : userId ? (
        <WrappedComponent dataId={userId} {...props} />
      ) : null}
    </div>
  );
}
