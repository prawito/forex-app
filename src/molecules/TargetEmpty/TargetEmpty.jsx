import React from 'react';
import './TargetEmpty.scss';

const TargetEmpty = ({onClick}) => {
    return(
        <div className="target-empty">
            <p>No target currency added</p>
            <p className="add-target" onClick={onClick}>Add target currency</p>
        </div>
    )
}

export default React.memo(TargetEmpty);