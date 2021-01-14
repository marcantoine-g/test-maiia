import React from "react";
import "./Item.css";

function Item(props) {
  const { srcImg, title } = props;

  return (
    <div className="item">
      <img className="itemImage" src={srcImg} alt={title} />
      <p className="itemTitle">{title}</p>
    </div>
  );
}

export default Item;
