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

const initialData = [
  {
    listing_id: 1,
    name: "eggs",
    category: "animal products",
    description: "Buy my product",
    price: 10,
    location_id: 1,
  },
  {
    listing_id: 2,
    name: "corn",
    category: "vegetable",
    description: "Buy my product",
    price: 10,
    location_id: 2,
  },
  {
    listing_id: 3,
    name: "mangos",
    category: "fruit",
    description: "Buy my product",
    price: 10,
    location_id: 3,
  },
  {
    listing_id: 4,
    name: "beef",
    category: "animal products",
    description: "Buy my product",
    price: 10,
    location_id: 4,
  },
  {
    listing_id: 5,
    name: "peas",
    category: "vegetables",
    description: "Buy my product",
    price: 10,
    location_id: 5,
  },
  {
    listing_id: 6,
    name: "hardwood",
    category: "materials",
    description: "Buy my product",
    price: 10,
    location_id: 6,
  },
  {
    listing_id: 7,
    name: "autograph",
    category: "miscellaneous",
    description: "Buy my product",
    price: 10,
    location_id: 6,
  },
];
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
          <Route exact path="/items">
            <AddItem />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
