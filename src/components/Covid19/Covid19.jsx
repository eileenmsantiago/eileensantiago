import React from 'react';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const Covid19 = (props) => {
    return (
        <>
            <Container>
                <div className="covid19">
                    <Heading level="h2" style="h1">Content coming soon</Heading>
                    <iframe id="covid-iframe"
                        title="Tracking COVID-19 site"
                        width="1100"
                        height="900"
                        src="https://tracking-covid-19.netlify.app">
                    </iframe>
                    <a href="https://tracking-covid-19.netlify.app/" className="es-button es-button--primary about__cta--primary">
                        View live site here ↗︎
                    </a>
                </div>
            </Container>
        </>
    )
}
export default Covid19;