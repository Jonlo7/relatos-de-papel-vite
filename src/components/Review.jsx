import React from "react";
import { StarRating } from "./StarRating";

import "../styles/Review.css";

export const Review = ({ review }) => {
  return (
    <div className="review">
      <p className="review-text">"{review.text}"</p>
      <p className="review-author">- {review.author}</p>
      <div className="review-rating">
        <StarRating rating={review.rating} />
      </div>
    </div>
  );
};