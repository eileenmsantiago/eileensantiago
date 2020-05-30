import React from 'react';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import HeaderList from '../HeaderList/HeaderList';

const PaperSpace = (props) => {

    const { project } = props;
    
    return (
        <>
            <Container>
                <div className="paper-space">
                    <div className="paper-space__container" id="ps-process">
                        <Heading level="h3" style="h5" weight="semi" >DESIGN PROCESS</Heading>
                        <HeaderList list={project.process}></HeaderList>
                    </div>
                    {/* <img className="paper-space__image" src="/assets/PaperSpace-features.png"></img> */}
                </div>
            </Container>
            <Container bgHex={project.bgHex}>
                <div className="row project-content__wrapper">
                    <div className="col project-content__block">
                        <Heading level="h3" style="h3" weight="bold" className="project-content__heading">Understanding</Heading>
                    </div>
                    <div className="col col-lg-7 project-content__block" >
                        <div className="project-content__detail">
                            <Heading level="h4" style="h6" color="grey" className="project-content__heading">THE PROBLEM</Heading>
                            <Paragraph size="sm" weight="regular" color="black">
                                {project.problem.map(paragraph => (
                                    <>
                                        {paragraph}
                                        <br></br>
                                    </>
                                ))}
                            </Paragraph>
                        </div>
                        <div className="project-content__detail">
                            <Heading level="h4" style="h6" color="grey" className="project-content__heading">THE SOLUTION</Heading>
                            <Paragraph size="sm" weight="regular" color="black">{project.solution}</Paragraph>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row project-content__wrapper">
                    <div className="col project-content__block">
                        <Heading level="h3" style="h3" weight="bold" className="project-content__heading">Design <br></br>Challenge</Heading>
                    </div>
                    <div className="col-md-auto"></div>
                    <div className="col col-lg-8 project-content__block" >
                        <div>
                            <Paragraph size="lg" weight="lt" color="brand-ps-brown">
                                <strong>How might we</strong>
                                {project.challenge}
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default PaperSpace;