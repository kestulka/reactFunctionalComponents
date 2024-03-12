import React from "react";
import PropTypes from "prop-types";

function VienasDu({ color }) {
  let textColor = "";

  if (color === 1) {
    textColor = "blue";
  } else if (color === 2) {
    textColor = "red";
  }

  return (
    <div>
      <h1 style={{ color: textColor }}>cia yra bebra darbai</h1>
    </div>
  );
}

VienasDu.propTypes = {
  color: PropTypes.number.isRequired,
  //   color: PropTypes.oneOf([1, 2]).isRequired,
};

export default VienasDu;
