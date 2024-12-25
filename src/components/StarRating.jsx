import React from "react";
import "../styles/StarRating.css";

export const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled" : ""}`}
          role="img"
          aria-label="star"
        >
          ★
        </span>
      ))}
    </div>
  );
};
