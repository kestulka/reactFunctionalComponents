import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = ({ textA, textB, textC, textD }) => {
  return (
    <div>
      A sako: {textA}
      <ComponentB textB={textB} textC={textC} textD={textD} />
    </div>
  );
};

export default ComponentA;
