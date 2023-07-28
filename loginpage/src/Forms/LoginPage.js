import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const emailChangeHandeler = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const conformPasswordChangeHandler = (event) => {
    setConformPassword(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <forms onSubmit={submitHandler}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={emailChangeHandeler} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={passwordChangeHandler}
        />
      </div>
      <div>
        <label>Conform Password</label>
        <input
          type="password"
          value={conformPassword}
          onChange={conformPasswordChangeHandler}
        />
      </div>
      <div>
        <button >Submit</button>
      </div>
    </forms>
  );
};
export default LoginPage;
