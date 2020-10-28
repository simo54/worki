import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function IsAuthenticated(wrappedComponent, typeOfUser) {
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
        .then((res) => console.log(res))
        // .then((res) => console.log("ID! : " + res.data[1]))
        .catch((e) => {
          setError(true);
        });
    }
  }, [typeOfUser]);
  return <div>{error ? <Redirect to="/" /> : wrappedComponent}</div>;
}
