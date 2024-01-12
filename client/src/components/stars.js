// Stars.js

import React from "react";

const Star = ({ size, left, top }) => {
  return (
    <div
      className="star-container"
      style={{
        position: "fixed",
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        zIndex: -1,
      }}
    >
      <div className="star" />
    </div>
  );
};

const Stars = () => {
  const generateRandomStars = () => {
    return Array.from({ length: 50 }, (_, index) => {
      const size = Math.random() * 2;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      return <Star key={index} size={size} left={left} top={top} />;
    });
  };

  return generateRandomStars();
};

export default Stars;
