import { useState, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { Text, Image, Container, FlexBox, Box } from 'reviga-ui';
import { 
  Container as ContainerOld,
  DescriptionList, 
  DescriptionGrid, 
  Heading, 
  Layout, 
  SectionHeading,
  Tag,
  List
} from '../index';
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
      <ContainerOld paddingY="none" classes={{root:"pt-20 pb-60"}}>
        <Text.Heading as="h1" variant="eyebrow">{data.title}</Text.Heading>
        <Text.Heading variant="h2">
          {data.description}
        </Text.Heading>
        <Text.Paragraph variant="bodyLg" color="gray">
          {data.tagline}
        </Text.Paragraph>
        <div className="mb-10">
          {data.tags.map(tag => (
            <Tag>
              <Text variant="bodySm">
                {tag}
              </Text>
            </Tag>
          ))}
            {/* {data.siteURL && (
              <LinkIcon openNewTab href={data.siteURL}>
                {data.cta}
              </LinkIcon>
            )} */}
        </div>
      </ContainerOld>
      )}>
      <ContainerOld>
        <Animate>
          <img className={cx('full-width mb-10', css.heroImg)} src={projectHeroPath}/>
        </Animate>
      </ContainerOld>
      <Container>
        <Text.Heading variant="eyebrow" as="h2"> 
          Overview
        </Text.Heading>
        <FlexBox>
          <div>
            <Image src="/assets/raise-dev/logo.svg" width="400" height="60"/>
          </div>
          <div>
            <Text.Paragraph ml={4}>
              {data.summary.overview}
            </Text.Paragraph>
          </div>
        </FlexBox>
        <FlexBox>
          <Box width="70%">
            <Text.Heading variant="eyebrow" as="h2"> 
              Problem
            </Text.Heading>
            <Text.Paragraph variant="bodyLg">
              {data.summary.problem}
            </Text.Paragraph>
            <Text.Heading variant="eyebrow" as="h2"> 
              Solution
            </Text.Heading>
            <Text.Paragraph>
              {data.summary.problem}
            </Text.Paragraph>
            {data.disclaimer && (
            <div className="p-4 mb-8 text-gray-500 border-l-2 border-gray-500 rounded bg-gray-50">
              <Text>
                  {data.disclaimer}
                </Text>
            </div>
          )}
            <Text.Heading variant="eyebrow" as="h2"> 
              Impact
            </Text.Heading>
            <Box mb={4}>
              <List items={data.summary.impact}/>
            </Box>
          </Box>
          <Box ml="5">
            <Text.Heading variant="eyebrow" as="h2"> 
              My Role
            </Text.Heading>
            <Box mb={4}>
              <List items={data.summary.roles}/>
            </Box>
            <Text.Heading variant="eyebrow" as="h2"> 
              Tools
            </Text.Heading>
            <Text.Paragraph>
              {data.summary.tools}
            </Text.Paragraph>
          </Box>
        </FlexBox>
      </Container>
      {children}
      {retrospective && (
        <ContainerOld width="sm">
          <SectionHeading color="grey-medium" heading="Retrospective" subheading={retrospective.subheading}/>
          <img className="mx-auto mb-16" src={retrospective.imageUrl}/>
          <DescriptionList items={retrospective.items}/>
        </ContainerOld>
      )}
    </Layout>
  )
}

export default ProjectLayout;
