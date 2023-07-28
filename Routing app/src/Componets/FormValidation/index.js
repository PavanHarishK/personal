// fire base URL   https://console.firebase.google.com/project/formvalidations-1/database/formvalidations-1-default-rtdb/data/~2F

import React, { useState } from "react";

function FormData() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    console.log(data);
    e.preventDefault();
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="User Name"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <br />

          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
}
export default FormData;
