import React from 'react';

const Panel = ({ title, description, status }) => {
  return (
    <div className={`panel ${status}`}>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
    </div>
  );
};

export default Panel;
