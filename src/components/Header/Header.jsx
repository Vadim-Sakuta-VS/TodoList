import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <h1 className="header__title">TodoList</h1>
            </div>
        </header>
    );
};

export default Header;