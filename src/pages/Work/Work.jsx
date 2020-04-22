import React from 'react'
import Hero from '../../components/Hero/Hero';
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph';
import Container from '../../components/Container/Container';


const Work = (props) => {

    const {projects} = props;
    return(
        <>
            <Hero 
                pageTitle="A Portfolio" 
                heading="by Eileen"
                description="A systems thinker, based in Toronto, who uses design & code to strategize in creating digital product solutions"
                showEmail = {true}
            />
            <Container>
                <img src="/assets/scroll.svg" className="divider"/>
                {
                    projects.map((project, index) => {
                        return (
                            <section className="projects">
                                <div className="row projects__container" style={{flexDirection: index % 2 == 1 ? 'row-reverse' : undefined}}>
                                    <div className="col-md-6">
                                        <img className="projects__container-image" src={project.tileImg}/>
                                    </div>
                                    <div className="col-md-6 project__container-content">
                                        <div className="wrapper">
                                            <Heading level="h3" style="h2">{project.title}</Heading>
                                            <Paragraph className="description" size="reg" weight="regular" color="grey">{project.description}</Paragraph>
                                            <Paragraph size="sm" weight="bold" color="grey">{project.tags}</Paragraph>
                                            <a href={project.route} className="cta">
                                                <Paragraph size="sm" weight="md" weight="bold" color="black">View More</Paragraph>
                                                <img src="/assets/arrow.svg"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })
                }
            </Container>
        </> 
    );
}

export default Work;