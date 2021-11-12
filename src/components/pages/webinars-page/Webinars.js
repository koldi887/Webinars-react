import React, { useState } from "react";
import classes from "./webinars.module.css";
import { WebinarsData } from "./WebinarsData";
import AddWebinarContainer from "./add-webinars/AddWebinarContainer";
import { Pagination } from "../pagination/Pagination";

export default function Webinars() {
  const [currentState, setCurrentState] = useState(WebinarsData);
  const [hideAddWebinar, setHideAddWebinar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [webinarsPerPage] = useState(4);

  const indexOfLastWebinar = currentPage * webinarsPerPage;
  const indexOfFirstWebinar = indexOfLastWebinar - webinarsPerPage;
  const currentWebinars = currentState.slice(
    indexOfFirstWebinar,
    indexOfLastWebinar
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={classes.webinarWrapper}>
        <div className={classes.addButtonBlock}>
          <h3 className={classes.addWebinarText}>Add new webinar:</h3>
          <i
            className={`fas fa-plus fa-2x ${classes.addWebinarIcon}`}
            onClick={() => setHideAddWebinar(true)}
          />
        </div>

        {hideAddWebinar && (
          <AddWebinarContainer
            currentState={currentState}
            setCurrentState={setCurrentState}
            setHide={setHideAddWebinar}
          />
        )}

        {currentWebinars.map((item, index) => (
          <div className={classes.webinarBlock} key={index}>
            <img
              src={item.image}
              className={classes.webinarImage}
              alt="webinar"
            />

            <div className={classes.webinarInfo}>
              <p className={classes.webinarSubtitle}>Webinar</p>
              <p className={classes.webinarTitle}>{item.title}</p>
              <ul className={`list ${classes.webinarTopicList}`}>
                {item.subtopic.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div>
                <button className={`buttons`}>Read more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        itemsPerPage={webinarsPerPage}
        totalItems={currentState.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
