import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

    return(
        <div className='e-header'>
            <div className='container'>
                    <div className='e-header__logo'>
                        ~ Eileen
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    className="e-header__link"
                                    activeClassName="e-header__link-active"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about"
                                    className="e-header__link"
                                    activeClassName="e-header__link-active"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="e-header__link"
                                    activeClassName="e-header__link-active"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
            </div>
        </div>
    )

}

export default Header