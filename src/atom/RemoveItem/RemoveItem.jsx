// library
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// style & assets
import './RemoveItem.scss';

const RemoveItem = ({ className, onClick }) => {
    return <div onClick={onClick} className={cx('remove', className)}></div>
}

RemoveItem.defaultProps = {
    className: '',
    onClick: () => console.log('remove action')
};

RemoveItem.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default React.memo(RemoveItem);