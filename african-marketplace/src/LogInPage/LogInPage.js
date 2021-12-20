import React from "react";

const LogInPage = () => {
  const changeHandler = () => {};

  const submitHandler = () => {};
  return (
    <div>
      <h1>ADD FORM HERE</h1>
      <form id="login-form" onSubmit={submitHandler}>
        <label>
          <input
            name="username"
            type="text"
            onChange={changeHandler}
            placeholder="username"
          />
        </label>
        <label>
          <input
            name="password"
            type="text"
            onChange={changeHandler}
            placeholder="password"
          />
        </label>
        <label>
          <button type="submit">Log In</button>
        </label>
      </form>
    </div>
  );
};

export default LogInPage;
