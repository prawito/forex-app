import React from 'react';
import logo from 'assets/shopee.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default React.memo(Header);