import React from "react";
import PropTypes from "prop-types";
import ReactBarcode from "react-barcode";

const Barcode = (props) => {
  const { height, width, displayValue, format, value, fontSize } = props;
  return (
    <ReactBarcode
      height={height}
      width={width}
      value={value}
      displayValue={displayValue}
      format={format}
      fontSize={fontSize}
    />
  );
};

Barcode.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  displayValue: PropTypes.bool,
  format: PropTypes.string,
  value: PropTypes.string.isRequired,
  getWidth: PropTypes.func,
  fontSize: PropTypes.number,
};

Barcode.defaultProps = {
  height: 64,
  width: 2,
  displayValue: false,
  format: "CODE39",
  fontSize: 12,
};

export default Barcode;
