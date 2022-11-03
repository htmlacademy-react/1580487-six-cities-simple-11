function getRatingViewWidth(ratingValue: number): string {
  const RATING_MAX_NUM = 5;
  const RATING_MAX_PERCENT = 100;

  const ratingViewWidth = RATING_MAX_PERCENT / RATING_MAX_NUM * Math.round(ratingValue);

  return `${ratingViewWidth}%`;
}

export default getRatingViewWidth;
