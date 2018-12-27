// library
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// style & assets
import './Button.scss';


const Button = ({ children, full, onClick }) => {
    const classBtn = cx('btn', {
        'full': full
    })
    return <button className={classBtn} onClick={onClick}>{children}</button>
}

Button.defaultProps = {
    children: 'Button',
    full: false,
    onClick: () => console.log('button click')
};

Button.propTypes = {
    children: PropTypes.any,
    full: PropTypes.bool,
    onClick: PropTypes.func
}

export default React.memo(Button);