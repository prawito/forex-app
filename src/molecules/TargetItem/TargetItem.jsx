// library
import React from 'react';

// local component
import { Number, RemoveItem } from 'atom';

// style & assets
import './TargetItem.scss';

const TargetItem = ({ currency, detail, amount, base, amountBase, onClick }) => {
    let total = amount * amountBase;
    return (
        <div className="target-currency-item">
            <div className="target-body">
                <div className="target-value">
                    <p className="value">{currency} <br /><small>{detail}</small></p>
                </div>
                <div className="target-value">
                    <p className="amount"><Number value={total} /></p>
                </div>
            </div>
            <div className="target-footer">
                <p>1 {base} = <Number value={amount} /></p>
            </div>
            <RemoveItem onClick={onClick} />
        </div>
    )
}

export default React.memo(TargetItem);