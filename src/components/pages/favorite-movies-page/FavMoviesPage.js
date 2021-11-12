import React, { useState } from "react";
import classes from "../movies-page/moviesPage.module.css";
import {
  createPaginationState,
  PaginationContainer,
} from "../pagination/PaginationContainer";

export default function FavMoviesPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const newArr = createPaginationState(
    itemsPerPage,
    props.favMovies,
    currentPage
  );

  const removeHandler = (elem) => {
    const newArr = props.favMovies.filter(
      (item) => item["imdbID"] !== elem["imdbID"]
    );
    props.setFavMovies(newArr);
  };

  return (
    <>
      <div className={classes.moviesContainer}>
        {newArr.map((item) => (
          <div className={classes.movieBlock} key={item["imdbID"]}>
            <img src={item["Poster"]} alt="" />
            <div className={classes.overlayBlock}>
              <h2 onClick={() => removeHandler(item)}>Remove from Favorite</h2>
            </div>
          </div>
        ))}
      </div>
      <PaginationContainer
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentState={props.favMovies}
        currentPage={currentPage}
      />
    </>
  );
}
