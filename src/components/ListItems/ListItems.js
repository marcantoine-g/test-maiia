import React, { useState, useEffect } from "react";
import "./ListItems.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllItems,
  fetchItems,
  getCurrentPage,
} from "../../features/ListItemsSlice";
import Item from "../Item/Item";

function ListItems(props) {
  const dispatch = useDispatch();
  const photos = useSelector(getAllItems);
  const status = useSelector((state) => state.ListItems.status);
  const currentPage = useSelector(getCurrentPage);
  const [ListItemsGroup, setListItemsGroup] = useState([]);

  useEffect(() => {
    dispatch(fetchItems(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (status === "fulfilled") {
      let tmpArray = [];
      photos.forEach((photo) => {
        tmpArray.push(
          <Item id={photo.id} srcImg={photo.url} title={photo.title} />
        );
      });
      setListItemsGroup(tmpArray);
    }
  }, [status, photos]);

  return (
    <div className="listItems">
      <h3>Liste des produits</h3>
      <div className="allItems">
        {ListItemsGroup.length !== 0 ? (
          ListItemsGroup.map((item) => {
            return <div key={item.props.id}>{item}</div>;
          })
        ) : (
          <p>Le tableau est vide</p>
        )}
      </div>
    </div>
  );
}

export default ListItems;
