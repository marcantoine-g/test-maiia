import React from "react";
import "./Item.css";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../features/CartSlice";

function Item(props) {
  const dispatch = useDispatch();
  const { srcImg, title, id } = props;

  const addInCart = (e) => {
    console.log(srcImg, title, id);
    dispatch(cartSlice.actions.addProduct({ id, title, srcImg }));
  };

  return (
    <div className="item">
      <img className="itemImage" src={srcImg} alt={title} />
      <p className="itemTitle">{title}</p>
      <button onClick={() => addInCart()}>add</button>
    </div>
  );
}

export default Item;
