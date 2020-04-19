import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Blob from '../Blob/Blob';
 
const Hero = (props) => {

    const { pageTitle, heading, description, quote } = props;
    return(
        <Container>
            <Heading className="hero__title" level="h1" style="h4" weight="bold">
                {pageTitle}
            </Heading>
            <div className="row">   
                <div className="col-md-6">
                    <Heading level="h2" style="h1" weight="bold">
                        {heading}
                    </Heading>
                    <Paragraph size="reg" weight="regular" color="black">
                        {description}
                    </Paragraph>
                </div>
                <div className="col-md-6 hero__quote-container">
                    <Blob/>
                    <Paragraph size="xl" color="black-purple">
                        {quote}
                    </Paragraph>
                </div>
            </div>
        </Container>
    )
}

export default Hero