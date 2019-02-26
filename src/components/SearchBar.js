import React from 'react'

const SearchBar = () => (
    <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Procure Hotéis" />
        <button className="search__button">
            <img src={require("../img/SVG/magnifying-glass.svg")} className="search__icon" alt="search" />
        </button>
    </form>
)

export default SearchBar;