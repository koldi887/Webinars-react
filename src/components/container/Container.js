import React, { useState } from "react";
import classes from "./Container.module.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import SocialMedia from "../social-media/SocialMedia";
import Webinars from "../pages/webinars-page/Webinars";
import MoviesPageContainer from "../pages/movies-page/MoviesPageContainer";
import FavMoviesPage from "../pages/favorite-movies-page/FavMoviesPage";
import Solution1 from "../pages/Solution1";
import Solution2 from "../pages/Solution2";
import Solution3 from "../pages/Solution3";
import Resources1 from "../pages/Resources1";
import Resources2 from "../pages/Resources2";
import Pricing from "../pages/Prices";
import Error from "../pages/Error";

export default function Container() {
  const [searchValue, setSearchValue] = useState("Star wars");
  const [favMovies, setFavMovies] = useState([]);

  return (
    <div className={classes.contentContainer}>
      <div className={classes.pagesContainer}>
        <Routes>
          <Route exact path={"/"} element={<Webinars />} />
          <Route
            path={"/movies/all-movies"}
            element={
              <MoviesPageContainer
                searchValue={searchValue}
                favMovies={favMovies}
                setFavMovies={setFavMovies}
              />
            }
          />
          <Route
            path={"/movies/favorites"}
            element={
              <FavMoviesPage
                favMovies={favMovies}
                setFavMovies={setFavMovies}
              />
            }
          />
          <Route path={"/solutions/solutions1"} element={<Solution1 />} />
          <Route path={"/solutions/solutions2"} element={<Solution2 />} />
          <Route path={"/solutions/solutions3"} element={<Solution3 />} />
          <Route path={"/resources/resources1"} element={<Resources1 />} />
          <Route path={"/resources/resources2"} element={<Resources2 />} />
          <Route path={"/pricing"} element={<Pricing />} />
          <Route path={"*"} elemen={<Error />} />
        </Routes>
      </div>

      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder={"Search..."}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={"buttons"}>Search</button>
      </div>

      <div className={classes.sidebarContainer}>
        <SideBar />
      </div>

      <div className={classes.socialMedia}>
        <SocialMedia />
      </div>

      <i className={`fas fa-comment-dots fa-4x ${classes.chatIcon}`} />
    </div>
  );
}
