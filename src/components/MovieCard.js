import React from 'react';
import StarRating from './StarRating';
import ReadMore from './ReadMore';
const MovieCard = props => {
  const { id, name, image, description, rating } = props.e;

  return (
    <div className="col-9 mx-auto col-md-6 col-lg-6 my-3 ">
      <div className="card mb-3 cardContainer" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4 col-sm">
            <img src={image} className="img-fluid rounded-start" alt="movie" />
          </div>
          <div className="col-md-8 col-sm">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <ReadMore>{description}</ReadMore>
              <p className="card-text text-muted display-inline">Rating:</p>
              <StarRating rating={rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
