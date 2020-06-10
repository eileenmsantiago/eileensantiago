import React from 'react';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import HeaderList from '../HeaderList/HeaderList';
import Paragraph from '../Paragraph/Paragraph';

const GlucoCheck = (props) => {

    const { project } = props;

    return (
        <>
            <Container bgHex={project.bgHex}>
                <section className="project__introduction">
                    <div className="row project__content-wrapper">
                        <div className="col project__content-container">
                            <Heading className="project__content-heading" level="h3" style="h2" weight="bold">The Power of Health + Technology</Heading>
                        </div>
                        <div className="col-md-auto"></div>
                        <div className="col-lg-7 project__content-container" >
                            <div className="project__content-block">
                                <Heading level="h4" style="h6" color="grey" className="project__header">RESEARCH + DISCOVERY </Heading>
                                <Heading level="h5" style="h4" color="black" weight="lt">Leveraging current tools and technology</Heading>
                                <Paragraph size="sm" weight="reg" color="black">
                                    One of the biggest technological advancements in blood glucose management is the continuous glucose monitors (CGM). A CGM automatically tracks blood glucose levels, aka blood sugars, for a continuous duration of time (National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK), June 2017). A CGM contains a small sensor that is inserted underneath your skin around he abdomen or arm. The sensor tests glucose from the interstitial fluid every few minutes and is sent wirelessly to a monitoring device. 
                                    <br></br>
                                    <br></br>
                                    Unique features + benefits of a CGM are useful with doing reg day-to-day activities and they include:
                                    <br></br>
                                    <br></br>
                                    <div className="project__content--list">
                                        <ol id="project__list--item">
                                            <li>An alarm that indicates if the BG levels are going low or too high</li>
                                            <li>Download data easily ready to be viewed and/or shared with your endocrinologist and other healthcare providers.</li>
                                            <li>Improved and better diabetes management of BG levels</li>
                                            <li>Fewer low BG emergencies</li>
                                            <li>Fewer finger pricks</li>
                                            <li>Visual overview of BG trends</li>
                                        </ol>
                                    </div>
                                </Paragraph>
                            </div>
                            {/* <div className="project__content-block">
                                <Heading level="h4" style="h6" color="grey" className="project__content__heading">PROBLEM SPACE</Heading>
                                <Paragraph size="sm" weight="reg" color="black">
                                    {project.problem.map(paragraph => (
                                        <>
                                        {paragraph}
                                        <br></br>
                                        <br></br>
                                        </>
                                    ))}
                                </Paragraph>
                            </div> */}
                        </div>
                    </div>
                </section>
            </Container>
            <Container>
                {/* <section className="project-insights">
                    <div className="row project__content-wrapper">
                        <div className="col project__content-container">
                            <Heading level="h3" style="h5" weight="semi" className="project__content__heading" color="black">CURRENT MARKET ANALYSIS</Heading>
                            <Paragraph className="project__content__para" size="xs" weight="lt" color="black">
                                Insights on diabetic technologies used for self-management
                            </Paragraph>
                        </div>
                        <div className="col-md-auto"></div>
                        <div className="col-lg-7 project__content-container">
                            <div className="project__content-block">
                                <Heading level="h4" style="h4">Dexcom</Heading>
                                <Paragraph size="sm" weight="reg" color="black">
                                    <a href="https://www.dexcom.com/en-CA/en-ca-dexcom-g6-cgm-system">Dexcom </a>
                                    is a continuous glucose monitoring (CGM) device that can track and visually display glucose levels. This CGM is able to send data to iPhones and Apple Watch for users to see their blood glucose (BG) trends.
                                </Paragraph>
                            </div>
                            <div className="project__content-block">
                                <Heading level="h4" style="h4">One Drop</Heading>
                                <Paragraph size="sm" weight="reg" color="black">
                                    <a href="https://onedrop.today/">One Drop </a>
                                    is another CGM kit that combines diabetes technology with Apple's Watch to work with Apple user's lifestyle. One Drop includes a blood glucose meter where users input a sample of their blood and is easily retrieved and transmitted in five seconds to user's iOS device. With the app, users are able to view all their glucose data and analytics at a glance (iPhone and/or Apple Watch). It also lets users track their blood glucose, food input, medication, and fitness and activity. 
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section id="project-challenge">
                    <div className="row project__content-wrapper">
                        <div className="col-lg-5 project__content-container">
                            <Heading level="h3" style="h3" weight="bold" className="project__content__heading">Understanding</Heading>
                        </div>
                        <div className="col-lg-7 project__content-container">
                            <div className="project__content-block">
                                <Heading level="h4" style="h6" color="grey" className="project__header">THE PROBLEM</Heading>
                                <Paragraph size="sm" weight="reg" color="black">
                                    {project.problem.map(paragraph => (
                                        <>
                                        {paragraph}
                                        <br></br>
                                        <br></br>
                                        </>
                                    ))}
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className="row project__content-wrapper">
                        <div className="col project__content-container">
                            <Heading level="h3" style="h2" weight="semi" className="project__content__heading">Challenge</Heading>
                            <Paragraph className="project__content__para" size="xs" weight="lt" color="black">
                                The general rule for Smartwatch interactions are 2-3 seconds for information and 8-10 for app interactions and glanceability is key.
                            </Paragraph>
                        </div>
                        <div className="col-md-auto"></div>
                        <div className="col-lg-7 project__content-container">
                            <div className="project__content-block">
                                <Paragraph size="sm" weight="reg" color="black">
                                    Using the 8-6-4-2 rapid prototyping method to design an application for a Smartwatch. I sketched for 8 minutes, 6 minutes, 4 minutes and held 2 minutes feedback sessions inbetween.
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                    <div className="row project__content-wrapper">
                        {/* <Paragraph className="project-para__block--lg" size="lg" weight="lt" color="black">
                            Creating engagement and personalization is mandatory for the success of digital products. This is a way to provide real solutions to everyday problems. 
                            <strong>How might we</strong>
                            {project.hmw}
                        </Paragraph> */}
                    </div>
                </section>
            </Container>
        </>
    )
}
export default GlucoCheck;