export const projects = {
  raise: {
    id: "raise",
    pageUrl: "/",
    primaryColor: '#E1EBFF',
    featuredImagePath: "/assets/raise-dev/raisedev-desktop.png",
    projectHeroPath: "/assets/raise-dev/raisedev-browser.svg",
    title: "Raise.Dev",
    description: "Redesigning a digital experience for a developer mentorship platform",
    tags: [
      "Front-end development",
      "Design System",
      "Product Design"
    ]
  },
  paperSpace: {
    id: "paperSpace",
    primaryColor: '#FAF5F0',
    featuredImagePath: "/assets/paper-space/paper-space-mobile-grid.png",
    title: "Paper Space",
    description: "Giving people a digital space to track and visualize their emotions through journaling. ",
    tags: [
      "UI/UX design",
      "Full-stack development",
      "Design System",
    ]
  }
}

export const projectList = [
  projects.raise,
  projects.paperSpace
]

export default projects
