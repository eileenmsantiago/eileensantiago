import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Work from '../../pages/Work/Work';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Resume from '../../pages/Resume/Resume';
import Project from '../../pages/Project/Project';
import PaperSpace from '../PaperSpace/PaperSpace';
import GlucoCheck from '../GlucoCheck/GlucoCheck';
import Covid19 from '../Covid19/Covid19';
import Yodae from '../Yodae/Yodae';
import Nav from '../Nav/Nav';
import { NoMatch } from '../../NoMatch';
import Footer from '../Footer/Footer';

const projects = {
  paperSpace: {
    id: "paper-space",
    route: '/paper-space',
    title: "Paper Space",
    tagline: "A journaling App that visualizes and tracks emotions based on your written entries.",
    description: "PaperSpace is a journaling application that aims to create a space for users to freely write; and through which they can make sense of emotions to gain relief. This app tracks and helps users to be mindful of their emotions through gradient color-coded indicators. This app also offer guided prompts for users who need a kick-starter to write. ",
    tags: [
      "Mobile Development,   ",
      "UX/UI Design,  ",
      "Product Strategy  "
    ],
    heroImg: '/assets/paper-space-hero.png',
    tileImg: "/assets/tile-img-PaperSpace.jpg",
    bgHex: "#FAF5F0",
    paraColor: "brand-ps-brown-light",
    bckgColor: "#FAF5F0",
    logoImg: "/assets/ps-logo-full.svg",
    descriptionPara: "A journaling App that tracks user’s emotions based on their written entries.",
    role: "Front-end & back-end Development, Design Systems, & Project Management",
    timeline: "Jan - Apr 2020 4 months",
    platform: "Mobile iOS",
    tools: "Figma, MERN Stack, Sass Preprocessor, Watson Tone Analyzer API, + MongoDB",
    team: [
      {
        memberName: "Evonne Oby Okoye",
        memberSite: "http://iamoby.com/"
      },
      {
        memberName: "Yang Yang",
        memberSite: "https://yangdesign.ca/"
      }
    ],
    problem: [
      "Students take notes physically or digitally to document new information learnt from school and or to simply take notes of their day-to-day lives. Our group initially ventured off of the idea of note-taking but then questioned if we wanted to take a more personal approach in digital writing. We liked the idea of a digital space to journal. ",
      "By conducting a competitive analysis research of the current market for journaling apps, our group discovered a handful of eye-catching features such as mood tracking. We wanted to expand on the idea but the feature of displaying mood trackers for most lifestyle journaling apps in the current market include emojis or graphical interfaces that for us, didn't quite fit our idea for mood-tracking."
    ],
    solution: "To have a simple digital interface to journal and receive feedback on their entries. To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    hmw: " provide users a digital space where they can write freely and reflect on their emotions in an intuitive way?",
    process: [
      {
        title: "Research",
        descriptionList: [
          "Research", "User Interviews"
        ]
      },
      {
        title: "Synthesis",
        descriptionList: [
          "Affinity Diagram", "Persona", "Experience Mapping"
        ]
      },
      {
        title: "Research + define",
        descriptionList: [
          "Competitive Martket Analysis", "Define HMW?"
        ]
      },
      {
        title: "Ideation",
        descriptionList: [
          "User Stories", "Task Flow", "Concept Sketching", "Wireframing"
        ]
      },
      {
        title: "Validate",
        descriptionList: [
          "Usability Testing", "Iteration"
        ]
      },
      {
        title: "Branding",
        descriptionList: [
          "Moodboard", "Visual Identity", "Hi-fidelity Prototype", "Design System"
        ]
      },
    ],
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: PaperSpace
  },
  glucochek: {
    id: "glucocheck",
    route: '/glucocheck',
    title: "GlucoCheck",
    tagline: "Where diabetes health care meets technology ",
    description: "A case study using the 8-6-4-2 methodology on a diabetes technology tracking App that records user’s glucose levels, activities, food & insulin consumption",
    tags: [
      "UX/UI Design,   ",
      "Case Ctudy,  ",
      "Interaction Design  "
    ],
    heroImg: '/assets/GlucoCheck-1.svg',
    tileImg: "/assets/tile-img-GlucoCheck.jpg",
    bgHex: "#FFD9D4",
    paraColor: "brand-dark-red",
    logoImg: "/assets/glucoCheck-logo.svg",
    role: "Wireframing, Prototyping, User Researcher ",
    timeline: "2 weeks",
    platform: "Apple Smartwatch",
    tools: "User Research + Interviews, 8-6-4-2 Prototyping Method, Wireframing, Figma ",
    team: [
      "",
    ],
    descriptionPara: "UX is about solving everyday problems and optimizing the user's way of completing the task. As a type 1 diabetic, I face this every day, which is why for a school UX case study assignment I wanted take this opportunity and strategize how I can better manage diabetes easier for myself and hopefully for others.", 
    problem: [
      "Self-management of diabetes undoubtedly faces daily challenges of maintaining blood glucose levels to avert diabetes complications. As such, the work is tedious and for some, it is time-consuming. ",
      "With technological advancements in diabetes technology has answered some of these tiring tasks. There are a number of beneficial hardware, devices and software that people with diabetes use to manage their blood glucose levels, if applied correctly, will assuredly reduce the burden of living with diabetes and improve in one's quality of life.",
      "However, the complexity of diabetes technology to patient and provider understanding and implementations is an area needing of further guidance."
    ],
    solution: [
      "Diabetics face numerous daily challenges in managing their BG levels where the idea of designing a mobile and smart watch app could help a diabetic remember to test, schedule their medication administrations, record and share their data with their endocrinologists.",
      "The solution in addition to current technologies is to leverage the accessibility of wearable technology to help diabetics manage their health needs through personalized alerts and reminders."
    ],
    hmw: " provide users with a tool that could be integrated into patients' lives in helping them manage and stabilize their diabetes and avoid life threatening complications?",
    process: [
      {
        title: "Research",
        descriptionList: [
          "Research + discovery", "User Research", "User Interviews"
        ]
      },
      {
        title: "Define",
        descriptionList: [
          "Findings + Solutions", "Define HMW?"
        ]
      },
      {
        title: "Ideation",
        descriptionList: [
          "8-6-4-2 Method", "Task Flow", "Wireframing"
        ]
      },
      {
        title: "Validate",
        descriptionList: [
          "Usability Testing", "Iteration"
        ]
      },
      {
        title: "Visual Design",
        descriptionList: [
          "Brand Colors", "Design System", "Hi-Fidelity Mockups"
        ]
      },
      {
        title: "Reflection",
        descriptionList: [
          "Learnings", "Next Steps"
        ]
      }
    ],
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: GlucoCheck
  },
  freely: {
    id: "freely",
    route: '/freely',
    title: "Freely",
    tagline: "Better Budgeting. More Saving",
    description: "A ReactJS budget tracker App using a CSS Preprocessor (SCSS). A fun and playful UI exploring the readability, reusability, and maintainability of CSS code.",
    tags: [
      "UI Design  ", 
      "Design System   "
    ],
    heroImg: '/assets/Freely-browser.jpg',
    tileImg: "/assets/tile-img-freely.jpg",
    bgHex: "#DBF9EB",
    paraColor: "brand-dark-purple",
    bckgColor: "brand-light-green",
    logoImg: "/assets/logo-freely.jpg",
    descriptionPara: "A budget tracker application built with React.js and uses SASS as its preprocessor, and Bootstrap for the grid and responsive system. Focused on building design systems.",
    role: "Front-end development, UX/UI, Design System",
    timeline: "1 week",
    platform: "Web/ Tablet/ Mobile responsive",
    tools: "Figma",
    team: "me, myself, & I",
    problem: "To have a simple digital interface to journal and receive feedback on their entries",
    solution: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    hmw: " provide users a digital space where they can write freely and reflect on their emotions in an intuitive way?",
    process: [
      {
        title: "Understand",
        descriptionList: [
          "Research + discovery", "User Research", "Competitive Martket Analysis"
        ]
      },
      {
        title: "Define",
        descriptionList: [
          "User Interviews", "Findings + Solutions", "Define HMW?"
        ]
      },
      {
        title: "Ideation",
        descriptionList: [
          "Task Flow", "8-6-4-2 Method", "Wireframing"
        ]
      },
      {
        title: "Validate",
        descriptionList: [
          "Usability Testing", "Iteration"
        ]
      },
      {
        title: "Visual Design",
        descriptionList: [
          "Brand Colors", "Design System", "Hi-Fidelity Mockups"
        ]
      },
      {
        title: "Reflection",
        descriptionList: [
          "Learnings", "Next Steps"
        ]
      }
    ],
    gallery: [
      '/assets/yodae-container.svg'
    ],
    component: Yodae
  },
  covid19: {
    id: "covid19",
    route: '/covid19-tracker',
    title: "COVID-19 Tracker",
    tagline: "Tracking COVID-19 cases",
    description: "A React.js application viewing a COVID-19 Case Data that interacts with an Express server retrieving its data from a COVID-19 API.",
    tags: [
      "Web Development,  ",
      "API Integration   "
    ],
    heroImg: '/assets/COVID-container.svg',
    tileImg: "/assets/tile-img-COVID.jpg",
    bgHex: "#DFF5F6",
    paraColor: "brand-dark-blue",
    bckgColor: "brand-light-blue",
    image: "COVID-container.svg",
    logoImg: "/assets/covid-logo.svg",
    role: "Front-end & back-end development + API integration",
    timeline: "1 week",
    platform: "Web Desktop Application",
    tools: "Figma + MERN stack",
    team: [
      ""
    ],
    problem: "To have a simple digital interface to journal and receive feedback on their entries",
    solution: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    hmw: " provide users with a tool that could be integrated into patients' lives in helping them manage and stabilize their diabetes and avoid life threatening complications?",
    process: [
      {
        title: "Research",
        descriptionList: [
          "Research + discovery", "User Research", "Competitive Martket Analysis"
        ]
      },
      {
        title: "Define",
        descriptionList: [
          "User Interviews", "Findings + Solutions", "Define HMW?"
        ]
      },
      {
        title: "Ideation",
        descriptionList: [
          "Task Flow", "8-6-4-2 Method", "Wireframing"
        ]
      },
      {
        title: "Validate",
        descriptionList: [
          "Usability Testing", "Iteration"
        ]
      },
      {
        title: "Visual Design",
        descriptionList: [
          "Brand Colors", "Design System", "Hi-Fidelity Mockups"
        ]
      },
      {
        title: "Reflection",
        descriptionList: [
          "Learnings", "Next Steps"
        ]
      }
    ],
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: Covid19
  },
  yodae: {
    id: "yodae",
    route: '/yodae',
    title: "YODAE",
    tagline: "Say what you want and draw doodles with your voice.",
    description: "An experimental project that uses Google Speech API and Natural Language API to interpret voice commands and render doodles using Quick,Draw!",
    tags: [
      "API Integration,  ", 
      "Mobile + Web Development   "
    ],
    heroImg: '/assets/YODAE-mockup.svg',
    tileImg: "/assets/tile-img-yodae.jpg",
    bgHex: "#E4E6FF",
    paraColor: "brand-dark-purple",
    bckgColor: "brand-light-purple",
    logoImg: "/assets/YODAE-logo-small.svg",
    descriptionPara: "A doodling experiment utilizing Google Speech API and Natural Language API that transcribes voice commands to display doodles using a dataset by Quick,Draw!",
    role: "Front-end development, UX/UI, Project Management",
    timeline: "Feb - Apr 2020 4 months",
    platform: "Web & Mobile",
    tools: "Adobe Xd, JavaScript, Quick, Draw! API, Google Speech Analyzer API, Natural Language Processing + Firebase",
    team: [
      {
        memberName: "Ankit Gupta",
        memberSite: "https://ankit.life/"
      },
      {
        memberName: "Drayhia Gohil",
        memberSite: "http://www.drashyagohil.com/"
      },
      {
        memberName: "Evonne Oby Okoye",
        memberSite: "http://iamoby.com/"
      },
      {
        memberName: "Yang Yang",
        memberSite: "https://yangdesign.ca/"
      }
    ],
    problem: "To have a simple digital interface to journal and receive feedback on their entries",
    solution: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    hmw: " provide users a digital space where they can write freely and reflect on their emotions in an intuitive way?",
    process: [
      {
        title: "Understand",
        descriptionList: [
          "Research + discovery", "User Research", "Competitive Martket Analysis"
        ]
      },
      {
        title: "Define",
        descriptionList: [
          "User Interviews", "Findings + Solutions", "Define HMW?"
        ]
      },
      {
        title: "Ideation",
        descriptionList: [
          "Task Flow", "8-6-4-2 Method", "Wireframing"
        ]
      },
      {
        title: "Validate",
        descriptionList: [
          "Usability Testing", "Iteration"
        ]
      },
      {
        title: "Visual Design",
        descriptionList: [
          "Brand Colors", "Design System", "Hi-Fidelity Mockups"
        ]
      },
      {
        title: "Reflection",
        descriptionList: [
          "Learnings", "Next Steps"
        ]
      }
    ],
    gallery: [
      '/assets/yodae-container.svg'
    ],
    component: Yodae
  },
}

const projectsArray = Object.values(projects);

class App extends Component {
  render() {
    return (
      <Router>
        <Nav projects={projects}/>
        <main>
          <Switch>
            <Route exact path="/" render={props => <Work {...props} projects={projectsArray}/>}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/resume" component={Resume}/>
            {Object.values(projects).map(project => {
              const CustomComponent = project.component;
              return (
                <Route
                  path={project.route}
                  render={props => (
                    <Project {...props} project={project}>
                      {CustomComponent ? <CustomComponent project={project}/> : null}
                    </Project>
                  )}
                />
              )
            })}
            <Route component={NoMatch}/>
          </Switch>
        </main>
        <Footer projects={projectsArray}/>
      </Router>
    )
  }
}

export default App;
