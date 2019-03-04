import React from 'react'
import glassIcon from "../img/SVG/magnifying-glass.svg";

const SearchBar = () => (
    <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Procure Hotéis" />
        <button className="search__button">
            <img src={glassIcon} className="search__icon" alt="search" />
        </button>
    </form>
)

export default SearchBar;