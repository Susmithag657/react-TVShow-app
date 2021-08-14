import React from 'react';

const StarRating = ({ rating }) => {
  const st1 = {
    color: '#0d6efd'
  };
  const n1 = Math.trunc(rating / 2);
  const n2 = (rating / 2) * 10 - n1 * 10;
  const n3 = Math.trunc(5 - rating / 2);
  return (
    <div>
      {[...Array(n1).keys()].map(e => {
        return <i className="fas fa-star" style={st1} />;
      })}

      {n2 > 5 ? (
        <i className="fas fa-star-half-alt" style={st1} />
      ) : (
        <i className="far fa-star" style={st1} />
      )}
      {[...Array(n3).keys()].map(e => {
        return <i className="far fa-star" style={st1} />;
      })}
    </div>
  );
};
export default StarRating;
