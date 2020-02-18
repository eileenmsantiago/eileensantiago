import React from 'react'
import Hero from '../ui/Hero/Hero';
import Container from '../ui/Container/Container';
import Section from '../ui/Section/Section';
import SectionList from '../ui/SectionList/SectionList';
import Heading from '../ui/Heading/Heading';
 
const educationData = [
    {
        title: "Interactive Media Management",
        subheading: "Expected 2020",
        description: "Sheridan College"
    },
    {
        title: "Bachelor of Science in Nursing",
        subheading: "2019",
        description: "York University"
    },
]

const experienceData = [
    {
        title: "Graphic & Web Designer",
        heading: "Dahdaleh Institute of Global Health Research (DIGHR)",
        subheading: "October 2018 - June 2019",
        description: "Created graphics, concepts, and other communication materials for Institution’s branding and events. Redesigned and developed the UI of the website to increase site visitors."
    },
    {
        title: "Customer Technical Support",
        heading: "Naborly",
        subheading: "2018",
        description: "Analyzed patterns from client’s technical inquires and proposed product improvements, including the UX/UI design for the app’s user dashboard.  "
    },
]
const skillsToolsData = [
    {
        title: "Design",
        description: "product design, mobile + web UI/UX, wireframing, rapid prototyping, sketching + illustration, user testing, typography, data visualization, and branding and creating design systems"
    },
    {
        title: "Development",
        description: "HTML & CSS, JavaScript, React, Node.js, MongoDB, PHP, MySQL "
    },
    {
        title: "Tools",
        description: "Sketch, Figma, and InVision for Prototyping Adobe Creative Suite Illustrator for digital illustrations, Zeplin, Git, WordPress"
    }
]
const About = () => {
    return(
        <>
            <Hero
                pageTitle="About"
                heading="Eileen Santiago"
                description="A detail-oriented designer who loves developing intuitive digital web experiences. Aiming to utilize experiences working in the health sector, in nursing, and fusing it with visual and technical creativity to solve product problems."
            />
            <Container bgColor="grey">
                <Section heading="Education">
                    <SectionList items={educationData}/>
                </Section>
            </Container>
            <Container>
                <Section heading="Experience"> 
                    <SectionList items={experienceData}/>
                </Section>
            </Container>
            <Container bgColor="blue">
                <div className="row">
                    <div className="col-md-4">
                        <Heading level="h3" style="h1">
                            Skills <br/>
                            & Tools
                        </Heading>
                    </div>
                    <div className="col-md-8">
                        <SectionList items={skillsToolsData}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About;