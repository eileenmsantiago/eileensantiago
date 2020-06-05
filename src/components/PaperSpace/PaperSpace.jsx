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
                {/* <div className="paper-space__container--long" id="ps-process">
                    <Heading level="h3" style="h5" weight="semi">PROCESS</Heading>
                    <HeaderList list={project.process}></HeaderList>
                </div> */}
                {/* <img className="paper-space__image" src="/assets/PaperSpace-features.png"></img> */}
            </Container>
            <Container bgHex={project.bgHex}>
                <div className="row project__content--wrapper">
                    <div className="col-lg-5 project__content--block">
                        <Heading level="h3" style="h2" weight="semi" className="project__content__heading">Understanding</Heading>
                    </div>
                    <div className="col-lg-7 project__content--block" >
                        <div className="project__content--detail">
                            <Heading level="h4" style="h6" color="grey" className="project__content__heading">THE PROBLEM</Heading>
                            <Paragraph size="sm" weight="reg" color="black">
                                {project.problem.map(paragraph => (
                                    <>
                                        {paragraph}
                                        <br></br>
                                    </>
                                ))}
                            </Paragraph>
                        </div>
                        <div className="project__content--detail">
                            <Heading level="h4" style="h6" color="grey" className="project__content__heading">THE SOLUTION</Heading>
                            <Paragraph size="sm" weight="reg" color="black">{project.solution}</Paragraph>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row project__content--wrapper">
                    <div className="col-lg-5 project__content--block">
                        <Heading level="h3" style="h2" weight="semi" className="project__content__heading">Design <br></br>Challenge</Heading>
                    </div>
                    <div className="col-lg-7 project__content--block" >
                        <Paragraph size="lg" weight="lt" color="black">
                            <strong>How might we</strong>
                            {project.hmw}
                        </Paragraph>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default PaperSpace;