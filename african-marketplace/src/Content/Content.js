import React from "react";
import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import "./Content.css";
import Item from "../Item/Item";

const Content = () => {
  // const { items } = props;
  const [items, setItems] = useState([]);
  

  //I removed this token variable below because it didn't update when the token was removed, which caused the log out button to not function.
  const [returnToken] = useState(localStorage.getItem("token"));
  // const returnToken = localStorage.getItem("token");

  useEffect(() => {
    if (localStorage.getItem('token')) {
      axiosWithAuth()
      .get("/listings")
      .then((res) => {
        console.log(res);
        setItems(res.data);
      });
    }
  }, []);



  if (localStorage.getItem('token')) {
    return (
      <div className="wrapper">
        {items.map((item) => {
          return (
            <div key={item.listing_id} className="box">
              <Item
                {...item}

                // listing_id={item.listing_id}
                // name={item.name}
                // category={item.category}
                // location_id={item.location_id}
                // price={item.price}
                // description={item.description}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h2>Please Log In!</h2>;
  }
};


export default Content;
