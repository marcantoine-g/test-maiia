import React from "react";
import "./App.css";
import ListItems from "./components/ListItems/ListItems";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Test technique Maiia</h1>
      </header>
      <section className="homePage">
        <ListItems />
      </section>
    </div>
  );
}

export default App;
