import React from "react";
import "./Item.css";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../features/CartSlice";

function Item(props) {
  const dispatch = useDispatch();
  const { srcImg, title, id, inCart } = props;

  return (
    <div className="item">
      <img className="itemImage" src={srcImg} alt={title} />
      <p className="itemTitle">{title}</p>
      {inCart ? (
        <button
          className="removeButton"
          onClick={() => {
            dispatch(cartSlice.actions.removeProduct({ id }));
            console.log("ici");
          }}
        ></button>
      ) : (
        <button
          className="addButton"
          onClick={() =>
            dispatch(cartSlice.actions.addProduct({ id, title, srcImg }))
          }
        ></button>
      )}
      <div className="bar"></div>
    </div>
  );
}

export default Item;
