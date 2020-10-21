import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PostAjob from "./FormJobPost";

export default function RecruiterProfile() {
  const [error, setError] = useState(false);
  console.log(error);

  useEffect(() => {
    axios
      .get("/employer/profile", { validateStatus: () => true })
      .then((response) => {
        console.log(response.status);
        if (response.status === 401) {
          // redirect to login
          setError(true);
          return;
        }
        if (response.status === 200) {
          setError(false);
          return;
        }
      });
  }, []);

  return (
    <div>
      {error ? <Redirect to="/" /> : null}
      <PostAjob />
    </div>
  );
}
