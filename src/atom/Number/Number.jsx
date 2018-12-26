import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

const Number = ({ value }) => {

    return (
        <NumberFormat
            thousandSeparator
            value={value}
            displayType="text"
        />
    );

};

Number.propTypes = {
    value: PropTypes.number.isRequired
};

export default React.memo(Number);