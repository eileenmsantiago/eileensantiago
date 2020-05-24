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
    route: '/paper-space',
    title: "Paper Space",
    tagline: "",
    description: "A journaling App that tracks user’s emotions based on their written entries.",
    tags: [
      "front-end dev   ",
      "back-end dev   ",
      "ux/ui "
    ],
    heroImg: '/assets/paper-space-hero.png',
    tileImg: "/assets/PaperSpace-container.svg",
    bgHex: "#FAF5F0",
    logoImg: "/assets/ps-logo-full.svg",
    header: "A journal App that tracks user’s emotions based on their written entries.",
    role: "Front-end & back-end Development, Design Systems, & Project Management",
    timeline: "Jan - Apr 2020 4 months",
    platform: "Mobile iOS",
    team: [
      "Oby E. — Back-end development, UX Research, & Content Writing",
      "Yang Yang — Design Sprint Facilitator, UX Researcher, UI Design, Front-end development",
    ],
    userGoal: "To have a simple digital interface to journal and receive feedback on their entries",
    designGoal: "To simplify the writing process for the user that feels organic while adding visual feedback that is asethetically pleasing",
    productGoal: "To seemingly give users digital space that is clean and free-feeling to write, whilest, providing gradient colored feedback to the tone in their written entries",
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: PaperSpace
  },
  yodae: {
    route: '/yodae',
    title: "YODAE",
    description: "A digital space utilizing Google’s Speech Recognition API that allows users to create doodles from a dataset by QuickDraw! through voice command.",
    tags: [
      "API   ", 
      "back-end development   "
    ],
    heroImg: '/assets/YODAE-mockup.svg',
    tileImg: "/assets/yodae-container.svg",
    bgHex: "#E4E6FF",
    logoImg: "/assets/YODAE-logo-small.svg",
    header: "A doodling experiment utilizing Google Speech API and Natural Language API that transcribes voice commands to display doodles using a dataset by Quick,Draw!",
    role: "Front-end development, UX/UI, Project Management",
    timeline: "Feb - Apr 2020 4 months",
    platform: "Web & Mobile",
    team: [
      "Ankit Gupta,",
      "Drayhia Gohil, ",
      "Yang Yang, ",
      "& Evonne Oby Okoye"
    ],
    userGoal: "To have a fun doodling web experience",
    designGoal: "To simplify the doodling experience that is intuitive with error handling that smoothes the process",
    productGoal: "",
    gallery: [
      '/assets/yodae-container.svg'
    ],
    component: Yodae
  },
  glucochek: {
    route: '/glucochek',
    title: "GlucoCheck",
    description: "GlucoCheck is a Smartwatch app to guide or be a best-friend to count on (health wise) to keep your blood sugar levels in check.",
    tags: [
      "ux/ui   ",
      "case study"
    ],
    heroImg: '/assets/paper-space-hero.png',
    tileImg: "/assets/Glucocheck-container.svg",
    bgHex: "#FFD9D4",
    logoImg: "/assets/glucoCheck-logo.svg",
    header: "A diabetes health managing App that tracks user’s glucose levels, activities, food & insulin consumption.",
    role: "Product Design, Wire framing, Prototyping, Content Writing, User Research",
    timeline: "2 weeks",
    platform: "Mobile iOS",
    team: "Figma",
    userGoal: "To build a solid understanding of the challenges of what diabetics go through",
    designGoal: "To simplify process in adding details to managing one's diabetes that is easily accessible and viewable on a smartwatch",
    productGoal: "To seemingly give users flexiblility in their day as they document their diabetes entries",
    gallery: [
      '/assets/paper-space-hero.png'
    ],
    component: GlucoCheck
  },
  covid19: {
    route: '/covid19-tracker',
    title: "COVID-19 Tracker",
    description: "A React.js application viewing a COVID-19 Case Data that interacts with an Express server retrieving its data from a COVID-19 API.",
    tags: [
      "back-end development   ",
      "API   "
    ],
    heroImg: '/assets/COVID-container.svg',
    tileImg: "/assets/COVID-container.svg",
    bgHex: "#DFF5F6",
    image: "COVID-container.svg",
    logoImg: "/assets/covid-logo.svg",
    header: "A React.js application viewing a COVID-19 Case Data that interacts with an Express server retrieving its data from a COVID-19 API. ",
    role: "Front-end & back-end development",
    timeline: "1 week",
    platform: "desktop",
    team: "Figma (illustrations & prototyping)",
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
