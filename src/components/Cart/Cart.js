import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { getNbProduct, getAllProduct } from "../../features/CartSlice";
import Item from "../Item/Item";

function Cart() {
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
    <div className="cartPanel">
      <h3>Panier</h3>
      {listProduct}
      <p>
        Nombre de produit : <span className="nbProduit">{nbProduit}</span>
      </p>
    </div>
  );
}

export default Cart;
