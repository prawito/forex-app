import React from 'react';
import './AddCurrency.scss';

const AddCurrency = ({onClick}) => {
    return (
        <div className="add-currency-wrapper">
            <div className="add-currencies" onClick={onClick}>+</div>
        </div>
    )
}

export default React.memo(AddCurrency);