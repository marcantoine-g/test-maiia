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
          onClick={() => dispatch(cartSlice.actions.removeProduct({ id }))}
        >
          remove
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch(cartSlice.actions.addProduct({ id, title, srcImg }))
          }
        >
          add
        </button>
      )}
    </div>
  );
}

export default Item;
