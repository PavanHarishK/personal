import React from "react";

const LoginData = () => {
  const clickSubmitHandler = () => {
    console.log("Submited");
  };
  return (
    <form>
      <div>
        <label>Email</label>
        <br />
        <input type="email" id="email" placeholder="email" />
      </div>
      <div>
        <label>Password</label>
        <br />
        <input type="password" id="password" placeholder="password" />
      </div>
      <div>
        <button onClick={clickSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};
export default LoginData;
