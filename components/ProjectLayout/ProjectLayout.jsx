import {useState, useEffect, useRef} from 'react';
import {useInViewport} from 'react-in-viewport';
import { Layout, DescriptionList, DescriptionGrid, Heading, Text } from '../index';
import cx from 'classnames';
import css from './ProjectLayout.module.scss';
import {Container} from '../index';
import { NAV_HEIGHT } from '../Navbar/Navbar';


const ProjectLayout = ({data}) => {

  const { primaryColor, projectHeroPath, featuredImagePath } = data;
  const [ flowStep, setFlowStep ] = useState(0);
  const flowRef = useRef();
  const {
    inViewport
  } = useInViewport(
    flowRef,
    {},
    { disconnectOnLeave: true },
    {}
  );
  return (
    <Layout transparentNav>
      <div className="pb-24" style={{backgroundColor: data.primaryColor}}>
        <div style={{paddingTop: NAV_HEIGHT}}>
          <Container width="sm" classes={{container:"text-center"}}>
            <Heading level="h1" style="h5" classes={{root:'mb-2'}}>Raise.dev</Heading>
            <Heading level="h2" style="h2" classes={{root:'mb-4'}}>
              Redesigning a developer mentorship platform
            </Heading>
            <ul className="mb-10">
              {data.tags.map(tag => (
                <li className="inline p-2 mx-2 rounded bg-gray-50">
                  {tag}
                </li>
              ))}
            </ul>
            <a className="mb-10" href="https://raise.dev">
              <Text>View live site</Text>
            </a>
          </Container>
        </div>
      </div>
      <Container width="sm" marginY="lg" classes="py-24">
        <img className={cx('full-width mb-10', css.heroImg)} src={data.projectHeroPath}/>
        <Heading level="h3" style="h2"> Overview </Heading>
        <Text as="div" classes={{root: "mb-4"}}>
          Raise.dev is focusing on helping professional developers advance their careers, through on-demand pair programming, longer-term coaching relationships, and employment opportunities. 
        </Text>
        <Text as="div" style="sm" classes={{root: "mb-8"}}>
          Due to NDA restrictions, I can not disclose all the details of my contributions.
        </Text>
        <Text style="lg-md" as="div" classes={{root: "mb-8"}}>
        Working cross-functionally with the founder, product and engineering, I created the end-to-end experiences of three features:
        </Text>
        <Text style="lg" as="div" classes={{root: "mb-12"}}>
          <ul>
            <li>Marketing landing pages</li> 
            <li>Sign up & requesting a session user experience flow</li> 
            <li>Design system</li> 
          </ul>
        </Text>
        <DescriptionGrid items={[
          {
            title: "Skill set",
            description: "Interaction & visual design, Brand identity, UI/UX design, Design system,  Product thinking,  and Front-end development"
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
        ]}/>
      </Container>
      <Container width="sm" bgColor="black">
        <SectionHeading isDark heading="my role" subheading="as the sole UI/UX designer, I"/>
        <DescriptionList isDark items={[
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
          ]}/>
      </Container>
      <Container width="sm">
        <SectionHeading color="grey-light" heading="01 marketing" subheading="Redesigning Raise.dev and implementing a visual tone and language that speaks to the developer education space"/>
      </Container>
      <Container width="lg" paddingY="sm" paddingX="none">
        <img src={featuredImagePath}/>
      </Container>
      <Container width="sm">
        <Heading level="h3">Developers who need a second set of eyes to take the next step forward</Heading>
        <Text as="p">
          The user profile targets professional developers looking for guidance in taking the next step in their careers (e.g. new grads and career transitioners). They’re looking for the extra hand they can get that helps them get unblocked on the task at hand.
        </Text>
        <Text as="p" classes={{root: "mb-12"}}>
          The previous website was a static page and offered little to no information relating to the product they were offering. In addition to landing, an MVP for an internal coaching platform was needed to facilitate the existing mentorship program.
          <br />
          <br />
          The problem I was on boarded to help solve was how might we brand and market Raise.dev as a platform that focuses on helping professional developers advance in their careers.
        </Text>
        <Text as="p">
          During the ideation process, I presented mockups to the team to get their feedback, where I was then able to create further definied hi-fi's.
        </Text>
        <Text as="p" style="lg-md" classes={{root: "my-12"}}>
          As the sole designer, the design process was still important to work on as a team, as their feedback provided effective changes to the appearance of the mockups and to the live site.
        </Text>
      </Container>
      <Container width="lg" bgColorHex={primaryColor} paddingY="sm" paddingX="none">
        <img className="mx-auto" src="/assets/raise-dev/raisedev-styleBanner.svg"/>
      </Container>
      <Container bgColorHex={primaryColor} width="sm" paddingY="sm">
        <div className="flex flex-col">
          <Heading level="h4" style="h2">Building the brand identity from scratch that’s familiar to the developer world</Heading>
          <Text as="p">
            To set the developer tone, using a mono typeface was a certain choice, and in combination with a round and bold sans serif to go easy on the eyes.
            <br/>
            <br/>
            The selected colors were calm, yet with an electrifying blue, accompanied with a bright, yet, a warm yellow. These color pairings are settled down with a dark navy, that’s used in the heading styles across the Raise.dev platform. Tertiary and accent colors were used to facilitate in the brand illustrations. 
          </Text>
        </div>
      </Container>
      <Container>
        <div className="w-3/4 mx-auto xs:w-full">
          <SectionHeading color="grey-light" heading="02 UX Flow" subheading="Defining a user experience for the developer onboarding flow
        "/>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
          <div className={css.bgWhite}>
            <img className="p-12 mx-auto" src="/assets/raise-dev/signin.svg"/>
          </div>
          <div className={css.bgWhite}>
            <img className="p-12 mx-auto" src="/assets/raise-dev/signup.svg"/>
          </div>
        </div>
      </Container>
      <Container width="sm" marginY="sm">
        <Heading level="h3">Task analysis for new users signing up onto the platform</Heading>
        <Text as="p">
          Designing the user experience for the new users signing up and logging in,  I worked closely with the lead back-end developer and the founder, to create a step-by-step analysis of how a user will interact with the Raise.dev platform  in order to reach their goal.
          <br />
          <br />
          The MVP relied on getting as many users onboarded onto the platform and in order to understand how to build the sign up feature, by creating a user flow helped to visualize the steps needed for new and invited users and for existing users.
        </Text>
      </Container>
      <Container bgColor="black" width="lg" paddingX="none">
        <div className="flex w-40 mx-auto">
        {flowStep > 0 && <button onClick={() => setFlowStep(flowStep - 1)}><Text color="white">⬅️</Text></button>}
        <Text color="white">{flowStep + 1}/4</Text>
        {flowStep < 3 && <button onClick={() => setFlowStep(flowStep + 1)}><Text color="white">➡️</Text></button>}
        </div>
        <div ref={flowRef} className={css.flowContainer}>
          <img className={cx(css.flowImg, css[`step_${flowStep}`])} src="/assets/raise-dev/task-analysis.svg"/>
        </div>
      </Container>
      <Container width="sm">
        <SectionHeading color="grey-light" heading="03 Design System" subheading="A design system providing a 1:1 design to development relationship"/>
      </Container>
      <Container width="md" paddingY="sm">
        <img className="mx-auto" src="/assets/raise-dev/design-system.svg"/>
      </Container>
      <Container width="sm">
        <Heading level="h3" style="h3">As the product grows, there would need to be consistent styling to the Raise.dev platform. Our team faced 2 issues: </Heading>
        <DescriptionList items={[
          {
            title:"Lack on consistency",
            description:"The process of design to development grew into loosing out on  best possible design and front-end best practices. Elements in our code base were repeatable and the developers applied their own way to implement styles that may have already been implemented on other pages. This evidently led to an unmaintainable code base for our front-end styles."
          },
          {
            title:"An unorganized design system",
            description:"The team had trouble locating styles and components needed when developing them. Locating the correct file  to implement the styles can be located in multiple pages in the Figma workspace, and often times, we found missing pieces that end up needing  to be recreated and documented."
          }
        ]}/>
        <div className="py-12">
          <Text style="h1">
            Approach design and development through design systems thinking to create a component library for a component-driven development.
          </Text>
        </div>
        <Text style="md">
          The solution was to organize the files, which would lead to better locating the components needed. By componentizing our design, we are optimizing the way we design atoms, components and slices to build the front-end as well.
        </Text>
      </Container>
      <Container paddingX="none" width="lg" paddingY="sm">
        <img src="/assets/raise-dev/design-system-feature.svg"/>
      </Container>
      <Container width="sm" paddingY="md">
        <Heading level="h3" style="h5" classes={{root: "mb-8"}}>Proposed solutions</Heading>
        <div className="mb-16">
          <Text as="p">
            The way we organized our files was  a core value in building the design system process. The goal would be for anyone to have the ability to pull atoms or component pieces together to create the intended feature. This will also allow for the designer to quickly create components if we need anything new or to update an existing piece.
          </Text>
        </div>
        <DescriptionList items={[
          {
            title:"Review & extract existing components ",
            description:"I extracted components, from the Figma files and the public site, in a systemized flow in Raise.dev’s project file in Figma, using the 3 layer design system adapted from Brad Frost’s Atomic Design System:"
          },
          {
            title:"Labelling files for a 1:1 design to development relationship",
            description:"I corrected the labelling of the components to have the same name in the design system. For the purpose of creating a consistent naming convention, for design and development."
          }
        ]}/>
      </Container>
      <Container width="lg" bgColor="black" paddingY="sm">
        <img className="mx-auto" src="/assets/raise-dev/design-system-grid.svg"/>
      </Container>
    </Layout>
  )
}

const SectionHeading = (props) => {

  const { heading= "", subheading, isDark } = props;

  let color;
  if(isDark) {
    color = "white";
  }
  return (
    <>
      <Heading level="h3" style="h5" color={color} classes={{root: "mb-2"}}>{heading}</Heading>
      <Heading level="h3" style="h2" color={color} classes={{root: "mb-6"}}>{subheading}</Heading>
    </>
  )
}

export default ProjectLayout;
