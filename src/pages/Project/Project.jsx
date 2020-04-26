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
                description={project.description}
            />
            <Container>
                <div className="project-overview">
                    <Heading level="h1" style="h4" className="project-overview__section">PROJECT OVERVIEW</Heading>
                    <div className="row project-overview__container">
                        <div className="col-md-4 project-overview__col-logo">
                            <img src={project.logoImg}></img>
                        </div>
                        <div className="col-md-8 project-overview__col-header">
                            <Paragraph className="header" size="lg" weight="regular" color="brand-ps-brown-light">{project.header}</Paragraph>
                            <div className="col-containers">
                                <div className="col-sm-4 category-list">
                                    <Heading level="h4" style="h4">MY ROLE</Heading>
                                    <Paragraph size="sm" weight="regular" color="black">{project.role}</Paragraph>
                                </div>
                                <div className="col-sm-4 category-list">
                                    <Heading level="h4" style="h4">TIMELINE</Heading>
                                    <Paragraph size="sm" weight="regular" color="black">{project.timeline}</Paragraph>
                                </div>
                                <div className="col-sm-4 category-list">
                                    <Heading level="h4" style="h4">PLATFORM</Heading>
                                    <Paragraph size="sm" weight="regular" color="black">{project.platform}</Paragraph>
                                </div>
                            </div>
                            <div className="category-list">
                                <Heading level="h4" style="h4">TEAM</Heading>
                                <Paragraph size="sm" weight="regular" color="black">{project.team}</Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container bgHex={project.bgHex} >
                <div className="project-goals">
                    <Heading level="h1" style="h4" className="project-overview__section">PROJECT GOALS</Heading>
                    <div className="category-list">
                        <Heading level="h4" style="h4">USER GOAL</Heading>
                        <Paragraph size="sm" weight="regular" color="black">{project.userGoal}</Paragraph>
                    </div>
                    <div className="category-list">
                        <Heading level="h4" style="h4">DESIGN GOAL</Heading>
                        <Paragraph size="sm" weight="regular" color="black">{project.designGoal}</Paragraph>
                    </div>
                    <div className="category-list">
                        <Heading level="h4" style="h4">PRODUCT GOAL</Heading>
                        <Paragraph size="sm" weight="regular" color="black">{project.productGoal}</Paragraph>
                    </div>
                </div>
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