import React from "react";

const Item = (props) => {
  //   console.log(props);
  const { name, description, category, price, location_id } = props;
  //   console.log(props);

  return (
    <div>
      <h3 style={{ fontSize: "22px", marginBottom: "10px", color: "white" }}>
        {name}
      </h3>
      <div>{description}</div>
      <div>{category}</div>
      <div>
        Price:
        {price}
      </div>
      <div>{location_id}</div>
    </div>
  );
};
export default Item;
