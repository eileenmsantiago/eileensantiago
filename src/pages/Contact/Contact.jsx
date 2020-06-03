import React from 'react';
import Hero from '../../components/Hero/Hero';
import Container from '../../components/Container/Container';

const Contact = () => {
    return (
        <section className="hero">
            <Container>
                <Hero
                    pageTitle="Contact"
                    heading="Eileen"
                    description="A detail-oriented designer who loves developing intuitive digital web experiences. Aiming to utilize experiences working in the health sector, in nursing, and fusing it with visual and technical creativity to solve product problems."
                />
            </Container>
        </section>
    )
}

export default Contact;