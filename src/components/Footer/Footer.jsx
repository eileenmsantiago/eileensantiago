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
                    {/* <div className="row footer__project-next">
                        <Paragraph className="col" size="lg" weight="regular" color="black">
                            {
                                projects.map((project, id) => {
                                    return (
                                        <a href={project.route} className="projectLink">{project.title}</a>
                                    )
                                })
                            }
                        </Paragraph>
                    </div> */}
                <Container bgColor="grey">
                    <div className="footer__container">
                        <div className="row footer__logo">
                            <a href="/">
                                <Heading level="h1" style="h2">
                                    e.
                                </Heading>
                            </a>
                        </div>
                        <div className="row footer__content">
                            <a href="/">
                                <Heading level="h1" style="h3">Eileen Santiago</Heading>
                            </a>
                            <Paragraph size="sm" weight="regular" color="black">USER EXPERIENCE DEVELOPER</Paragraph>
                        </div>
                        <div className="row footer__nav">
                            <nav>
                                <ul>
                                    {socialLinks.map(social => (
                                        <li>
                                            <a href={social.link}>{social.name}</a>
                                            <br></br>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="separator"></div>   
                        </div>
                        <div className="row footer__link">
                            <Paragraph>
                                Download Resume <a className="custom-link" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf">here</a>
                            </Paragraph>
                            <Paragraph>
                                👋🏼 Say hello at <a className="custom-link" href="mailto:eileenmvs@gmail.com">eileenmvs@gmail.com</a>
                            </Paragraph>
                            <Paragraph 
                                color="grey"
                                size="xs"
                                className="copy-right"
                            >
                                © 2020 Eileen Santiago, Made in Toronto, CA.
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;