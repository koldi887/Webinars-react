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

  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  };

  const setHideClass = () => {
    if (currentState.length === 0) return classes.hide;
  };

  return (
    <div className={classes.paginationContainer}>
      <i
        className={`fas fa-angle-double-left ${
          classes.leftArrow
        } ${setHideClass()}`}
        onClick={previousPage}
      />
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
      <i
        className={`fas fa-angle-double-right ${
          classes.rightArrow
        } ${setHideClass()}`}
        onClick={nextPage}
      />
    </div>
  );
};
