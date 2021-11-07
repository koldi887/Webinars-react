import React, {useEffect, useState} from 'react';
import Movies from "./Movies";
import axios from "axios";

export default function MoviesContainer(props) {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(4);

    const getMovieRequest = async(searchValue) =>  {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e5d1210`;
        const response = await axios.get(url);
        const responseData = await response.data;
        if (responseData.Search) {
            setMovies(responseData.Search)
        }
    }
    useEffect(() => {
        getMovieRequest(props.searchValue)
    },[props.searchValue])

    const addToFavorites = (elem) => {
        for (let item of props.favMovies) {
            if (item["imdbID"] === elem["imdbID"]) return
        }
        props.setFavMovies([...props.favMovies, elem])
    }

    //PAGINATION
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
        pageNumbers.push(i)
    }

    function paginateHandler(number) {
        setCurrentPage(number)
    }

    return (
        <>
            <Movies
                searchValue={props.searchValue}
                favMovies={props.favMovies}
                addToFavorites={addToFavorites}
                currentMovies={currentMovies}
                pageNumbers={pageNumbers}
                paginateHandler={paginateHandler}
            />
        </>
    );
}

