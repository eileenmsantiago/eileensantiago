import React from 'react'
import Container from '../Container/Container'
import { NavLink, useLocation } from 'react-router-dom'
import Heading from '../Heading/Heading'

const Nav = (props) => {
    
    const { projects } = props;
    const location = useLocation();

    let bgHex;
    Object.values(projects).forEach(project => {
        if(location.pathname === project.route) {
            bgHex = project.bgHex;
        }
    })

    return(
        <nav className="e-nav" style={{backgroundColor: bgHex}}>
            <Container>   
                <div className="e-nav--wrapper">
                    <a href="/" className="logo-plain">
                        e<span className="logo-color">.</span>
                    </a>
                    <div className="e-nav__list">
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    className="e-nav__link"
                                    activeClassName="e-nav__link--active"
                                >
                                    Work
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about"
                                    className="e-nav__link"
                                    activeClassName="e-nav__link--active"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <a 
                                    href="/assets/Resume-EileenSantiago-2020.pdf" 
                                    target="_blank"
                                    className="e-nav__link"
                                >
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact" 
                                    className="e-nav__link"
                                >
                                    Contact
                                </a>
                                {/* <NavLink
                                    to="/contact"
                                    className="e-nav__link"
                                    activeClassName="e-nav__link--active"
                                >
                                    Contact
                                </NavLink> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )

}

export default Nav