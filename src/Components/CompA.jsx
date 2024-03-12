// CompA.jsx
import React from "react";
import CompB from "./CompB";

const CompA = ({ commonProps }) => {
  return (
    <div>
      <h2>CompA</h2>
      <p>{commonProps}</p>
      <CompB commonProps={commonProps} />
    </div>
  );
};

export default CompA;
