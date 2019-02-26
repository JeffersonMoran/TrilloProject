import React from 'react'
import UserNav from './UserNav';
import SearchBar from './SearchBar';

const Header = () => (
    <header className="header">
        <img src={require('../img/logo.png')} alt="Logo" className="logo"/>
        <SearchBar />
        <UserNav />
    </header>
)

export default Header;