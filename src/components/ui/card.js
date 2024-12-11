// src/components/ui/card.js
import React from 'react';
import './card.css'; // Import CSS file for styling the card component

// Define a simple Card component
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
