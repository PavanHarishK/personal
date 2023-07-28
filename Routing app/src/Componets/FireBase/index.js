//Axios post() method is used in this page

import React, { useState } from "react";
import axios from "axios";

function FireBase() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { fullname, email, password, confirmPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://formvalidations-1-default-rtdb.firebaseio.com/School.json",
        data
      )
      .then(() => alert("Submitted"));
  };
  return (
    <div>
      <center>
        <h3>Fire Base URL</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="fullname"
            onChange={changeHandler}
            value={fullname}
            placeholder="UserName"
          />
          <br />
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={changeHandler}
            value={email}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={changeHandler}
            value={password}
          />
          <br />
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={changeHandler}
            value={confirmPassword}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}
export default FireBase;
