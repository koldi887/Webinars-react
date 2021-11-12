import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";
import { Pagination } from "../pagination/Pagination";

export default function MoviesPageContainer(props) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e5d1210`;
    const response = await axios.get(url);
    const responseData = await response.data;
    if (responseData.Search) {
      setMovies(responseData.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(props.searchValue);
  }, [props.searchValue]);

  const addToFavorites = (elem) => {
    for (let item of props.favMovies) {
      if (item["imdbID"] === elem["imdbID"]) return;
    }
    props.setFavMovies([...props.favMovies, elem]);
  };

  const textOnAddToFavorites = (item) => {
    const includes = props.favMovies.some(
      (e) => e["imdbID"] === item["imdbID"]
    );
    if (includes) return "Added";
    return "Add to favorites";
  };

  // PAGINATION;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Movies
        searchValue={props.searchValue}
        favMovies={props.favMovies}
        currentMovies={currentMovies}
        addToFavorites={addToFavorites}
        textOnAddToFavorites={textOnAddToFavorites}
      />
      <Pagination
        itemsPerPage={moviesPerPage}
        totalItems={movies.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
