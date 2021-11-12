import React from "react";
import classes from "./pagination.module.css";

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.paginationContainer}>
      <ul className={`list ${classes.paginationBlock}`}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={classes.paginationNumbers}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
