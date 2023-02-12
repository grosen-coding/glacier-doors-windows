import React from "react";

const TechCard = ({ tech }) => {
  return (
    <div>
      <div>
        <div>{tech.icon}</div>
        <h4>{tech.name}</h4>
      </div>
      <p>{tech.text}</p>
    </div>
  );
};

export default TechCard;
