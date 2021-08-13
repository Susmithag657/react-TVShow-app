import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="container">
      <div className="row">
        {movies && movies.map((e, i) => <MovieCard e={e} key={e.id} />)}
      </div>
    </div>
  );
};

export default MovieList;
