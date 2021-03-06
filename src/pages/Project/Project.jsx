import React from 'react';
import Container from '../../components/Container/Container';
import Heading from '../../components/Heading/Heading';
import ProjectHero from '../../components/ProjectHero/ProjectHero';
import Paragraph from '../../components/Paragraph/Paragraph';
import CommentContainer from '../../components/CommentContainer/CommentContainer';
import HeaderList from '../../components/HeaderList/HeaderList';

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
                    <div className="project__wrapper">
                        <Heading level="h1" style="h5" weight="semi" color="grey" className="project__header">PROJECT OVERVIEW</Heading>
                        <div className="row project__container">
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <img className="project__logo" src={project.logoImg}></img>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-7">
                                <Paragraph className="project__description" size="md" color="black">{project.description}</Paragraph>
                                <div className="row project__category-list">
                                    <div className="col-sm-12 col-md-6 project__category-item">
                                        <Heading level="h4" style="h5" color="grey">ROLE</Heading>
                                        <Paragraph size="sm" weight="reg" color="black">{project.role}</Paragraph>
                                    </div>
                                    <div className="col-sm-12 col-md-6 project__category-item">
                                        <Heading level="h4" style="h5" color="grey">PLATFORM + TIMELINE</Heading>
                                        <Paragraph size="sm" weight="reg" color="black">
                                            {project.platform}
                                            <br></br>
                                            {project.timeline}
                                        </Paragraph>
                                    </div>
                                </div>
                                <div className="row category-list">
                                    <div className="col-sm-12 col-md-6 project__category-item">
                                        <Heading level="h4" style="h5" color="grey">TOOLS</Heading>
                                        <Paragraph size="sm" weight="reg" color="black">{project.tools}</Paragraph>
                                    </div>
                                    <div className="col-sm-12 col-md-6 project__category-item">
                                        <Heading level="h4" style="h5" color="grey">TEAM</Heading>
                                        <Paragraph size="sm" weight="reg" color="blue">
                                            {project.team.map(member => (
                                                <>
                                                    <a className="custom-link" href={member.memberSite}>{member.memberName}</a>
                                                    <br></br>
                                                </>
                                            ))}
                                        </Paragraph>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="project__container">
                        <Paragraph className="project-block" size="md" weight="lt" color="black">
                            {project.descriptionPara}
                        </Paragraph>
                    </div> */}
                </section>
                <section>
                    <div className="project__container" id="project-process">
                        <div className="project-process__container" id="process">
                            <Heading level="h1" style="h5" weight="semi" color="grey" className="project__header">PROCESS</Heading>
                            <HeaderList list={project.process}></HeaderList>
                        </div>
                    </div>
                </section>
            </Container>
                {children}
            {/* <Container>
                <section id="comment">
                    <CommentContainer/>
                </section>
            </Container> */}
        </>
    )
}

Project.defaultProps = {
    project: {}
}

export default Project;