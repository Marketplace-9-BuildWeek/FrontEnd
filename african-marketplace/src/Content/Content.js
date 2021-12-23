import React from "react";
import { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import "./Content.css";
import Item from "../Item/Item";

const Content = () => {
  // const { items } = props;
  const [items, setItems] = useState([]);
  const [returnToken] = useState(localStorage.getItem("token"));
  // const returnToken = localStorage.getItem("token");

  useEffect(() => {
    axiosWithAuth()
      .get("/listings")
      .then((res) => {
        console.log(res);
        setItems(res.data);
      });
  }, [returnToken]);

  if (returnToken) {
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
    return "Please log in ";
  }
};

export default Content;
