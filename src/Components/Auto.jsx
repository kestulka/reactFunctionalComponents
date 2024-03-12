import React from "react";
import Brand from "./Brand";

const Automobiliai = (props) => {
  const { marke } = props;
  return (
    <div>
      <p>Automobiliai:</p>
      <Brand marke={marke} />
    </div>
  );
};

export default Automobiliai;
