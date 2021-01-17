import React from "react";

const toggleTheme = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Change theme</button>
    </div>
  );
};

export default toggleTheme;
