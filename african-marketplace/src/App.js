import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";
import Content from "./Content/Content";
import LogInPage from "./LogInPage/LogInPage";
import AddItem from "./AddItem/AddItem";
import SignUpPage from "./SignUpPage/SignUpPage";
import initialData from "./data";
import PrivateRoute from "./utils/PrivateRoute";



function App() {
  console.log("render App");
  // const [itemData, setItemData] = useState([]);

  // const getItem = () => {
  //   axios
  //     .get("ItemURL")
  //     .then((response) => {
  //       console.log(response);
  //       // setItemData(response.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  // useEffect(() => getItem(), []);

  

  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/login">
            <LogInPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <PrivateRoute exact path="/items"component={AddItem} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
