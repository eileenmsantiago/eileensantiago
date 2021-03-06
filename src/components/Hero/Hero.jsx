import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Blob from '../Blob/Blob';
 
const Hero = (props) => {

    const { pageTitle, heading, description, showEmail, quote } = props;
    return(
        <>
        <Container>
            <Heading className="hero__title" level="h1" style="h4">
                {pageTitle}
            </Heading>
            <div className="row">   
                <div className="col-md-7">
                    <Heading level="h2" style="h1" weight="reg">
                        {heading}
                    </Heading>
                    <Paragraph className="hero__description" size="md" weight="lt" color="black">
                        {description}
                    </Paragraph>
                    {showEmail ?
                        <>
                            <Paragraph className="hero__description-email" size="md" weight="lt" color="black">
                                Say hello at <a className="custom-link" href="mailto:eileenmvs@gmail.com">eileenmvs@gmail.com</a>
                            </Paragraph>
                            <Paragraph size="xs" weight="semi">Selected work ↓</Paragraph>
                        </>
                    : null }
                </div>
                <div className="col-md-5 hero__container">
                    <div style={{position: quote ? 'absolute' : 'static'}}>
                        <Blob/>
                    </div>
                    <div className="hero__container--quote">
                        <Paragraph size="lg" weight="lt" color="black">
                            {quote}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Hero