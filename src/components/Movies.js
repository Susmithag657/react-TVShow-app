import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import axios from 'axios';

const Movies = () => {
  let initialState = [];
  const [movies, setmovies] = useState(initialState);
  useEffect(() => {
    const url = 'https://api.tvmaze.com/shows';
    axios
      .get(url)
      .then(function(response) {
        let mov = response.data.map(e => {
          let obj = {};
          obj.id = e.id;
          obj.name = e.name;
          obj.image = e.image.medium;
          obj.rating = e.rating.average;
          obj.description = e.summary;
          return obj;
        });
        setmovies(mov);
        console.log(movies);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
