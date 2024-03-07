import React from "react";
import TestDivTextColor from "./TestDivTextColor";

const PlainDiv = (props) => {
  const { text, color } = props;
  console.log(text);
  console.log(color);

  return (
    <div>
      <p>TestDiv:</p>
      <TestDivTextColor textContent={text} myColor={color} />
      {/* propsai gali but naminami kaip nori */}
    </div>
  );
};

export default PlainDiv;
