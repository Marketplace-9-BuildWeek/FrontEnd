import React, { useState } from "react";
import axios from "axios";
import "./LogInPage.css";
import { useHistory } from "react-router-dom";

const LogInPage = () => {
  //Initial Login Values
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const { push } = useHistory();

  const changeHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://marketplace-2.herokuapp.com/auth/login", credentials)
      .then((res) => {
        console.log(res);
        const { token, message } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", credentials.username);
        setMessage(`${message}!`);
        setTimeout(() => {
          push("/");
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
      });
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
        <h1 className="login">
          ✨&nbsp;&nbsp;&nbsp;LOG IN HERE&nbsp;&nbsp;&nbsp;✨
        </h1>
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
              Log In!
            </button>
          </label>
        </form>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default LogInPage;
