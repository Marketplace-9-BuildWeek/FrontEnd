import React, { useState } from "react";
import axios from 'axios';

const LogInPage = () => {
  //Initial Login Values
  const [ credentials, setCredentials ] = useState({
    username: '',
    password: ''
  });

  const changeHandler = (e) => {
    setCredentials({
      [e.target.name]: e.target.value
    });
  };

  
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('', credentials)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })    
  };

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
