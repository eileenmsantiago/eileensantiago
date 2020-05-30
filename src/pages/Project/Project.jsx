import React from 'react';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import ProjectHero from '../../components/ProjectHero/ProjectHero';
import Paragraph from '../../components/Paragraph/Paragraph';
import CommentContainer from '../../components/CommentContainer/CommentContainer';

const Project = (props) => {

    const {project, children} = props;

    return (
        <>
            <ProjectHero
                pageTitle="Project"
                bgHex={project.bgHex}
                heading={project.title}
                imagePath={project.heroImg}
                tagline={project.tagline}
            />
            <Container>
                <section className={`project ${project.id}`}>
                    <div className="project-overview">
                        <Heading level="h1" style="h5" weight="semi" className="project-overview__header">PROJECT OVERVIEW</Heading>
                        <div className="row project-overview__wrapper">
                            <div className="col col-sm-12 col-md-12 col-lg-4 project-overview__logo">
                                <img src={project.logoImg}></img>
                            </div>
                            {/* <div className="col-md-auto"></div> */}
                            <div className="col col-sm-12 col-md-12 col-lg-8 project-overview__container">
                                <Paragraph className="project-overview__description" size="lg" weight="regular" color={`${project.paraColor}`}>{project.description}</Paragraph>
                                <div className="row category-list">
                                    <div className="col-sm-12 col-md-6 category-group">
                                        <Heading level="h4" style="h6" color="grey-light">ROLE</Heading>
                                        <Paragraph size="sm" weight="regular" color="black">{project.role}</Paragraph>
                                    </div>
                                    <div className="col-sm-12 col-md-6 category-group">
                                        <Heading level="h4" style="h6" color="grey-light">PLATFORM + TIMELINE</Heading>
                                        <Paragraph size="sm" weight="regular" color="black">{project.platform}</Paragraph>
                                        <Paragraph size="sm" weight="regular" color="black">{project.timeline}</Paragraph>
                                    </div>
                                </div>
                                <div className="row category-list">
                                    <div className="col-sm-12 col-md-6 category-group">
                                        <Heading level="h4" style="h6" color="grey-light">TOOLS</Heading>
                                        <Paragraph size="sm" weight="regular" color="black">{project.tools}</Paragraph>
                                    </div>
                                    <div className="col-sm-12 col-md-6 category-group">
                                        <Heading level="h4" style="h6" color="grey-light">TEAM</Heading>
                                        <Paragraph size="sm" weight="regular" color="black">
                                            {project.team.map(member => (
                                                <>
                                                    {member}
                                                    <br></br>
                                                </>
                                            ))}
                                        </Paragraph>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
                {children}
            <Container>
                <CommentContainer/>
            </Container>
        </>
    )
}

Project.defaultProps = {
    project: {}
}

export default Project;