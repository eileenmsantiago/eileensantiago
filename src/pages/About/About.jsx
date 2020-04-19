import React from 'react'
import Section from '../../components/Section/Section';
import SectionList from '../../components/SectionList/SectionList';
import Heading from '../../components/Heading/Heading';
import Container from '../../components/Container/Container';
import Paragraph from '../../components/Paragraph/Paragraph';
import Hero from '../../components/Hero/Hero';
 
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
        description: "Product design, mobile + web UI/UX, wireframing, rapid prototyping, sketching + illustration, user testing, typography, data visualization, and branding and creating design systems"
    },
    {
        title: "Development",
        description: "HTML & CSS, JavaScript, React.js, Node.js, MongoDB, PHP, MySQL, Zim.js"
    },
    {
        title: "Tools",
        description: "Sketch, Figma, and InVision for Prototyping Adobe Creative Suite Illustrator for digital illustrations, Zeplin, Git, WordPress, MongoDB, cPanel, REST APIs, npm, Sourcetree, AJAX, Wordpress, Sass"
    }
]
const About = (props) => {

    return(
        <>
            <Hero
                pageTitle="About"
                heading="Eileen Santiago"
                quote="I’m a curious conceptualist, creator, problem-solver, & an ideator."
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
                        {skillsToolsData.map(skillsTools => {
                            return (
                                <Section noGutter heading={skillsTools.title}>
                                    <Paragraph size="reg" weight="regular" color="white">
                                        {skillsTools.description}
                                    </Paragraph> 
                                </Section>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About;