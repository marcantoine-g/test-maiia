import React, { useState } from "react";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { fetchItemByTitle } from "../../features/ListItemsSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const searchProduct = (e) => {
    dispatch(fetchItemByTitle(inputValue));
  };

  return (
    <div className="searchBar">
      <h3>Vous cherchez un produit ? Tapez son titre</h3>
      <input
        id="inputSearch"
        type="text"
        placeholder="Titre du produit"
        onChange={(e) => changeInputValue(e)}
      />
      <button
        type="submit"
        value={inputValue}
        onClick={(e) => searchProduct(e)}
      >
        OK
      </button>
    </div>
  );
}

export default SearchBar;
