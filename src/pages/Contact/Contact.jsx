import React from 'react';
import Hero from '../../components/Hero/Hero';
import Container from '../../components/Container/Container';
import CommentContainer from '../../components/CommentContainer/CommentContainer';
import Paragraph from '../../components/Paragraph/Paragraph';
import Heading from '../../components/Heading/Heading';

const Contact = () => {
    return (
        <Container>
            <section className="hero" id="hero-contact">
                <Hero
                    pageTitle="Contact"
                    heading="Eileen"
                    description="A User Experience Developer striving to make user-centric products that are meaningful + intuitive. Aiming to utilize experiences working in the health sector, in nursing, and fusing it with visual and technical creativity to solve product problems."
                />
            </section>
            <section className="comment">
                <Container>
                    {/* <CommentContainer/> */}
                    <Heading className="comment__heading" level="h3" style="h3" weight="lt">
                        Have anything in mind?<br></br>Interested in connecting? <br></br> I would love to hear from you 
                    </Heading>
                    <div className="row cta">
                        <a className="es-button es-button--primary" id="cta__calendly" href="https://calendly.com/eileensantiago/30min">
                            <Paragraph size="sm" weight="reg">GET IN TOUCH</Paragraph>
                        </a>
                        <div className="cta--secondary">
                            <Paragraph size="sm" weight="reg">
                                Or check out <a className="custom-link" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf"> my resume</a> 
                            </Paragraph>
                        </div>
                    </div>
                </Container>
            </section>
        </Container>
    )
}

export default Contact;