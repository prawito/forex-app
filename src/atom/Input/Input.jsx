import React from 'react';
import './Input.scss';

const Input = ({onChange, type, placeholder}) => {
    return <input className="form-input" type={type} placeholder={placeholder} onChange={onChange}/>
}

export default React.memo(Input);