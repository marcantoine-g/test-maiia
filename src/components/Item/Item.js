import React from "react";
import "./Item.css";

function Item(props) {
  const { srcImg, title, id } = props;

  return (
    <div className="item" key={id}>
      <img className="itemImage" src={srcImg} alt={title} />
      <p className="itemTitle">{title}</p>
    </div>
  );
}

export default Item;
