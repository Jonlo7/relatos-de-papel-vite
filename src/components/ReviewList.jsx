import React from "react";
import { Review } from "./Review";
import "../styles/ReviewList.css";

export const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className="no-reviews">No hay reseñas disponibles.</p>;
  }

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};