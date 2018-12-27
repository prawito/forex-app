// library
import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

const Number = ({ value }) => {

    return (
        <NumberFormat
            thousandSeparator
            value={value}
            decimalScale={2}
            displayType="text"
        />
    );

};

Number.propTypes = {
    value: PropTypes.number.isRequired
};

export default React.memo(Number);