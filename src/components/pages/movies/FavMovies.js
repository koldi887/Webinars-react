import React from 'react';
import classes from './movies.module.css'

export default function FavMovies(props) {
  const c = classes

  const removeHandler = (elem) => {
    const newArr = props.favMovies.filter(item => item["imdbID"] !== elem["imdbID"] )
    props.setFavMovies(newArr)
  }

  return (
  <div className={c.moviesContainer}>
    {props.favMovies.map((item) =>
        <div className={c.movieBlock} key={item["imdbID"]}>
          <img src={item['Poster']} alt=""/>
          <div className={c.overlayBlock}>
            <h2 onClick={() => removeHandler(item) }>
              Remove from Favorite
            </h2>
          </div>
        </div>
    )}
  </div>
  )
}
