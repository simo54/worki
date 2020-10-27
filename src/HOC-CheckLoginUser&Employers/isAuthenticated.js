import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function IsAuthenticated(wrappedComponent, typeOfUser = "user") {
  const [error, setError] = useState(false);
  useEffect(() => {
    const route =
      typeOfUser === "user"
        ? "http://localhost:5000/user/userIsAuthenticated"
        : "http://localhost:5000/employer/employerIsAuthenticated";
    axios.get(route, { withCredentials: true }).catch((e) => {
      console.error("Error in the catch line 23 IsAuthenticated: " + e);
      setError(true);
    });
  }, []);
  return <div>{error ? <Redirect to="/" /> : <wrappedComponent />}</div>;
}
