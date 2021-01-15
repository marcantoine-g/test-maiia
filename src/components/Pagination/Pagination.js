import React from "react";
import "./Pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { ListItemsSlice } from "../../features/ListItemsSlice";

function Pagination() {
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
  );
}

export default Pagination;
