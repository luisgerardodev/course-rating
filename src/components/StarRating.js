import React, { useState } from "react";
import Star from "./Star";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const renderStars = (rating) => {
    const stars = [];
    const maxRating = 5;
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <Star
          key={i.toString()}
          isSelected={rating >= i}
          setRating={() => handleSetRating(i)}
        />
      );
    }
    return stars;
  };

  const handleSetRating = (newRating) => setRating(newRating === rating ? 0 : newRating);

  return (
    <ul className="course--stars">
      {/* Render the Star components */}
      {renderStars(rating)}
    </ul>
  );
};

export default StarRating;
