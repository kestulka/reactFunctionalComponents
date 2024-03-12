import React from "react";
import PropTypes from "prop-types";

function DuTekstai({ randtext1, randtext2, color }) {
  return (
    <div style={{ color: color }}>
      <h1>{randtext1}</h1>
      <h1>{randtext2}</h1>
    </div>
  );
}

DuTekstai.propTypes = {
  randtext1: PropTypes.string.isRequired,
  randtext2: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default DuTekstai;
