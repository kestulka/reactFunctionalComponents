import React from "react";

const ColoredTextDiv = ({ textContent, myColor }) => {
  console.log(textContent);
  console.log(myColor);
  return <div style={{ color: myColor }}>ColoredTextDiv: {textContent}</div>;
};

export default ColoredTextDiv;
