import React from 'react';
import './Button.scss';
import cx from 'classnames';

const Button = ({children, full, onClick}) => {
    const classBtn = cx('btn', {
        'full': full
    })
    return <button className={classBtn} onClick={onClick}>{children}</button>
}

export default React.memo(Button);