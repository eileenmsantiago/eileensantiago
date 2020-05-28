import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Blob from '../Blob/Blob';
 
const Hero = (props) => {

    const { pageTitle, heading, description, showEmail, quote } = props;
    return(
        <>
        <section className="hero"> 
            <Heading className="hero__title" level="h1" style="h5" weight="bold">
                {pageTitle}
            </Heading>
            <div className="row">   
                <div className="col-md-5">
                    <Heading level="h2" style="h1" weight="bold">
                        {heading}
                    </Heading>
                    <Paragraph className="hero__description" size="sm" weight="regular" color="black">
                        {description}
                    </Paragraph>
                    {showEmail ?
                        <Paragraph className="hero__description-email" size="sm" weight="regular" color="black">
                            Say hello at <a className="custom-link" href="mailto:eileenmvs@gmail.com">eileenmvs@gmail.com</a>
                        </Paragraph>
                    : null }
                </div>
                <div className="col-md-7 hero__container">
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
        </section>
        </>
    )
}

export default Hero