import React from 'react';

export const Review = ({ reviewer, comment, rating }) => {
    return (
        <div className="review">
            <p><strong>{reviewer}</strong></p>
            <p>{comment}</p>
            <p>Rating: {rating} / 5</p>
        </div>
    );
};