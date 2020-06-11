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
const skillsData = [
    {
        title: "Design",
        description: "Product (UX/UI), Visual Design, Interaction Design, Typograpy, Sketching + Illustration, Wireframing, Prototyping, Usability Testing, Visual Design, Design Systems, & Brand Identity"
    },
    {
        title: "Development",
        description: "Front-end & back-end development, web design + development, databases, CMS, Interactive Coding"
    },
    {
        title: "Tools",
        items: [
            {
                subTitle: "Design",
                description: "Sketch, Figma, and InVision for Prototyping, Adobe Creative Suite"
            }, 
            {
                subTitle: "Frameworks + Libraries",
                description: "ReactJS, Bootstrap, VueJS, ThreeJS, Node.js, PHP, MySQL + NoSQL"
            }, 
            {
                subTitle: "Tech Stacks",
                description: "Git, WordPress, MongoDB, cPanel, REST APIs, npm, Sourcetree, Wordpress"
            }
        ],
    }
]

const statusData = [
    {
        title: "DESIGN",
        description: "Taking a UX course on SkillShare to work on my case study building skills. "
    },
    {
        title: "DEVELOPMENT",
        description: "Learning some of the best practices for web design + development like polishing up some of my old projects to incorporate + utilize the BEM methodology."
    },
    {
        title: "READING",
        description: "Recently finished  The Lost Symbol - Dan Brown. Currently starting It Ends with Us - Colleen Hoover."
    },
    {
        title: "BAKING + HEALTH + SHOWS",
        description: [
            "Trying to perfect my Levain-like cookie recipe!",
            "My every day goal is to drink plenty of water + green smoothies",
            "Recently finished The Last Kingdom, and I’m Uthred-deprived but I’m starting Ozark!"
        ]
    }
]
const About = (props) => {

    return(
        <>
        <section>
            <Hero
                pageTitle="About"
                heading="Eileen Santiago"
                // description="Aiming to utilize experiences working in the health sector, in nursing, and fusing it with visual and technical creativity to solve product problems."
                quote="A designer who builds meaningful interactions & aims to strengthen the bridge between design and development. "
            />
        </section>
        <section className="about">
            <Container width="sm" className="about--wrapper">
                <Paragraph className="about__heading" size="lg" weight="semi" color="black">
                    I’m a design systems thinker, 
                </Paragraph>
                <div className="about__content">
                    <FadeIn>
                        <Paragraph className="about__content-statement" size="sm" weight="reg" color="black">
                        based in Toronto. I recently completed a post-graduate certificate in Interactive Media Management (IMM) at Sheridan College where I furthered my skills in wireframing, prototyping, and building interactive web applications. To learn more about me, check out my <a className="custom-link--blue" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf">resume</a> ~
                        </Paragraph>
                    </FadeIn>
                    <div className="about__content-wrapper">
                        <Heading level="h3" style="h5" color="black">
                            From nursing to 
                        </Heading>
                        <Heading className="heading-border" level="h4" style="h4" color="black">
                            design & development 
                        </Heading>
                        <FadeIn>
                            <Paragraph className="about__content-text" size="sm" weight="reg" color="black">
                                I questioned where and how can I make sense of my health sciences, in nursing, background benefit me as an aspiring designer? The iterative process, during my practice and education, of <strong>assessing, diagnosing, planning, implementing, & evaluating</strong> patient-centered care situations that help me to further understand and work towards <strong>creating optimal digital solutions.</strong>
                            </Paragraph>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </section>
            {/* <section className="about-skills">
                <Container bgColor="grey">
                    <div className="row about-skills--wrapper">
                        <div className="col-md-4">
                            {
                                skillsData.map(skills => (
                                    <>
                                        <Heading className="about-skills__heading" level="h3" style="h4">
                                            {skills.title}
                                        </Heading>
                                        <Paragraph className="about-skills__items" weight="reg" color="black">
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
            <Container bgColor="grey">
                <section className="about-skills">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <Heading className="about-skills__title" level="h3" style="h1" color="black">
                                Skills
                            </Heading>
                            <Heading className="about-skills__title" level="h3" style="h1" color="black">
                                & Tools
                            </Heading>
                        </div>
                        <div className="col-sm-12 col-md-8 about-skills__content">
                            {skillsData.map(skillsTools => {
                                return (
                                <FadeIn>
                                    <Section heading={skillsTools.title}>
                                        <div className="about-skills--wrapper">
                                            {skillsTools.description ? 
                                                <Paragraph className="about-skills__items" size="sm" weight="reg" color="black">
                                                    {skillsTools.description}
                                                </Paragraph> 
                                            : (
                                                <>
                                                    {skillsTools.items.map(item => (
                                                        <>
                                                            <div id="tools-block">
                                                                <Heading className="about-skills__heading" level="h4" style="h5" color="black">
                                                                    {item.subTitle}
                                                                </Heading>
                                                                <Paragraph className="about-skills__items" size="sm" weight="reg" color="black">
                                                                    {item.description}
                                                                </Paragraph> 
                                                            </div>
                                                        </>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    </Section>
                                </FadeIn>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </Container> 
            <Container>
                <section id="status">
                    <div className="row block-four">
                        {statusData.map(item => (
                            <>
                                <div className="col-sm-6 col-md-3">
                                    <Heading level="h4" style="h6" color="grey-light">{item.title}</Heading>
                                    <Paragraph size="sm" weight="reg" color="black">{item.description}</Paragraph>
                                </div>
                            </>
                        ))}
                    </div>
                </section>
                <section id="blurb-collab">
                    <Paragraph size="md" weight="reg" color="black">
                        Let's collaborate together! <a className="custom-link--blue" href="mailto:eileenmvs@gmail.com"> eileenmvs@gmail.com</a> 
                    </Paragraph>
                    <Paragraph>
                        Or check out my <a className="custom-link--blue" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf">resume</a> 
                    </Paragraph>
                </section>
            </Container>
        </>
    )
}

export default About;