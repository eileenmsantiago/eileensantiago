import { useState, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { 
  Container, 
  DescriptionList, 
  DescriptionGrid, 
  Heading, 
  Layout, 
  SectionHeading, 
  Text } from '../index';
import cx from 'classnames';
import css from './ProjectLayout.module.scss';
import LinkIcon from '../LinkIcon';
import Animate from '../Animate';

const ProjectLayout = (props) => {
  const { data, children } = props;
  const { primaryColor, projectHeroPath, featuredImagePath, myRole, retrospective } = data;
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
      navBgColor={primaryColor}
      transparentNav={() => (
      <Container width="sm" paddingY="none" classes={{root:"pt-20 pb-36",container:"text-center"}}>
        <Heading level="h1" style="h5" classes={{root:'mb-2'}}>{data.title}</Heading>
        <Heading level="h2" style="h2" classes={{root:'mb-4'}}>
          {data.description}
        </Heading>
        <div className="mb-10">
          {data.tags.map(tag => (
            <Text as="span" style="sm" color="grey-dark" classes={{root: 'rounded bg-gray-50 px-3 py-1 m-1 rounded inline-flex items-center align-middle'}}>
              {tag}
            </Text>
          ))}
        </div>
        {data.siteURL && (
          <div className="flex justify-center">
            <LinkIcon openNewTab href={data.siteURL}>
              {data.cta}
            </LinkIcon>
          </div>
        )}
      </Container>
      )}>
      <Container width="sm" marginY="lg" >
        <Animate>
          <img className={cx('full-width mb-10', css.heroImg)} src={projectHeroPath}/>
        </Animate>
        <Heading level="h3" style="h5" classes={{root: "mb-8"}}> 
          Overview
        </Heading>
        <Animate>
          <Text as="div" style="lg" classes={{root: "mb-8"}}>
            {data.overview}
          </Text>
          <Text style="lg-md" as="div" classes={{root: "mb-8"}}>
            {data.featureDescription}
          </Text>
          {data.featureItem.length > 0 && (
            <DescriptionList items={data.featureItem}/>
          )}
          {data.disclaimer && (
            <div className="p-4 mb-8 text-gray-500 border-l-2 border-gray-500 rounded bg-gray-50">
              <Text as="div" style="sm">
                  {data.disclaimer}
                </Text>
            </div>
          )}
        </Animate>
        <Animate>
          <DescriptionGrid items={data.projectScope}/>
        </Animate>
      </Container>
      <Container width="sm" paddingY="lg" bgColor="black">
        <SectionHeading isDark heading="my role" subheading={myRole.subheading}/>
        <Animate>
          <DescriptionList isDark items={data.myRole.items}/>
        </Animate>
      </Container>
      {children}
      {retrospective && (
        <Container width="sm">
          <SectionHeading color="grey-light" heading="Retrospective" subheading={retrospective.subheading}/>
          <img className="mx-auto mb-16" src="/assets/raise-dev/raisedev-team.png"/>
          <DescriptionList items={retrospective.items}/>
        </Container>
      )}
    </Layout>
  )
}

export default ProjectLayout;
