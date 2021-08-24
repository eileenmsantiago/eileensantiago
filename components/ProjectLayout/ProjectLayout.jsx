import { useState, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Container, SectionHeading, Layout, DescriptionList, DescriptionGrid, Heading, Text } from '../index';
import cx from 'classnames';
import css from './ProjectLayout.module.scss';
import LinkIcon from '../LinkIcon';

const ProjectLayout = (props) => {
  const { data, children } = props;
  const { primaryColor, projectHeroPath, featuredImagePath, myRole } = data;
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
    <Layout
      navBgColor={data.primaryColor}
      transparentNav={() => (
        <Container width="sm" paddingY="none" classes={{root:"pt-24 pb-48", container:"text-center"}}>
          <Heading level="h1" style="h5" classes={{root:'mb-2'}}>{data.title}</Heading>
          <Heading level="h2" style="h2" classes={{root:'mb-4'}}>
            {data.description}
          </Heading>
          <div className="mb-10">
            {data.tags.map(tag => (
              <Text style="md" color="grey-dark" classes={{root: 'p-2 mx-2'}}>
                {tag}
              </Text>
            ))}
          </div>
          <div className="flex justify-center">
            <LinkIcon href="https://raise.dev">
              View live site
            </LinkIcon>
          </div>
        </Container>
    )}>
      <Container width="sm" marginY="lg" >
        <img className={cx('full-width mb-10', css.heroImg)} src={data.projectHeroPath}/>
        <Heading level="h3" style="h2"> Overview </Heading>
        <Text as="div" classes={{root: "mb-8"}}>
          {data.overview}
        </Text>
        <div className="p-4 mb-8 text-gray-500 border-l-2 border-gray-500 rounded bg-gray-50">
          <Text as="div" style="sm">
            {data.disclaimer}
          </Text>
        </div>
        <Text style="lg-md" as="div" classes={{root: "mb-8"}}>
          {data.featureDescription}
        </Text>
        <DescriptionList items={data.featureItem}/>
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
        <SectionHeading isDark heading="my role" subheading={myRole.subheading}/>
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
      {children}
      <Container width="sm">
        <SectionHeading color="grey-light" heading="Retrospective" subheading="Executing the MVP amidst the chaos of a global pandemic"/>
        <img className="mx-auto mb-16" src="/assets/raise-dev/raisedev-team.png"/>
        <DescriptionList items={[
          {
            title:"Asynchronous work setting",
            description:"The pandemic undoubtedly altered the way people and companies work, collaborate and communicate together. The process in building the MVP was definitely not linear and the team encountered, both UX and technical aspects, challenges. My experience with this is to communicate as effecively and efficiently as possible. Also, laying out the details in your response was imperative to ensure what you're saying is clear to the other person."
          },
          {
            title:"Design to developer handoff",
            description:"Friction is easily spotted between designers and developers since both perform different tasks and can view the same challenge very differently. Communicating and reducing any knowledge gaps will lead to better results. My experience with this is learning to hold conversations early on to decrease the chances of the unexpected. Other things include: providing all design files and necessary documentation in GitHub issues and hold meetings with the right people to sync up."
          }
        ]}/>
      </Container>
    </Layout>
  )
}

export default ProjectLayout;
