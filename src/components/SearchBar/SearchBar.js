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
      <div className="titles">
        <h3>Vous cherchez un produit ?</h3>
        <h4>Tapez son titre</h4>
      </div>

      <div className="inputSection">
        <input
          id="inputSearch"
          type="text"
          onChange={(e) => changeInputValue(e)}
          placeholder="Titre du produit"
        />
        <button
          type="submit"
          value={inputValue}
          onClick={(e) => searchProduct(e)}
        ></button>
      </div>
    </div>
  );
}

export default SearchBar;
