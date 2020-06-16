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
            <footer>
                    {/* <div className="row footer__project-next">
                        <Paragraph className="col" size="lg" weight="reg" color="black">
                            {
                                projects.map((project, id) => {
                                    return (
                                        <a href={project.route} className="projectLink">{project.title}</a>
                                    )
                                })
                            }
                        </Paragraph>
                    </div> */}
                <Container bgColor="grey" className="footer__container">
                    <div className="footer__logo">
                        <a href="/" className="logo-plain">
                            e<span className="logo-color">.</span>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-md-7 col-lg-5">
                            <div className="footer__wrapper">
                                <div className="footer__nav--top">
                                    <div className="footer__header">
                                        <a href="/"><Heading level="h4" style="h2">Eileen Santiago</Heading></a>
                                        <Paragraph size="md" weight="lt" color="black">User Experience Designer</Paragraph>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-7">
                            <div id="blurb-collab">
                                <Paragraph size="md" weight="reg" color="black">
                                    Let's collaborate together! <a className="custom-link" href="mailto:eileenmvs@gmail.com"> eileenmvs@gmail.com</a> 
                                </Paragraph>
                                <Paragraph>
                                    Or check out my <a className="custom-link" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf">resume</a> 
                                </Paragraph>
                            </div>
                        </div>                           
                    </div>
                    <div className="footer__wrapper">
                        <div className="footer__nav--bottom">
                            <div className="row e-nav__list footer__link">
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
                                <div>
                                    <Paragraph 
                                        color="grey"
                                        size="xs"
                                        id="copyright"
                                    >
                                        © 2020 Eileen Santiago, Made in Toronto, CA.
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer;