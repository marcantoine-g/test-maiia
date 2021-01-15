import React from "react";
import "./App.css";
import ListItems from "./components/ListItems/ListItems";
import { useSelector, useDispatch } from "react-redux";
import { ListItemsSlice } from "./features/ListItemsSlice";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.ListItems.currentPage);

  const changePage = (buttonChangeSide) => {
    if (buttonChangeSide === "prev") {
      if (currentPage !== 1) {
        dispatch(ListItemsSlice.actions.decrementPage());
      }
    }
    if (buttonChangeSide === "next") {
      dispatch(ListItemsSlice.actions.incrementPage());
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
      <section className="cart">
        <Cart />
      </section>
    </div>
  );
}

export default App;
