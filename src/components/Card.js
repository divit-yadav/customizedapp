import React from "react";
import "./Card.css"; // Make sure you have styles

function Card({ imgSrc, h2, h3 }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={h2} className="card-image" />
      <h2>{h2}</h2>
      <h3>{h3}</h3>
    </div>
  );
}

export default Card;
