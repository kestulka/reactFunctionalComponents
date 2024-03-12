import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ textB, textC, textD }) => {
  return (
    <div>
      B sako: {textB}
      <ComponentC textC={textC} textD={textD} />
    </div>
  );
};

export default ComponentB;
