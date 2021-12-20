import "./Header.css";
import React from "react";
import { Route, Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <h1>AFRICAN MARKETPLACE </h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/login" exact={true}>
          LogIn
        </NavLink>
        <NavLink
          activeClassName="active"
          className=" navhide"
          to="/items"
          exact={true}
        >
          Add Item
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
