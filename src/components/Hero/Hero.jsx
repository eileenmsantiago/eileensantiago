import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Blob from '../Blob/Blob';
 
const Hero = (props) => {

    const { pageTitle, heading, description, showEmail, quote } = props;
    return(
        <Container>
            <div className="hero">
                <Heading className="hero__title" level="h1" style="h5" weight="bold">
                    {pageTitle}
                </Heading>
                <div className="row">   
                    <div className="col-md-6">
                        <Heading level="h2" style="h1" weight="bold">
                            {heading}
                        </Heading>
                        <Paragraph className="hero__description" size="sm" weight="regular" color="black">
                            {description}
                        </Paragraph>
                        {showEmail ?
                            <Paragraph size="sm" weight="regular" color="black">
                                Say hello at <a className="footer__email-link" href="mailto:eileenmvs@gmail.com">eileenmvs@gmail.com</a>
                            </Paragraph>
                        : null }
                    </div>
                    <div className="col-md-6 hero__quote-container">
                        <Blob/>
                        <Paragraph size="xl" weight="regular" color="black-purple">
                            {quote}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero