import React from "react";
import Markes from "./Brand";

const Automobiliai = (props) => {
  const { marke } = props;
  return (
    <div>
      <p>Automobiliai:</p>
      <Markes marke={marke} />
    </div>
  );
};

export default Automobiliai;
