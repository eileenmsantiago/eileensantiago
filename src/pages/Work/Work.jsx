import React from 'react'
import Hero from '../../components/Hero/Hero';
import Heading from '../../components/Heading/Heading'
import Paragraph from '../../components/Paragraph/Paragraph';
import Container from '../../components/Container/Container';
import FadeIn from '../../components/FadeIn/FadeIn';


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
                            <FadeIn>

                                <article className="projects">
                                        <div className="row projects__container" style={{flexDirection: index % 2 == 1 ? 'row-reverse' : undefined}}>
                                            <div className="col-md-6">
                                                <a href={project.route} className="cta e-nav__link" >   
                                                    <img className="projects__container-image" src={project.tileImg}/>
                                                </a>
                                            </div>
                                            <div className="col-md-6 projects__container-content">
                                                <div className="projects__container-content-wrapper">
                                                    <a href={project.route} className="cta e-nav__link" >   
                                                        <Heading className="project__container--header" level="h3" style="h2">{project.title}</Heading>
                                                    </a>
                                                    <Paragraph size="reg" weight="regular" color="grey">
                                                        {project.description}
                                                    </Paragraph>
                                                    <div className="description">
                                                        <Paragraph className="tags" size="sm" weight="bold" color="grey">
                                                            {project.tags.map(tag => (
                                                                <>
                                                                    {tag} 
                                                                </>
                                                            ))}
                                                        </Paragraph>
                                                        <a href={project.route} className="cta e-nav__link" >   
                                                            <Paragraph size="sm" weight="md" weight="bold" color="black">View More</Paragraph>
                                                            <img className="cta-icon" src="/assets/arrow.svg"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </article>
                            </FadeIn>
                        );
                    })
                }
            </Container>
        </> 
    );
}

export default Work;