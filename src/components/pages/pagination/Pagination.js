import React from "react";
import classes from "./pagination.module.css";

export const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  console.log(currentPage);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const setActiveClass = (number) => {
    if (currentPage === number) return classes.active;
  };

  return (
    <div className={classes.paginationContainer}>
      <ul className={`list ${classes.paginationBlock}`}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${classes.paginationNumbers} ${setActiveClass(number)}`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
