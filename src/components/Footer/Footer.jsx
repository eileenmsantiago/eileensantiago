import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const socialLinks = [
    {
        name: "Twitter",
        link: "https://twitter.com/eileenmsantiago"
    },
    {
        name: "Dribble",
        link: "https://dribbble.com/eileensantiago"
    },
    {
        name: "Behance",
        link: "https://www.behance.net/eileensantiago"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/eileensantiago/"
    },
    {
        name: "Github",
        link: "https://github.com/eileenmsantiago"
    }
]
const Footer = (props) => {

    const { projects } = props;
    return (
        <>
            <footer className="footer">
                <Container>
                    <div className="row footer__project-next">
                        <Paragraph className="col" size="lg" weight="regular" color="black">
                            {
                                projects.map((project, id) => {
                                    return (
                                        <a href={project.route} className="projectLink">{project.title}</a>
                                    )
                                })
                            }
                        </Paragraph>
                    </div>
                    <div className="footer__links-wrapper">
                        <a href="/contact">
                            <Heading level="h4" style="h5">
                                Get in touch
                            </Heading>
                        </a>
                        <nav>
                            <ul>
                                {socialLinks.map(social => (
                                    <li>
                                        <a className="e-nav__link" href={social.link}>{social.name}</a>
                                        <br></br>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__separator"></div>
                    <Paragraph>
                        Download Resume <a className="custom-link" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf">here</a>
                    </Paragraph>
                    <Paragraph>
                        👋🏼 Say hello at <a className="custom-link" href="mailto:eileenmvs@gmail.com">eileenmvs@gmail.com</a>
                    </Paragraph>
                </Container>
                <Paragraph 
                    className="footer__name"
                    color="grey"
                    size="xs"
                >

                    © 2020 Eileen Santiago, Made in Toronto, CA.
                </Paragraph>
            </footer>
        </>
    )
}

export default Footer;