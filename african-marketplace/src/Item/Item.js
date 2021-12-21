import React from "react";

const Item = (props) => {
  //   console.log(props);
  const { name, description, category, price, location_id } = props;
  //   console.log(props);

  return (
    <ul>
      <li>{name}</li>
      <li>{description}</li>
      <li>{category}</li>
      <li>{price}</li>
      <li>{location_id}</li>
    </ul>
  );
};
export default Item;
