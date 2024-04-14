import React from "react";

const Buttons = ({ onClick, color }) => {
  return (
    <div className="buttons">
      <button onClick={onClick} style={{ color: color }}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
