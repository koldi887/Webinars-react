import React, { useState} from "react";
import classes from './Container.module.css'
import {Switch, Route} from 'react-router-dom'
import SideBar from "../sidebar/SideBar";
import SocialMedia from "../social-media/SocialMedia";
import Webinars from "../webinar/Webinars";
import MoviesContainer from "../pages/movies/MoviesContainer";
import FavMovies from "../pages/movies/FavMovies";
import Solution1 from "../pages/Solution1";
import Solution2 from "../pages/Solution2";
import Solution3 from "../pages/Solution3";
import Resources1 from "../pages/Resources1";
import Resources2 from "../pages/Resources2";
import Pricing from "../pages/Prices";
import Error from "../pages/Error";

export default function Container() {
    const c = classes
    const [searchValue, setSearchValue] = useState('Star wars')
    const [favMovies, setFavMovies] = useState([])

    return (

        <div className={c.contentContainer}>

            <div className={c.searchContainer}>
                <input type="text"
                       placeholder={'Search...'}
                       value={searchValue}
                       onChange={(e) => setSearchValue(e.target.value) }
                />
                <button className={'buttons'}>Search</button>
            </div>

            <div className={c.sidebarContainer}>
                <SideBar/>
            </div>

            <div className={c.webinarContainer}>
                <Switch>
                    <Route exact path={'/'} component={Webinars}/>
                    <Route path={'/movies/all-movies'}
                           component={() => <MoviesContainer
                               searchValue={searchValue}
                               favMovies={favMovies}
                               setFavMovies={setFavMovies}
                           />}/>
                    <Route path={'/movies/favorites'}
                           component={() => <FavMovies
                               favMovies={favMovies}
                               setFavMovies={setFavMovies}
                           />}/>
                    <Route path={'/solutions/solutions1'} component={Solution1}/>
                    <Route path={'/solutions/solutions2'} component={Solution2}/>
                    <Route path={'/solutions/solutions3'} component={Solution3}/>
                    <Route path={'/resources/resources1'} component={Resources1}/>
                    <Route path={'/resources/resources2'} component={Resources2}/>
                    <Route path={'/pricing'} component={Pricing}/>
                    <Route component={Error}/>
                </Switch>
            </div>

            <div className={c.socialMedia}>
                <SocialMedia/>
            </div>

            <i className={`fas fa-comment-dots fa-4x ${c.chatIcon}`} />

        </div>
    )
}