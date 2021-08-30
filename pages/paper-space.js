import { useState, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import css from '../components/ProjectLayout/ProjectLayout.module.scss';
import cx from 'classnames';
import ModalImage from "react-modal-image";
import { 
  Container, 
  DescriptionList, 
  DescriptionGrid, 
  Heading, 
  ProjectLayout, 
  SectionHeading, 
  Text, 
  Quote 
} from '../components';
import projects from '../data/projects.js';

export default function project() {

  const { primaryColor, featuredImagePath } = projects.paperSpace;

  return (
    <ProjectLayout data={projects.paperSpace}>
      <Container width="sm">
        <SectionHeading color="grey-light" heading="01 Problem space" subheading="Identifying the problem"/>
      </Container>
      <Container width="lg" paddingY="sm" paddingX="none">
        <img src={featuredImagePath}/>
      </Container>
      <Container width="sm">
        <Heading level="h3">
          Journaling is an accessible way to define and reach our personal goals, to practice mindfulness, and to provide self-care.
        </Heading>
        <Text as="div" classes={{root: 'mb-12'}}>
          The trend of journaling has also grown significantly over the past years. 
          Through our interviews, we’ve discovered many people who view journaling as a beneficial way to understand their emotions and to practice mindfulness. However, we identified the problem of people challenged with journaling inconsistently.
        </Text>
        <div className="p-8 mb-12 bg-gray-50">
          <Text as="div" style="lg-md" color="grey-dark">
            We curiously wanted to enhance the digital writing experience by focusing on being mindful while improving the habit of journaling.
          </Text>
        </div>
      </Container>
      <Container bgColorHex={primaryColor} width="sm" paddingY="lg">
        <div className="flex flex-col">
          <SectionHeading color="grey-light" heading="User Interviews" subheading="Understanding the Habits of People who Journal"/>
          <Text as="div" classes={{root: 'mb-12'}}>
            We interviewed 5 individuals, characterized as young adults in college/ university or are working professionals. The questions focused in learning and understanding their <strong>journaling habits, purpose for journaling, and their writing experiences</strong> if that’s using paper or digital. 
          </Text>
          <div className="my-12">
            <ModalImage
              small="/assets/paper-space/interview-script.png"
              large="/assets/paper-space/interview-script.png"
              alt="Interview script"
            />
          </div>
          <SectionHeading color="grey-light" heading="Main Insights" subheading="Identifying the Commonalities"/>
          <Text as="div" classes={{root: 'mb-16'}}>
            The themes discovered from the user interviews revealed a common experience of people’s perception and purpose of journaling.
            <br />
            The user interviews revealed common themes on people’s perception and purpose of journaling and also habits.
          </Text>
          <DescriptionList items={[
            {
              title:"Journaling as way for reflection",
              additionals: " “For me, journaling is a way to put out my negative emotions and have a better understanding of my trigger points.“ "
            },
            {
              title:"Unable to journal consistently",
              additionals: "“I really want to journal everyday but it\’s hard to find the motivation to write consistently on a daily basis.“"
            },
            {
              title:"Values the writing experience itself veruses the sub-features that are distracting",
              additionals: "“I really want to journal everyday but It’s hard to find the motivation to write consistently on a daily basis.“"
            },
          ]}/>
        </div>
      </Container>
      <Container width="sm">
        <SectionHeading color="grey-light" heading="User Persona" subheading="From a journaller’s POV"/>
      </Container>
      <Container paddingY="none">
        <ModalImage
          small="/assets/paper-space/user-persona.svg"
          large="/assets/paper-space/user-persona.svg"
          alt="Interview script"
        />
      </Container>
      <Container width="sm">
        <Text as="div" classes={{root: 'mb-20'}}>
          Collaboratively, we gathered insights and themes from our user research to create this user persona, Emilie, to identify our target audience’s user needs. We explored how this could drive the success of our product and design.
        </Text>
        <SectionHeading color="grey-light" heading="02 Design Process" subheading="Designing the product"/>
        <Text as="div" classes={{root: 'mb-12'}}>
          We mapped out our solutions by going through each step and asked ourselves HMW's to find design opportunities, and followed by gathering inspiration. We enjoyed this part because it allowed for creative thinking and bringing in ideas on what people like. Our design sprint, facilitated by one of our team members, undeniably helped our decision in delivering the success of the product feature.
          <br />
          <strong>Collaboratively, we identified which features deemed higher priority.</strong> It was important for everyone to agree on the definite core features while also considering the technical and time limitations during that time. 
        </Text>
      </Container>
      <Container width="lg" paddingY="lg" bgColor="black">
        <SectionHeading isDark heading="HMW" subheading="How might we provide a digital writing space that motivates people to journal and reflect upon their emotions in an intuitive way?"/>
        <Text as="p" color="grey-light">
          We were challenged with the technical feasibility in incorporating our proposed feature ideas as well as meeting the deadlines. This led us to think about the product more intuitively to determine the right core feature(s) we wanted to successfully attain for the app. 
          <br />
          Having looked into the competitive market for journaling, we observed the use of graphical interfaces for displaying mood and behaviour.
        </Text>
      </Container>
    </ProjectLayout>
  )
}
