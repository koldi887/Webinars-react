import React from "react";
import classes from "./pagination.module.css";

export const createPaginationState = (
  itemsPerPage,
  currentState,
  currentPage
) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return currentState.slice(indexOfFirstItem, indexOfLastItem);
};

export const Pagination = ({
  itemsPerPage,
  currentState,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(currentState.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const setActiveClass = (number) => {
    if (currentPage === number) return classes.active;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
