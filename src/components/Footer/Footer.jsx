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
    }
]
const Footer = (props) => {

    const { projects } = props;
    return (
        <>
            <div className="footer">
                <Container>
                    <Paragraph className="footer__project-list" size="lg" weight="regular" color="black">
                        {
                            projects.map((project, index) => {
                                return (
                                    <a href={project.route} className="projectLink">{project.title}</a>
                                )
                            })
                        }
                    </Paragraph>
                    <a href="/contact">
                        <Heading level="h4">
                            Contact
                        </Heading>
                    </a>
                    <nav>
                        <ul>
                            {socialLinks.map(social => (
                                <li>
                                    <a href={social.link}>{social.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="footer__separator"></div>
                    <Paragraph>
                        Download Resume <a className="footer__email-link" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf">here</a>
                    </Paragraph>
                    <Paragraph>
                        👋🏼 Say hello at <a className="footer__email-link" href="mailto:eileenmvs@gmail.com">eileenmvs@gmail.com</a>
                    </Paragraph>
                </Container>
            </div>
        </>
    )
}

export default Footer;