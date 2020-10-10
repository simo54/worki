import React, { useState } from "react";
import axios from "axios";
import { Router, Route, Link, Switch } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const data = { username, password };
    axios.post("/authentication", data).then((response) => {});
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        ></input>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <input type="submit"></input>
      </form>
      <button
        onClick={() => {
          axios.get("/posts").then((response) => console.log(response));
        }}
      >
        click
      </button>
    </div>
  );
}
