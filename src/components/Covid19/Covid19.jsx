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
                    <img className="covid19__image" src="/assets/Covid19-1.svg"></img>
                    <iframe id="covid-iframe"
                        title="Tracking COVID-19 site"
                        width="1100"
                        height="900"
                        src="https://tracking-covid-19.netlify.app">
                    </iframe>
                    <a href="https://tracking-covid-19.netlify.app/" className="cta">
                        <Paragraph size="lg" weight="md" weight="bold" color="black">View project here</Paragraph>
                        <img src="/assets/arrow.svg"/>
                    </a>
                </div>
            </Container>
        </>
    )
}
export default Covid19;