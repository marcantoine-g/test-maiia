import React, { useState } from "react";
import "./App.css";
import ListItems from "./components/ListItems/ListItems";
import Cart from "./components/Cart/Cart";
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/SearchBar/SearchBar";
import { getNbProduct } from "./features/CartSlice";
import { useSelector } from "react-redux";

function App() {
  const [cart, setCart] = useState(false);
  const nbProduct = useSelector(getNbProduct);

  const showCart = () => {
    setCart(!cart);
  };

  return (
    <div className="App">
      <header>
        <h1>Test technique Maiia</h1>
      </header>
      <SearchBar />
      <section className="homePage">
        <ListItems />
        <Pagination />
      </section>
      <button
        className={
          cart ? "cartButton cartButtonBgOpen" : "cartButton cartButtonBgClose"
        }
        onClick={() => showCart()}
      />
      <div id="nbProductInCart" className={cart ? "disable" : ""}>
        {nbProduct}
      </div>
      <section className={cart ? "cart opaque" : "cart"}>
        {cart ? <Cart /> : <></>}
      </section>
    </div>
  );
}

export default App;
