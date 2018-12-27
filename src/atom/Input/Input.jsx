// library
import React from 'react';
import PropTypes from 'prop-types';

// style & assets
import './Input.scss';

const Input = ({ onChange, type, placeholder }) => {
    return <input className="form-input" type={type} placeholder={placeholder} onChange={onChange} />
}

Input.defaultProps = {
    onChange: () => console.log('input change'),
    placeholder: 'input here'
};

Input.propTYpes = {
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default React.memo(Input);