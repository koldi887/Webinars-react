import React from "react";
import classes from "./moviesPage.module.css";

export default function Movies(props) {
  return (
    <div className={classes.moviesContainer}>
      {props.currentMovies.map((item) => (
        <div className={classes.movieBlock} key={item["imdbID"]}>
          <img src={item["Poster"]} alt="" />
          <div className={classes.overlayBlock}>
            <h2 onClick={() => props.addToFavorites(item)}>
              {props.textOnAddToFavorites(item)}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
