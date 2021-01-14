import React from "react";
import "./App.css";
import Item from "./components/Item/Item";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Test technique Maiia</h1>
      </header>
      <section className="homePage">{/* <ListItems /> */}</section>
      <Item title="test" srcImg="test" />
    </div>
  );
}

export default App;
