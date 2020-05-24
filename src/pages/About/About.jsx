import React from 'react'
import Section from '../../components/Section/Section';
import SectionList from '../../components/SectionList/SectionList';
import Heading from '../../components/Heading/Heading';
import Container from '../../components/Container/Container';
import Paragraph from '../../components/Paragraph/Paragraph';
import Hero from '../../components/Hero/Hero';
import FadeIn from '../../components/FadeIn/FadeIn';
 
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
        item: [
            "Wireframing, ", 
            "Prototyping, ", 
            "Sketching + Illustration, ", 
            "Usability Testing, ", 
            "Visual Design, ", 
            "Design Systems, ", 
            "Brand Identity"
        ]
    },
    {
        title: "Development",
        item: [
            "Front-end & back-end development, web design + development, databases, CMS, Interactive Coding"
        ]
    },
    {
        title: "Tools",
        heading: [
            "Design",
            "Frameworks + Libraries",
            "Tech Stacks"
        ],
        item: [
            "Sketch, Figma, and InVision for Prototyping, Adobe Creative Suite",
            "ReactJS, Bootstrap, VueJS, ThreeJS, Node.js, PHP, MySQL + NoSQL",
            "Git, WordPress, MongoDB, cPanel, REST APIs, npm, Sourcetree, Wordpress"
        ]
    }
]

const About = (props) => {

    return(
        <>
        {/* <FadeIn> */}
            <Hero
                pageTitle="About"
                heading="Eileen Santiago"
                // description="Aiming to utilize experiences working in the health sector, in nursing, and fusing it with visual and technical creativity to solve product problems."
                quote="I’m a curious conceptualist, creator, problem-solver, & an ideator."
            />
        {/* </FadeIn> */}
        <section className="about">
            <Container>
                <FadeIn>
                    <Heading className="about__heading" level="h4" style="h3" color="black">
                        I’m a design systems thinker, 
                    </Heading>
                </FadeIn>
                <div className="about__content">
                    <FadeIn>
                        <Paragraph className="about__content-statement" size="md" weight="regular" color="black">
                            based in Toronto. I recently completed a post-graduate certificate on Interactive Media Management (IMM) at Sheridan College where I furthered my skills in wireframing, prototyping, and building & developing interactive digital applications. To learn more about me, have a read through of <a className="custom-link" href="/assets/Resume-EileenSantiago-2020.pdf">my resume</a>
                        </Paragraph>
                    </FadeIn>
                    <div className="about__content-wrapper">
                        <div className="container-heading">
                            <FadeIn>
                                <Heading className="about__content-heading" level="h4" style="h5" color="black">
                                    From nursing to 
                                </Heading>
                                <Heading className="about__content-heading" level="h4" style="h4" color="black">
                                    design & development 
                                </Heading>
                            </FadeIn>
                        </div>
                        <FadeIn>
                            <div className="container-text">
                                I questioned where and how can I make sense of my health sciences, in nursing, background <strong>benefit me as an aspiring designer?</strong> It is through the iterative process, during my clinical rotations, of <strong>assessing, diagnosing, planning, implementing, & evaluating</strong> patient-centered care situations that help me to further understand and work towards <strong>creating optimal digital solutions.</strong>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </section>
            {/* <section className="about-skills">
                <Container bgColor="grey">
                    <div className="row about-skills__wrapper">
                        <div className="col-md-4">
                            {
                                skillsToolsData.map(skills => (
                                    <>
                                        <Heading className="about-skills__heading" level="h3" style="h4">
                                            {skills.title}
                                        </Heading>
                                        <Paragraph className="about-skills__items" weight="regular" color="black">
                                            {skills.item}
                                        </Paragraph>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </section> */}
            {/* <Container bgColor="grey">
                <Section heading="Education">
                    <SectionList items={educationData}/>
                </Section>
            </Container>
            <Container>
                <Section heading="Experience"> 
                    <SectionList items={experienceData}/>
                </Section>
            </Container> */}
            <Container bgColor="grey" className="about-skills">
                <div className="row">
                    <div className="col-md-4">
                        <FadeIn>    
                                <Heading className="about-skills__title" level="h3" style="h1" color="white">
                                    Skills <br/>
                                    & Tools
                                </Heading>
                        </FadeIn>
                    </div>
                    <div className="col-md-8 about-skills__content">
                        {skillsToolsData.map(skillsTools => {
                            return (
                            <FadeIn>
                                <Section noGutter heading={skillsTools.title}>
                                    <div className="about-skills__wrapper section__content">
                                        <Heading className="about-skills__heading" level="h4" style="h5">
                                            {skillsTools.heading}
                                        </Heading>
                                        <Paragraph className="about-skills__items" size="sm" weight="regular" color="black">
                                            {skillsTools.item}
                                        </Paragraph> 
                                    </div>
                                </Section>
                            </FadeIn>
                            )
                        })}
                    </div>
                </div>
            </Container> 
        </>
    )
}

export default About;