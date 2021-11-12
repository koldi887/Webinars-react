import React from "react";
import { Pagination } from "./Pagination";
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

export const PaginationContainer = ({
  itemsPerPage,
  currentState,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(currentState.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const setActiveClass = (number) => {
    if (currentPage === number) return classes.active;
  };

  const setHideClass = () => {
    if (currentState.length === 0) return classes.hide;
  };

  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  };

  return (
    <Pagination
      paginate={paginate}
      setActiveClass={setActiveClass}
      setHideClass={setHideClass}
      previousPage={previousPage}
      nextPage={nextPage}
      pageNumbers={pageNumbers}
    />
  );
};
