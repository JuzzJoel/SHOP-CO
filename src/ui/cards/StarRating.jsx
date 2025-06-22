
jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function RatingStars({ rating }) {
  if (rating > 5) {
    return <div>Rating must be 5 or above</div>;
  }

  const stars = Array(Math.floor(rating)).fill(null).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} color="gold" />
  ));

  return (
    <div>
      {stars}
      <span style={{ marginLeft: '10px' }}>{rating}</span>
    </div>
  );
}

export default RatingStars;
