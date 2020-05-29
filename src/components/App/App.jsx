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
import Container from '../Container/Container';

const projects = {
  paperSpace: {
    route: '/paper-space',
    title: "Paper Space",
    tagline: "Tracking and visualizing emotions through journal writing",
    description: "A journaling App that tracks user’s emotions based on their written entries.",
    tags: [
      "Mobile Development,   ",
      "UX/UI Design,  ",
      "Product Strategy  "
    ],
    heroImg: '/assets/paper-space-hero.png',
    tileImg: "/assets/PaperSpace-container.svg",
    bgHex: "#FAF5F0",
    paraColor: "brand-ps-brown-light",
    bckgColor: "#FAF5F0",
    logoImg: "/assets/ps-logo-full.svg",
    description: "A journaling App that tracks user’s emotions based on their written entries.",
    role: "Front-end & back-end Development, Design Systems, & Project Management",
    timeline: "Jan - Apr 2020 4 months",
    platform: "Mobile iOS",
    tools: "Figma, MERN Stack, Sass Preprocessor, Watson Tone Analyzer API, + MongoDB",
    team: [
      "Evonne Oby Okoye — Back-end development, UX Research, & Content Writing",
      "Yang Yang — Design Sprint Facilitator, UX Researcher, UI Design, Front-end development",
    ],
    problem: "To have a simple digital interface to journal and receive feedback on their entries",
    solution: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    challenge: " provide users a digital space where they can write freely and reflect on their emotions in an intuitive way?",
    headerTitle: [
      "Research",
      "Synthesis",
      "Research + define",
      "Ideation",
      "Validate",
      "Branding"
    ],
    headerListItems: [
      "Research, User Interviews",
      "Affinity Diagram, Persona, Experience Mapping",
      "Competitive Martket Analysis, Define HMW?",
      "User Stories, Task Flow, Concept Sketching, Wireframing",
      "Usability Testing, Iteration", 
      "Moodboard, Visual Identity, Hi-fidelity Prototype, Design System"
    ],
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: PaperSpace
  },
  yodae: {
    route: '/yodae',
    title: "YODAE",
    tagline: "",
    description: "A digital space utilizing Google’s Speech Recognition API that allows users to create doodles from a dataset by QuickDraw! through voice command.",
    tags: [
      "API Integration  ", 
      "Mobile + Web Development   "
    ],
    heroImg: '/assets/YODAE-mockup.svg',
    tileImg: "/assets/yodae-container.svg",
    bgHex: "#E4E6FF",
    paraColor: "brand-dark-purple",
    bckgColor: "brand-light-purple",
    logoImg: "/assets/YODAE-logo-small.svg",
    description: "A doodling experiment utilizing Google Speech API and Natural Language API that transcribes voice commands to display doodles using a dataset by Quick,Draw!",
    role: "Front-end development, UX/UI, Project Management",
    timeline: "Feb - Apr 2020 4 months",
    platform: "Web & Mobile",
    tools: "Adobe Xd, JavaScript, Quick, Draw! API, Google Speech Analyzer API, Natural Language Processing + Firebase",
    team: [
      "Ankit Gupta,",
      "Drayhia Gohil, ",
      "Yang Yang, ",
      "& Evonne Oby Okoye"
    ],
    problem: "To have a simple digital interface to journal and receive feedback on their entries",
    solution: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    challenge: " provide users a digital space where they can write freely and reflect on their emotions in an intuitive way?",
    headerTitle: [
      "Research",
      "Synthesis",
      "Research + define",
      "Ideation",
      "Validate",
      "Branding"
    ],
    headerListItems: [
      "Research, User Interviews",
      "Affinity Diagram, Persona, Experience Mapping",
      "Competitive Martket Analysis, Define HMW?",
      "User Stories, Task Flow, Concept Sketching, Wireframing",
      "Usability Testing, Iteration", 
      "Moodboard, Visual Identity, Hi-fidelity Prototype, Design System"
    ],
    gallery: [
      '/assets/yodae-container.svg'
    ],
    component: Yodae
  },
  glucochek: {
    route: '/glucochek',
    title: "GlucoCheck",
    tagline: "",
    description: "GlucoCheck is a Smartwatch app to guide or be a best-friend to count on (health wise) to keep your blood sugar levels in check.",
    tags: [
      "UX/UI Design,   ",
      "Case Ctudy,  ",
      "Interaction Design  "
    ],
    heroImg: '/assets/paper-space-hero.png',
    tileImg: "/assets/Glucocheck-container.svg",
    bgHex: "#FFD9D4",
    paraColor: "brand-dark-purple",
    bckgColor: "brand-light-purple",
    logoImg: "/assets/glucoCheck-logo.svg",
    description: "A diabetes health managing App that tracks user’s glucose levels, activities, food & insulin consumption.",
    role: "Product Design, Wire framing, Prototyping, Content Writing, User Research",
    timeline: "2 weeks",
    platform: "Mobile iOS",
    tools: "Figma",
    team: "",
    problem: "To have a simple digital interface to journal and receive feedback on their entries",
    solution: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    challenge: " provide users a digital space where they can write freely and reflect on their emotions in an intuitive way?",
    headerTitle: [
      "Research",
      "Synthesis",
      "Research + define",
      "Ideation",
      "Validate",
      "Branding"
    ],
    headerListItems: [
      "Research, User Interviews",
      "Affinity Diagram, Persona, Experience Mapping",
      "Competitive Martket Analysis, Define HMW?",
      "User Stories, Task Flow, Concept Sketching, Wireframing",
      "Usability Testing, Iteration", 
      "Moodboard, Visual Identity, Hi-fidelity Prototype, Design System"
    ],
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: GlucoCheck
  },
  covid19: {
    route: '/covid19-tracker',
    title: "COVID-19 Tracker",
    tagline: "",
    description: "A React.js application viewing a COVID-19 Case Data that interacts with an Express server retrieving its data from a COVID-19 API.",
    tags: [
      "Web Development,  ",
      "API Integration   "
    ],
    heroImg: '/assets/COVID-container.svg',
    tileImg: "/assets/COVID-container.svg",
    bgHex: "#DFF5F6",
    paraColor: "brand-dark-red",
    bckgColor: "brand-light-red",
    image: "COVID-container.svg",
    logoImg: "/assets/covid-logo.svg",
    description: "A React.js application viewing a COVID-19 Case Data that interacts with an Express server retrieving its data from a COVID-19 API. ",
    role: "Front-end & back-end development",
    timeline: "1 week",
    platform: "Web Desktop Application",
    tools: "Figma + MERN stack",
    team: "",
    problem: "To have a simple digital interface to journal and receive feedback on their entries",
    solution: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    challenge: " provide users a digital space where they can write freely and reflect on their emotions in an intuitive way?",
    headerTitle: [
      "Research",
      "Synthesis",
      "Research + define",
      "Ideation",
      "Validate",
      "Branding"
    ],
    headerListItems: [
      "Research, User Interviews",
      "Affinity Diagram, Persona, Experience Mapping",
      "Competitive Martket Analysis, Define HMW?",
      "User Stories, Task Flow, Concept Sketching, Wireframing",
      "Usability Testing, Iteration", 
      "Moodboard, Visual Identity, Hi-fidelity Prototype, Design System"
    ],
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: Covid19
  }
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
                      {CustomComponent ? <CustomComponent/> : null}
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
