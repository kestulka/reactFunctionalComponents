// CompB.jsx
import React from "react";
import CompC from "./CompC";

const CompB = ({ commonProps }) => {
  return (
    <div>
      <h3>CompB</h3>
      <p>{commonProps}</p>
      <CompC commonProps={commonProps} />
    </div>
  );
};

export default CompB;
