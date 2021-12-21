import React from "react";
import { useEffect, useState } from "react";
import "./Content.css";
import Item from "../Item/Item";

const Content = (props) => {
  // const { items } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  }, []);

  return (
    <div className="wrapper">
      {items.map((item) => {
        return (
          <div key={item.listing_id} className="box">
            <Item
              listing_id={item.listing_id}
              name={item.name}
              item={item}
              location_id={item.location_id}
              price={item.price}
              description={item.description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Content;
