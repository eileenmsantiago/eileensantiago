import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
 
const Hero = (props) => {
    return(
        <Container>
            <Heading level="h1" style="h4">
                {props.pageTitle}
            </Heading>
            <Heading level="h2">
                {props.heading}
            </Heading>
            <Paragraph>
                {props.description}
            </Paragraph>
        </Container>
    )
}

export default Hero