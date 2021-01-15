import React, { useEffect } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  cartSlice,
  getNbProduct,
  getAllProduct,
} from "../../features/CartSlice";
import Item from "../Item/Item";

function Cart(props) {
  const dispatch = useDispatch();
  const nbProduit = useSelector(getNbProduct);
  const allProduct = useSelector(getAllProduct);
  let listProduct = [];

  allProduct.forEach((product) => {
    listProduct.push(
      <Item
        key={product.id}
        id={product.id}
        title={product.title}
        srcImg={product.srcImg}
        inCart={true}
      />
    );
  });
  return (
    <div className="cart">
      <h3>Panier</h3>
      {listProduct}
      <p>Nombre de produit : {nbProduit}</p>
    </div>
  );
}

export default Cart;
