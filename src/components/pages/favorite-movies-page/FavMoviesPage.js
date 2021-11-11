import React from "react";
import classes from "../movies-page/moviesPage.module.css";

export default function FavMoviesPage(props) {
  const removeHandler = (elem) => {
    const newArr = props.favMovies.filter(
      (item) => item["imdbID"] !== elem["imdbID"]
    );
    props.setFavMovies(newArr);
  };

  return (
    <div className={classes.moviesContainer}>
      {props.favMovies.map((item) => (
        <div className={classes.movieBlock} key={item["imdbID"]}>
          <img src={item["Poster"]} alt="" />
          <div className={classes.overlayBlock}>
            <h2 onClick={() => removeHandler(item)}>Remove from Favorite</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
