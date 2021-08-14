import React, { useState } from 'react';
import MovieCard from './MovieCard';

const Pagination = ({ movies, pageLimit, dataLimit }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [pages] = useState(Math.floor(movies.length / dataLimit));
  console.log(currentPage);
  const goToNextPage = () => {
    setcurrentPage(prevPage => prevPage + 1);
  };

  const goToPrevPage = e => {
    console.log(e);
    setcurrentPage(prevPage => prevPage - 1);
  };

  const goToPage = e => {
    setcurrentPage(Number(e.target.textContent));
  };

  const getPaginatedData = () => {
    let start = currentPage * dataLimit - dataLimit;
    let end = start + dataLimit;
    return movies.slice(start, end);
  };

  const getPageNumbers = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const x = new Array(pageLimit).fill().map((_, i) => start + i + 1);
    console.log(x);
    return x;
  };

  return (
    <div className="container">
      <div className="row">
        {getPaginatedData().map((e, i) => (
          <MovieCard e={e} key={e.id} />
        ))}
      </div>
      <div className="pageGroup">
        <button
          onClick={goToPrevPage}
          className={`btn btn-sm prev ${currentPage === 1 ? 'disbled' : ''}`}
        >
          Prev
        </button>
        {getPageNumbers().map((e, i) => (
          <button
            key={i}
            onClick={goToPage}
            className={`btn btn-sm paginationItem ${
              currentPage == e ? 'active' : ''
            }`}
          >
            {e}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`btn btn-sm next ${
            currentPage === pages ? 'disbled' : ''
          }`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
