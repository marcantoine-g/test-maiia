import React, { useState, useEffect } from "react";
import "./ListItems.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllItems,
  fetchItems,
} from "../../features/ListItemsSlice/ListItemsSlice";
import Item from "../Item/Item";

function ListItems(props) {
  const { currentPage } = props;
  const dispatch = useDispatch();
  const photos = useSelector(getAllItems);
  const status = useSelector((state) => state.ListItems.status);
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
      <h3>Liste des photos</h3>
      {ListItemsGroup.length !== 0 ? (
        ListItemsGroup.map((item) => {
          return <div key={item.props.id}>{item}</div>;
        })
      ) : (
        <p>Le tableau est vide</p>
      )}
    </div>
  );
}

export default ListItems;
