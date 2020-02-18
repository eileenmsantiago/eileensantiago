import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const socialLinks = [
    {
        name: "Twitter",
        link: "#"
    },
    {
        name: "Dribble",
        link: "#"
    },
    {
        name: "Behance",
        link: "#"
    },
    {
        name: "LinkedIn",
        link: "#"
    }
]
const Footer = () => {
    return (
        <div className="footer">
            <Container>
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
                    Email me at <a className="footer__email-link" href="mailto:eileenmvs@gmail.com">eileenmvs@gmail.com</a>
                </Paragraph>
            </Container>
        </div>
    )
}

export default Footer;