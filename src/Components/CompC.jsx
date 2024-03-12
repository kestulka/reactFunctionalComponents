// CompC.jsx
import React from "react";
import CompD from "./CompD";

const CompC = ({ commonProps }) => {
  return (
    <div>
      <h4>CompC</h4>
      <p>{commonProps}</p>
      <CompD commonProps={commonProps} />
    </div>
  );
};

export default CompC;
