import React from 'react'

const Navigation = ({ navigationData }) => (
    <nav className="sidebar">
        <ul className="side-nav">
            {
                navigationData.map(item => (
                    <li className={`side-nav__item ${item.active ? 'side-nav__item--active':''}`}>
                        <a href="#" className="side-nav__link">
                            <img src={require(`../img/SVG/${item.icon}.svg`)} className="side-nav__icon" alt={item.alt} />
                            <span>{item.name}</span>
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