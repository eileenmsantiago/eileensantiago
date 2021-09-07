import {Text} from '../components';

export const projects = {
  raise: {
    id: "raise",
    pageUrl: "/raise-dev",
    siteURL: "https://raise.dev",
    primaryColor: '#E1EBFF',
    featuredImagePath: "/assets/raise-dev/raisedev-desktop.png",
    projectHeroPath: "/assets/raise-dev/raisedev-browser.png",
    title: "Raise.Dev",
    description: "Redesigning a digital experience for a developer mentorship platform",
    description: "Redesigning a digital experience for a developer mentorship platform",
    tags: [
      "Front-end",
      "Design System",
      "Product Design"
    ],
    cta: "View live site",
    overview: "Raise.dev is focusing on helping professional developers advance their careers, through on-demand pair programming, longer-term coaching relationships, and employment opportunities.",
    disclaimer: "Due to NDA restrictions, I can not disclose all the details of my contributions.",
    featureDescription: "Working cross-functionally with the founder, product and engineering, I created the end-to-end experiences of the following features:",
    featureItem: [
      {
        title: "Marketing landing pages"
      },
      {
        title: "Defining a user experience for the developer onboarding flow"
      },
      {
        title: "Establish a working design system from scratch"
      }
    ],
    projectScope: [
      {
        title: "Skill set",
        description: "Interaction & visual design, Brand identity, UI/UX design, Design system, Product thinking, and Front-end development"
      },
      {
        title: "Timeline",
        description: "June 2020-June 2021 (1 year)"
      },
      {
        title: "Platform",
        description: () => (
          <>
            Web (Product) <a href="https://www.raise.dev">raise.dev</a>
          </>
        )
      },
      {
        title: "Tools",
        description: "Figma, Notion, Ruby on Rails, TailwindCSS, Stimulus.js, Git, and GitHub"
      },
    ],
    myRole: {
      subheading: "as the sole UI/UX designer, I",
      items: [
        {
          title:"Designed systems for the internal and external user experiences",
          description:"Conducted user research, synthesized qualitative data to identify feature specifications for the marketing pages, and wireframing. Also responsible for creating a design system for the Raise.dev design foundations."
        },
        {
          title:"Created the branding and facilitated in the strategy for marketing the product",
          description:"Responsible for branding, creating the style guide, designing the marketing landing pages and also collaborated with the Chief Operating Officer in creating the email drip campaign."
        },
        {
          title:"Designed and implemented the user interface",
          description:"Facilitated in building the front-end for the landing pages. Worked closely with the lead developer to create a design system for the app’s front-end that was built by views (ViewComponents) for the Raise.dev design foundations."
        }
      ]
    }, 
    retrospective: {
      subheading: "Executing the MVP amidst the chaos of a global pandemic",
      items: [
        {
          title:"Asynchronous work setting",
          description:"The pandemic undoubtedly altered the way people and companies work, collaborate and communicate together. As a new team, we held multiple activities such as daily Slack standups, which eventually switched to vieo call standups (we found to enjoy seeing each other, even if it was for a short time, to chat, laugh, and tackle quick questions); and we held end of sprint retros to recap on “what went well, what didn't, and what did we long for“. We also added more recurring scheduled meetings. In all, there were forms of communication we learned to handle synchronously and asychronously."
        },
        {
          title:"Consistency in design and a design system",
          description:"We knew the importance of a design system knowing the value it would offer for the overall brand consistency across the platform. It helped to build consitency in development as well. The goal to tackle the design system early on is to further iterate and to better implement components when adding new features, and especially for when the product scales bigger."
        },
        {
          title:"Design to developer handoff",
          description:"Friction is easily spotted between designers and developers since both perform different tasks and can view the same challenge very differently. Communicating and reducing any knowledge gaps will lead to better results. My experience with this is learning to hold conversations early on to decrease the chances of the unexpected. Other things include: providing all design files and necessary documentation in GitHub issues and hold meetings with the right people to sync up."
        }
      ]
    },
  },
  paperSpace: {
    id: "paperSpace",
    pageUrl: "/paper-space",
    siteURL: "https://www.figma.com/proto/DhTlr9NKICfuTrJ897Bzc1/PaperSpace-prototype?node-id=308%3A196&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=308%3A196",
    primaryColor: '#FAF5F0',
    featuredImagePath: "/assets/paper-space/paper-space-mobile-grid.png",
    projectHeroPath: "/assets/paper-space/paper-space.png",
    title: "Paper Space",
    description: "Giving people a digital space to track and visualize their emotions through journaling. ",
    tags: [
      "UI/UX design",
      "Mobile App",
      "Full-stack development",
    ],
    cta: "View prototype",
    overview: "PaperSpace gives people a digital space to track and visualize their emotions through journaling. This app also provides users with guided prompts if they need a kick-starter to writing. Aiming to help motivate individuals in keeping a habit to journal while enabling them to reflect intuitively.",
    disclaimer: "",
    featureDescription: "",
    featureItem: [],
    projectScope: [
      {
        title: "Skill set",
        description: "Interaction & visual design, Brand identity, UI/UX design, Design system,  Product thinking,  and Front-end development"
      },
      {
        title: "Timeline",
        description: "Jan - Apr 2020 (4 months)"
      },
      {
        title: "Platform",
        description: () => (
          <>
            <div>
              <a href="https://iamoby.com/">Evonne Oby Okoye</a> 
              <Text color="grey-dark"> — UX Research + Back-end Development</Text>
            </div>
            <div>
              <a href="https://yangdesign.ca/">Yang Yang </a>
              <Text color="grey-dark"> — Design Sprint Facilitator, UI/UX Designer, and Front-end Development</Text>
            </div>
          </>
        )
      },
      {
        title: "Tools",
        description: () => (
          <>
            <div>
              <Text>
                Design 
              </Text>
              <Text color="grey-dark">
                  — Figma, Miro, Invision
              </Text>
            </div>
            <div>
              <Text>
                Development 
              </Text>
              <Text color="grey-dark">
                — MERN Stack, ReactJS, Sass, Watson Tone Analyzer API, MongoDB
              </Text>
            </div>
          </>
        ) 
      },
    ],
    myRole: {
      subheading: "Wore x hats to build this product",
      items: [
        {
          title:"Product Thinking",
          description:"Collaborated closely with group members with weekly meetings and follow-ups to define the app and project requirements. Together we defined priorities, and set out the product goals."
        },
        {
          title:"User Experience & Design System",
          description:"Used design methods in our group sessions to break up complex decisions into biteable and approachable solutions. I created a design system to simplify the implementation of the mock up UI’s, in achieving consistent designs from prototype to web."
        },
        {
          title:"Full-stack Development",
          description:"Stylized and created React.js components. I also co-developed in building the application using the MERN Stack and how the technologies used had successfully allowed for CRUD operations between our application and the server. "
        }
      ]
    },
    // retrospective: {
    //   subheading: "Executing the MVP amidst the chaos of a global pandemic",
    //   items: [
    //     {
    //       title:"Asynchronous work setting",
    //       description:"The pandemic undoubtedly altered the way people and companies work, collaborate and communicate together. The process in building the MVP was definitely not linear and the team encountered, both UX and technical aspects, challenges. My experience with this is to communicate as effecively and efficiently as possible. Also, laying out the details in your response was imperative to ensure what you're saying is clear to the other person."
    //     },
    //     {
    //       title:"Design to developer handoff",
    //       description:"Friction is easily spotted between designers and developers since both perform different tasks and can view the same challenge very differently. Communicating and reducing any knowledge gaps will lead to better results. My experience with this is learning to hold conversations early on to decrease the chances of the unexpected. Other things include: providing all design files and necessary documentation in GitHub issues and hold meetings with the right people to sync up."
    //     }
    //   ]
    // },
  }
}

export const projectList = [
  projects.raise,
  projects.paperSpace
]

export default projects
