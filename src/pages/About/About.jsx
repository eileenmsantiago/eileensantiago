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
        title: "Tools + Tech Stack",
        items: [
            {
                subTitle: "DESIGN",
                description: "Sketch, Figma, and InVision for Prototyping, Adobe Creative Suite"
            }, 
            {
                subTitle: "FRAMEWORKS + LIBRARIES",
                description: "ReactJS, Bootstrap, VueJS, ThreeJS, Node.js, PHP, MySQL + NoSQL"
            }, 
            {
                subTitle: "TECH STACKS",
                description: "Git, WordPress, MongoDB, cPanel, REST APIs, npm, Sourcetree, Wordpress"
            }
        ],
    }
]

const statusData = [
    {
        title: "DESIGN",
        description: [
            "Taking a Design Thinking course on IDF to work on my case study building skills. "
        ]
    },
    {
        title: "DEVELOPMENT",
        description: [
            "Learning some of the best practices for web design + development like polishing up some of my old projects to incorporate + utilize the BEM methodology."
        ]
    },
    {
        title: "READING",
        description: [
            "Recently finished  The Lost Symbol - Dan Brown. Currently 📖 It Ends with Us - Colleen Hoover + Factfulness - Hans Rosling."
        ]
    },
    {
        title: "BAKING + SHOWS",
        description: [
            "Trying to perfect my Levain-like cookie recipe!",
            "Recently finished The Last Kingdom, and now I’m Uthred-deprived. Starting Ozark, Hunters and Upload :}"
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
                quote="A design systems thinker, who uses design and code to make user-centric digital products that are meaningful + intuitive"
            />
        </section>
        <section className="about">
            <Container className="about__wrapper">
                <div className="row">
                    <div className="col-lg-5">
                        <img src="/assets/EileenSantiago.jpeg"></img>
                    </div>
                    <div className="col-lg-7 block-content">
                        <div id="about-me__heading">
                            <Heading className="header__1--top" level="h3" style="h4" color="black">
                                A Toronto based
                            </Heading>
                            <Heading className="header__2--bottom" level="h3" style="h1" color="black">
                                User Experience Developer
                            </Heading>
                        </div>
                        <div className="about__container">
                            <div className="content" id="about-description__content">
                                <Paragraph size="sm" weight="reg" color="black">
                                I completed a Interactive Media Management program at Sheridan College where I furthered my skills in design + development. I’ve built a handful of fun, meaningful, and interactive digital experiences - check out some of<a className="custom-link" href="/"> my best work</a>!
                                </Paragraph>
                                <Paragraph size="sm" weight="reg" color="black">
                                    Prior to this, I studied health sciences, in nursing, where now I can proudly say I fuse my knowledge and experience in the health sector alongside with my technical creativity to build experiences that are digitally intuitive.
                                </Paragraph>
                                <Paragraph size="sm" weight="reg" color="black">
                                    My passion for understanding people accompanies my approach to product issues with simple design solutions. I'm a creative thinker who embraces data to help drive continuous improvements to projects I'm working on. When I’m not designing you can catch me <a className="custom-link" href="#status">learning/ doing</a> a few other things! 
                                </Paragraph>
                            </div>
                            <div className="row about__cta">
                                <div className="col-lg-7">
                                    <a className="es-button es-button--primary" href="https://calendly.com/eileensantiago/30min">
                                        <Paragraph size="sm" weight="reg">GET IN TOUCH</Paragraph>
                                    </a>
                                </div>
                                <div className="col-lg-5">
                                    <div className="about__cta--secondary">
                                        <div>
                                            <Paragraph size="sm" weight="reg">
                                                Or check out <a className="custom-link" target="_blank" href="/assets/Resume-EileenSantiago-2020.pdf"> my resume</a> 
                                            </Paragraph>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <div class="block-content" id="skills-tools__heading">
                        <Heading className="header__1--top" level="h3" style="h4" color="black">
                            Skills & Tools
                        </Heading>
                        <Heading className="header__2--bottom" level="h3" style="h2" color="black">
                            I’ve learned so far
                        </Heading>
                    </div>
                    <div className="row">
                        {skillsData.map(skillsTools => {
                            return (
                                <div className="col-sm-12 col-md-12 col-lg-4 about-skills__content block-content">
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
                                                                    <Heading className="about-skills__heading" level="h4" style="h5" weight="semi" color="grey-light">
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
                                </div>
                            )
                        })}
                    </div>
                </section>
            </Container> 
            <Container>
                <section id="status">
                    <div className="row block-four">
                        <div className="col-lg-6 block-content" id="currently">
                            <Heading className="header__1--top" level="h3" style="h4" color="black">
                                What I’m focused on
                            </Heading>
                            <Heading className="header__2--bottom" level="h3" style="h2" color="black">
                                currently,
                            </Heading>
                        </div>
                        <div className="col-lg-6" >
                            <FadeIn>
                                {statusData.map(item => (
                                    <>
                                        <div className="break status-description">
                                            <Heading level="h4" style="h6" weight="semi" color="grey-light">{item.title}</Heading>
                                            {item.description.map(statusItem => (
                                                <Paragraph size="sm" weight="reg" color="black">{statusItem}</Paragraph>
                                            ))}
                                        </div>
                                    </>
                                ))}
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default About;