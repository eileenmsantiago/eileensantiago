import React from 'react'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
 
const ProjectHero = (props) => {

    const { pageTitle, heading, description, imagePath, bgHex } = props;
    return(
        <Container className="project-hero" bgHex={bgHex}>
            <Heading className="project-hero__title" level="h1" style="h5" weight="bold" color="brand-ps-brown">
                {pageTitle}
            </Heading>
            <div className="row">   
                <div className="col-md-6">
                    <Heading className="project-hero__heading" level="h2" style="h1" weight="bold" color="brand-ps-brown">
                        {heading}
                    </Heading>
                    <Paragraph className="project-hero__description" size="lg" weight="regular" color="brand-ps-brown">
                        {description}
                    </Paragraph>
                </div>
                <div className="col-md-6 project-hero__image-container">
                    <img src={imagePath} alt="mockup image"/>
                </div>
            </div>
        </Container>
    )
}

export default ProjectHero;