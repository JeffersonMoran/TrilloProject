import React from 'react'

const Navigation = ({ navigationData, handleClick }) => (
    <nav className="sidebar">
        <ul className="side-nav">
            {
                navigationData.map((item, index) => (
                    <li className={`side-nav__item ${item.active ? 'side-nav__item--active':''}`} key={index}>
                        <a href="#" className="side-nav__link" onClick={handleClick}>
                            <img src={require(`../img/SVG/${item.icon}.svg`)} className="side-nav__icon" alt={item.alt} />
                            <span id={item.name} >{item.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>

        <div className="legal">
            &copy; 2019 por Idol.Todos os direitos reservados.
        </div>
    </nav>
)

export default Navigation