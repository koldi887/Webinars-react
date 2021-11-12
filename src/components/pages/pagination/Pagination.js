import React from "react";
import classes from "./pagination.module.css";

export const Pagination = (props) => {
  return (
    <div className={classes.paginationContainer}>
      <i
        className={`fas fa-angle-double-left ${
          classes.leftArrow
        } ${props.setHideClass()}`}
        onClick={props.previousPage}
      />
      <ul className={`list ${classes.paginationBlock}`}>
        {props.pageNumbers.map((number) => (
          <li
            key={number}
            className={`${classes.paginationNumbers} ${props.setActiveClass(
              number
            )}`}
            onClick={() => props.paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <i
        className={`fas fa-angle-double-right ${
          classes.rightArrow
        } ${props.setHideClass()}`}
        onClick={props.nextPage}
      />
    </div>
  );
};
