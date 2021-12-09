import { useState, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import css from '../components/ProjectLayout/ProjectLayout.module.scss';
import cx from 'classnames';
import {Container, FlexBox, Text, Box} from 'reviga-ui';
import { 
  Container as ContainerOld, 
  DescriptionHorizontalList, 
  DescriptionList, 
  DescriptionGrid, 
  Heading, 
  ProjectLayout, 
  SectionHeading, 
  Text as TextOld,
  Animate } from '../components';
import ModalImage from "react-modal-image";
import projects from '../data/projects.js'

export default function project() {
  const { primaryColor, featuredImagePath } = projects.raise;
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
    <ProjectLayout data={projects.raise}>
      <Container bg="black">
        <FlexBox>
          <Box width="40%">
            <Text.Heading as="h2" variant="eyebrow" color="grayLight">
              Reasearch & Discovery
            </Text.Heading>
            <Text.Heading as="h3" variant="h2" color="white">
              Identifying and Defining the current mentorship market needs
            </Text.Heading>
          </Box>
          <Box>
            <Text.Paragraph variant="bodyLg" color="primary">
              Trend analysis of the current developer population in 2020
            </Text.Paragraph>
          </Box>
        </FlexBox>
      </Container>
      <ContainerOld width="sm">
        <Animate>
          <SectionHeading color="grey-medium" heading="01 marketing" subheading="Redesigning Raise.dev and implementing a visual tone and language that speaks to the developer education space"/>
        </Animate>
      </ContainerOld>
      <ContainerOld width="lg" paddingY="sm" paddingX="none">
        <img className="px-10 mx-auto" src="/assets/raise-dev/landing.gif" alt="log in screens"/>
      </ContainerOld>
      <ContainerOld width="sm" paddingY="lg">
        <Animate>
          <Heading level="h3">Developers who need a second set of eyes to take the next step forward</Heading>
          <TextOld as="p" classes={{root: "mb-12"}}>
            The previous website was a static page and offered little to no information relating to the product they were offering. In addition to landing, an MVP for an internal coaching platform was needed to facilitate the existing mentorship program.
            <br />
            <br />
            The problem I was on boarded to help solve was how might we brand and market Raise.dev as a platform that focuses on helping professional developers advance in their careers.
          </TextOld>
          <TextOld as="p">
            During the ideation process, I presented mockups to the team to get their feedback, where I was then able to create further definied hi-fi's.
          </TextOld>
        </Animate>
        <Animate>
          <TextOld as="p" style="lg-md" classes={{root: "my-12"}}>
            As the sole designer, the design process was still important to work on as a team, as their feedback provided effective changes to the appearance of the mockups and to the live site.
          </TextOld>
        </Animate>
      </ContainerOld>
      <ContainerOld width="lg" bgColorHex={primaryColor} paddingY="sm" paddingX="none">
        <img className="mx-auto" src="/assets/raise-dev/raisedev-styleBanner.svg"/>
      </ContainerOld>
      <ContainerOld bgColorHex={primaryColor} width="sm" paddingY="sm">
        <div className="flex flex-col">
          <Animate>
            <Heading level="h4" style="h2">Building the brand identity from scratch that’s familiar to the developer world</Heading>
            <TextOld as="div" classes={{root: 'mb-20 sm:mb-12'}}>
              To set the developer tone, using a mono typeface was a certain choice, and in combination with a round and bold sans serif to go easy on the eyes.
              <br/>
              <br/>
              The selected colors were calm, yet with an electrifying blue, accompanied with a bright, yet, a warm yellow. These color pairings are settled down with a dark navy, that’s used in the heading styles across the Raise.dev platform. Tertiary and accent colors were used to facilitate in the brand illustrations. 
            </TextOld>
          </Animate>
        </div>
      </ContainerOld>
      <ContainerOld>
        <div className="w-3/4 mx-auto xs:w-full">
          <Animate>
            <SectionHeading color="grey-medium" heading="02 UX Flow" subheading="Defining a user experience for the developer onboarding flow"/>
        </Animate>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
          <div className="bg-gray-50">
            <img className="p-10 mx-auto" src="/assets/raise-dev/log-in.gif" alt="log in screens"/>
          </div>
          <div className="bg-gray-50">
            <img className="p-10 mx-auto" src="/assets/raise-dev/sign-up.gif"/>
          </div>
        </div>
      </ContainerOld>
      <ContainerOld width="sm" marginY="sm">
        <Animate>
          <Heading level="h3">Task analysis for new users signing up onto the platform</Heading>
          <TextOld as="div" classes={{root: 'mb-20 sm:mb-12'}}>
            Designing the user experience for the new users signing up and logging in,  I worked closely with the lead back-end developer and the founder, to create a step-by-step analysis of how a user will interact with the Raise.dev platform  in order to reach their goal.
            <br />
            <br />
            The MVP relied on getting as many users onboarded onto the platform and in order to understand how to build the sign up feature, by creating a user flow helped to visualize the steps needed for new and invited users and for existing users.
          </TextOld>
        </Animate>
      </ContainerOld>
      <ContainerOld bgColor="black" width="lg" paddingX="none">
        <div className="flex w-40 mx-auto space-x-4">
          {flowStep > 0 && (
            <div className="px-4 py-2 border border-white rounded">
              <button onClick={() => setFlowStep(flowStep - 1)}>
                <TextOld color="white" style="lg-md">←</TextOld>
              </button>
            </div>
          )}
          {flowStep < 3 && (
            <div className="px-4 py-2 border border-white rounded">
              <button onClick={() => setFlowStep(flowStep + 1)}>
                <TextOld color="white" style="lg-md">→</TextOld>
              </button>
            </div>
          )}
        </div>
        <div ref={flowRef} className={css.flowContainer}>
          <img className={cx(css.flowImg, css[`step_${flowStep}`])} src="/assets/raise-dev/task-analysis.svg"/>
        </div>
      </ContainerOld>
      <ContainerOld width="sm">
        <SectionHeading color="grey-medium" heading="03 Design System" subheading="A design system providing a 1:1 design to development relationship"/>
      </ContainerOld>
      <ContainerOld width="md" paddingY="sm">
        <ModalImage
            small="/assets/raise-dev/design-system.svg"
            large="/assets/raise-dev/design-system.svg"
            alt="Design system overview"
          />
      </ContainerOld>
      <ContainerOld width="sm">
        <Animate>
          <Heading level="h3" style="h3">As the product grows, there would need to be consistent styling for the Raise.dev platform. The team faced 2 issues: </Heading>
          <DescriptionList items={[
            {
              title:"Lack of consistency",
              description:"The process of design to development grew into loosing out on best possible designs and front-end best practices. Elements in our code base were repeatable and the developers applied their own way to implement styles that may have already been implemented on other pages. This evidently led to an unmaintainable code base for our front-end styles."
            },
            {
              title:"An unorganized design system",
              description:"The team had trouble locating styles and components needed when developing them. Locating the correct file  to implement the styles can be located in multiple pages in the Figma workspace, and often times, we found missing pieces that end up needing to be recreated and then documented for its use cases."
            }
          ]}/>
          <div className="py-12">
            <TextOld style="h1">
              Approach design and development through design systems thinking to create a component library for a component-driven development.
            </TextOld>
          </div>
        </Animate>
      </ContainerOld>
      <ContainerOld paddingX="none" width="lg" paddingY="sm" bgColor="black">
        <img src="/assets/raise-dev/design-system-feature.svg"/>
      </ContainerOld>
      <ContainerOld width="sm" paddingY="lg">
        <Heading level="h3" style="h5" classes={{root: "mb-8"}}>Proposed solutions</Heading>
        <div className="mb-16">
          <Animate>

            <TextOld as="p">
              The solution was to organize the files, which would lead to better locating the components needed. The way we organized our files was a core factor in building the design system. The goal would be for anyone to have the ability to pull atoms or component pieces together to create the intended feature. This will also allow for the designer to quickly create components if we need anything new or to update an existing piece.
            </TextOld>
            <TextOld style="lg-md">
              By componentizing our design, we are optimizing the way we design atoms, components and slices to build the front-end as well.
            </TextOld>
          </Animate>
        </div>
        <Animate>
          <DescriptionList hideNumber items={[
            {
              title:"Review & extract existing components ",
              description:"I extracted components, from the Figma files and the public site, in a systemized flow in Raise.dev’s project file in Figma, using a 3 layer design system our team adapted from Brad Frost’s Atomic Design System:"
            },
            {
              title:"Labelling files for a 1:1 design to development relationship",
              description:"I corrected the labelling of the components to have the same name in the design system. This is for creating a consistent naming convention, for design and development as well."
            }
          ]}/>
          <div className="mt-24 mb-16 ">
            <Heading level="h3" style="h5" classes={{root: "mb-8"}}>Goals & Guidelines</Heading>
            <TextOld as="div" classes={{root: "mb-8"}}>
              Organizing the assets and files assets was a core value in building the design system, where the goal would be for anyone in the team to have the ability to pull components and piece together a completed piece. Allowing for an efficient and quicker way in creating components. We considered the following criteria in measuring the success of the design system:
            </TextOld>
            <DescriptionHorizontalList items={[
              {
                title:"Design language",
                description:"From typography, colors, iconography, card styles, and shadows, are they consistent and follow the current branding?"
              },
              {
                title:"Design tokens & core components",
                description:"Have we extracted all of the components to create a base guideline that will be used to create higher components?"
              },
              {
                title:"Functionality",
                description:"We questioned almost every component that was originally created. Do we need this component? Is this component utilized anywhere else on the public site?"
              },
              {
                title:"Documentation & guidelines",
                description:"Have we provided components with the correct name and are we addressing the right naming convention for both design and in the code base? Have we documented the use cases for the core components?"
              },
            ]}/>
          </div>
        </Animate>
      </ContainerOld>
      <ContainerOld width="lg" bgColor="black">
        <div className="px-24 sm:px-0">
          <div className="mb-16">
            <Heading level="h3" style="h5" color="white" classes={{root: "mb-8"}}>Outcomes</Heading>
            <Animate>
              <TextOld as="div" color="white" classes={{root: "mb-8"}}>
                Creating the design system, through the process of constant iterations, design critique and feedback from the team, the Raise.dev design system allows for developers and product owners to strengthen the quality of product. No doubt will this create a richer user experience while using the Raise.dev platform.
                <br />
                For a successful design to developer collaboration, consistency in our designs were imperative. I designed the style guide early on, in such a way, that was helpful for when we were ready to create a design system.
                <br />
              </TextOld>
              <div className="p-4 mb-8 bg-opacity-25 border-l-2 rounded TextOld-gray-200 border-gray-50 bg-gray-50">
                <TextOld as="span" style="sm" color="white" classes={{root: 'mb-0'}}>
                  This feature is an on-going project and the following visuals are snippets of the progress and outcomes that were made.
                </TextOld>
              </div>
            </Animate>
          </div>
        </div>
        <div className="TextOld-center">
          <Heading level="h3" style="h2" color="white">Raise.dev Design System </Heading>
        </div>
        <img className="mx-auto" src="/assets/raise-dev/design-system-grid.svg"/>
        <div className="px-24 mb-16 sm:px-0">
          <Animate>
          <Heading level="h3" style="h5" color="white" classes={{root: "mb-8"}}>Reflection</Heading>
            <TextOld as="div" color="white" classes={{root: "mb-8"}}>
              The development of the design system required close involvement from product owners and the developers. Our team was small but we needed to communicate frequently because each decision we made would certainly impact the use and outcome of using the design system. I learned from this experience how to communicate early and to ask any questions or doubts I may have had through the process. I worked closely and alongside the product owner and lead developer, with sync-up meetings to ensure everyone was on the right track in building this feature out. 
            </TextOld>
            <TextOld as="div" color="white" style="lg-md" classes={{root: "mb-8"}}>
              The outcome of the design system wasn't fully completed but it was enough to get the team started and organized on the design components. I'm thrilled to have taken a large role on this and for the communication and teamwork experiences I've gained from it.
            </TextOld>
          </Animate>
        </div>
      </ContainerOld>
    </ProjectLayout>
  )
}
