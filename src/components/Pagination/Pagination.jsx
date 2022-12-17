import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css"

const Pagination = ({ pageCount, changePage, forcePage }) => {
  return (
    <ReactPaginate
      previousLabel={"< Anterior"}
      nextLabel={"Siguiente >"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationSection"}
      previousLinkClassName={"previousBtn"}
      nextLinkClassName={"nextBtn"}
      activeClassName={"paginationActive"}
      forcePage={Number(forcePage)}
    />
  );
};

export default Pagination;
