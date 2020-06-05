import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
 
const ProjectHero = (props) => {

    const { pageTitle, heading, tagline, imagePath, bgHex } = props;
    return(
        <Container bgHex={bgHex}>
            <section className="project-hero">
                <Heading className="project-hero__title" level="h1" style="h5">
                    {pageTitle}
                </Heading>
                <div className="row">   
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <Heading className="project-hero__heading" level="h2" style="h1" weight="bold">
                            {heading}
                        </Heading>
                        <Paragraph className="project-hero__description" size="lg" weight="lt">
                            {tagline}
                        </Paragraph>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 project-hero__image">
                        <img src={imagePath} alt="mockup image"/>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default ProjectHero;