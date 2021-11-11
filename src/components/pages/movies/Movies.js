import React from 'react';
import classes from './movies.module.css'

export default function Movies(props) {
  const c = classes
  return (
      <div className={c.moviesContainer}>

        {props.currentMovies.map((item) =>
            <div className={c.movieBlock} key={item["imdbID"]}>
              <img src={item['Poster']} alt=""/>
              <div className={c.overlayBlock}>
                <h2 onClick={() => props.addToFavorites(item)}>
                  {props.favMovies.some(e => e["imdbID"] === item["imdbID"]) ? 'Added' : 'Add to favorites'}
                </h2>
              </div>
            </div>
        )}

        <div className={c.paginationBlock}>
          {props.pageNumbers.map(number => (
              <h1 key={number} onClick={() => props.paginateHandler(number)}>{number}</h1>
          ))}
        </div>

      </div>
  );
}
