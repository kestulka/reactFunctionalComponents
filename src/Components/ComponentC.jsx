import React from "react";
import ComponentD from "./ComponentD";

const ComponentC = ({ textC, textD }) => {
  return (
    <div>
      C sako: {textC}
      <ComponentD textD={textD} />
    </div>
  );
};

export default ComponentC;
