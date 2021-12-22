import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

import "./Content.css";
import Item from "../Item/Item";

const Content = (props) => {
  // const { items } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/listings")
      .then((res) => {
        console.log(res);
      });
    setItems(props.items);
  }, []);

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
};

export default Content;
