<<<<<<< HEAD
import React, { useState } from "react";
import axios from 'axios';
=======
import React from "react";
import "./LogInPage.css";
>>>>>>> 31f0044d86ef2e17818b0c7774bba45dd9ca49c1

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
    <div
      className="form"
      style={{
        height: `880px`,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: 20,
          paddingLeft: 40,
          paddingRight: 40,
          paddingTop: 0,
          height: 400,
          width: 640,
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexDirection: "column",
        }}
      >
        <h1>✨&nbsp;&nbsp;&nbsp;LOG IN HERE&nbsp;&nbsp;&nbsp;✨</h1>
        <form id="login-form" onSubmit={submitHandler}>
          <div style={{ display: "flex" }}>
            <label>
              <input
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  fontSize: "18px",
                  paddingLeft: "20px",
                }}
                name="username"
                type="text"
                onChange={changeHandler}
                placeholder="Username"
              />
            </label>
            <label style={{ marginLeft: 5, flex: 1 }}>
              <input
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  fontSize: "18px",
                  paddingLeft: "20px",
                }}
                name="password"
                type="password"
                onChange={changeHandler}
                placeholder="Password"
              />
            </label>
          </div>
          <label>
            <button
              style={{
                cursor: "pointer",
                marginTop: 10,
                fontSize: "18px",
                backgroundColor: "#69db7c",
                color: "white",
              }}
              type="submit"
            >
              Log In
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
