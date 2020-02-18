import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Blob from '../Blob/Blob';
 
const Hero = (props) => {
    return(
        <Container>
            <Heading className='hero__title' level="h1" style="h4">
                {props.pageTitle}
            </Heading>
            <div className="row">   
                <div className="col-md-6">
                    <Heading level="h2">
                        {props.heading}
                    </Heading>
                    <Paragraph>
                        {props.description}
                    </Paragraph>
                </div>
                <div className="col-md-6 hero__quote-container">
                    <Blob/>
                    <Paragraph size="lg">
                        {props.quote}
                    </Paragraph>
                </div>
            </div>
        </Container>
    )
}

export default Hero