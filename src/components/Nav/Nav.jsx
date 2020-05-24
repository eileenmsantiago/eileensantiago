import React from 'react'
import Container from '../Container/Container'
import { NavLink, useLocation } from 'react-router-dom'
import Heading from '../Heading/Heading'

const Nav = (props) => {
    
    const {projects} = props;
    const location = useLocation();

    let bgHex;
    Object.values(projects).forEach(project => {
        if(location.pathname === project.route) {
            bgHex = project.bgHex;
        }
    })

    return(
        <div className='e-nav' style={{backgroundColor: bgHex}}>
            <div className='container'>
                <a href="/">
                    <Heading className='e-nav__logo' style="h4" level="h1">
                        e.
                    </Heading>
                </a>
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