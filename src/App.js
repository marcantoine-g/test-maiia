import React from "react";
import "./App.css";
import ListItems from "./components/ListItems/ListItems";
import Cart from "./components/Cart/Cart";
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
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
      <section className="cart">
        <Cart />
      </section>
    </div>
  );
}

export default App;
