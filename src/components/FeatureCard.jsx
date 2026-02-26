import React from "react";

const FeatureCard = ({ title, icon, description }) => {
  return (
    <div>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
