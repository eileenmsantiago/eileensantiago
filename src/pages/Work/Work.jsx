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
            <section id="hero">
                <Hero 
                    pageTitle="A Portfolio" 
                    heading="by Eileen"
                    description="Currently a User Experience Developer with Raise.dev. With a Health Sci background, I bring thinking in systems to design and code. I strive to make user-centric digital products that are meaningful + intuitive."
                    showEmail = {true}
                />
            </section>

            {projects.map((project, index) => {
                return (
                    <section id={`projects-container--${project.id}`}>
                        <Container>
                            <FadeIn>
                                <article className="projects">
                                    <div className="row projects__container" style={{flexDirection: index % 2 == 1 ? 'row-reverse' : undefined}}>
                                        <div className="col-md-6">
                                            <a href={project.route} className="cta" >   
                                                <img className="projects__container-image" src={project.tileImg}/>
                                            </a>
                                        </div>
                                        <div className="col-md-6 projects__container-content">
                                            <div className="projects__container-content-wrapper">
                                                <a href={project.route}>   
                                                    <Heading className="project__container--header" level="h2" style="h1">{project.title}</Heading>
                                                </a>
                                                <Paragraph size="sm" color="black">
                                                    {project.description}
                                                </Paragraph>
                                                <div className="description">
                                                    <Heading className="tags" level="h4" style="h5" color="grey">
                                                        {project.tags.map(tag => (
                                                            <>
                                                                {tag} 
                                                            </>
                                                        ))}
                                                    </Heading>
                                                    <a href={project.route} className="es-button es-button--primary">   
                                                        View Project ↗︎
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </FadeIn>
                        </Container>
                    </section>
                );
            })}
        </> 
    );
}

export default Work;