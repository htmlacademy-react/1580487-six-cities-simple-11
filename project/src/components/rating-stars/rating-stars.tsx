import React from 'react';
import useRatingStars from './useRatingStars';

type RatingStarsProps = {
  ratingValue: number;
}

function RatingStars({ ratingValue }: RatingStarsProps): JSX.Element {
  const starsViewWidth = useRatingStars(ratingValue);

  return (
    <span style={{ width: starsViewWidth }}></span>
  );
}

export default RatingStars;
