// library
import React from 'react';
import PropTypes from 'prop-types';

// style & assets
import './AddCurrency.scss';

const AddCurrency = ({ onClick }) => {
    return (
        <div className="add-currency-wrapper">
            <div className="add-currencies" onClick={onClick}>+</div>
        </div>
    )
}

AddCurrency.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default React.memo(AddCurrency);