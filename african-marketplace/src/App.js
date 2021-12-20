import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import LogInPage from "./LogInPage/LogInPage";
import AddItem from "./AddItem/AddItem";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Content />
          <Footer />
        </Route>
        <Route exact path="/login">
          <Header />
          <LogInPage />
          <Footer />
        </Route>
        <Route exact path="/items">
          <Header />
          <AddItem />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
