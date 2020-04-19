import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router-dom'
import Heading from '../Heading/Heading'

const Nav = (props) => {

    return(
        <div className='e-nav'>
            <div className='container'>
                <Heading className='e-nav__logo' style="h3" level="h1">
                    ~ e
                </Heading>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                className="e-nav__link"
                                activeClassName="e-nav__link-active"
                            >
                                Work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about"
                                className="e-nav__link"
                                activeClassName="e-nav__link-active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="e-nav__link"
                                activeClassName="e-nav__link-active"
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

export default Nav