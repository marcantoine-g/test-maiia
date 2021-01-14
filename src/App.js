import React, { useState } from "react";
import "./App.css";
import ListItems from "./components/ListItems/ListItems";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (buttonChangeSide) => {
    if (buttonChangeSide === "prev") {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    }
    if (buttonChangeSide === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Test technique Maiia</h1>
      </header>
      <section className="homePage">
        <ListItems currentPage={currentPage} />
        <div className="paginationMenu">
          <button
            className="paginationButton leftButton"
            onClick={() => changePage("prev")}
          >
            <span>PREV</span>
          </button>
          <input
            className="inputCurrentPage"
            type="number"
            disabled="disabled"
            value={currentPage}
          />
          <button
            className="paginationButton rightButton"
            onClick={() => changePage("next")}
          >
            <span>NEXT</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
