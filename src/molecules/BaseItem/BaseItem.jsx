import React, { Fragment } from 'react';
import './BaseItem.scss';
import { Number } from 'atom';

const BaseItem = ({ label, value, valueDesc, onClick }) => {
    return (
        <div className="base-item" onClick={onClick}>
            <p className="base-label">{label}</p>
            <p className="base-value">
                
                {
                    valueDesc ?
                    <Fragment>
                        {value}<br /><small>{valueDesc}</small>
                    </Fragment> :
                    <Number value={value} />
                }
            </p>
        </div>
    )
}

export default React.memo(BaseItem);