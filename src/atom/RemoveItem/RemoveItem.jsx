import React from 'react';
import './RemoveItem.scss';
import cx from 'classnames';

const RemoveItem = ({className, onClick}) => {
    return <div onClick={onClick} className={cx('remove', className)}></div>
}

export default React.memo(RemoveItem);