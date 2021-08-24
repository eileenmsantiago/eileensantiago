export const projects = {
  raise: {
    id: "raise",
    pageUrl: "/raise-dev",
    primaryColor: '#E1EBFF',
    featuredImagePath: "/assets/raise-dev/raisedev-desktop.png",
    projectHeroPath: "/assets/raise-dev/raisedev-browser.svg",
    title: "Raise.Dev",
    description: "Redesigning a digital experience for a developer mentorship platform",
    tags: [
      "Front-end development",
      "Design System",
      "Product Design"
    ],
    overview: "Raise.dev is focusing on helping professional developers advance their careers, through on-demand pair programming, longer-term coaching relationships, and employment opportunities.",
    disclaimer: "Due to NDA restrictions, I can not disclose all the details of my contributions.",
    featureDescription: "Working cross-functionally with the founder, product and engineering, I created the end-to-end experiences of the following features:",
    featureItem: [
      {
        title: "Marketing landing pages"
      },
      {
        title: "Sign up & requesting a session user experience flow"
      },
      {
        title: "Establish a working design system from scratch"
      }
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
  },
  paperSpace: {
    id: "paperSpace",
    pageUrl: "/paper-space",
    primaryColor: '#FAF5F0',
    featuredImagePath: "/assets/paper-space/paper-space-mobile-grid.png",
    title: "Paper Space",
    description: "Giving people a digital space to track and visualize their emotions through journaling. ",
    tags: [
      "UI/UX design",
      "Full-stack development",
      "Design System",
    ],
    myRole: {
      subheading: "as the sole UI/UX designer and Developer, I",
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
    }
  }
}

export const projectList = [
  projects.raise,
  projects.paperSpace
]

export default projects
