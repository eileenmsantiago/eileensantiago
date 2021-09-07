import {
  Layout,
  Container,
  Heading,
  Text, 
  Button,
  LinkIcon,
  Animate
} from "../index"
import cx from 'classnames';
import css from "./AboutLayout.module.scss"
import { socials } from "../../data/footer"
import { facts, imageCaption } from "../../data/about";
import ResumeItem from '../ResumeItem/ResumeItem';

const AboutLayout = (props) => {
  
  const { isDark } = props;
  const linkTextClass = isDark ? css.linkTextWhite : css.linkText

  return (
    <Layout
      isDark
      navBgColor="#2D2F34"
      transparentNav={() => (
        <div className="relative">
          <Container classes={{ root: "relative z-10" }} paddingY="lg">
            <div className="flex flex-row space-x-8 sm:space-x-0 sm:flex-col">
              <div className="flex mx-auto mb-8">
                <img className="mx-auto mb-auto" src="/assets/profile/eileen.jpg"/>
              </div>
              <Animate>
                <Text style="lg-md" as="p" color="white">
                  Hello, I'm Eileen.
                </Text>
                <Heading level="h2" style="h2" className="w-full lg:w-5/6" color="white">
                  I am an Experience Designer, an Agile Practitioner, a Problem-solver and a Visual Communicator.
                </Heading>
                <div className="flex flex-col">
                  <div className="mb-8">
                    {facts.map(fact => (
                      <Text 
                        color="grey-light"
                        className="inline mr-4"
                        as="p"
                        >
                          {fact} 
                      </Text>
                    ))}
                  </div>
                  <LinkIcon color="white" href="mailto:eileenmaesantiago@gmail.com">
                    eileenmaesantiago@gmail.com
                  </LinkIcon>
                  <LinkIcon color="white" href={socials.linkedIn.link}>
                    {socials.linkedIn.name}
                  </LinkIcon>
                  <LinkIcon color="white" href="/assets/resume/Resume_EileenSantiago.pdf">
                    View my resume
                  </LinkIcon>
                </div>
              </Animate>
            </div>
          </Container>
        </div>
      )}>
      <Container>
        <div className="grid grid-cols-3 mb-24 sm:mb-16 md:grid-cols-1">
          <div className="col-span-1">
            <Heading level="h3" style="h2">
              Experiences
            </Heading>
          </div>
          <div className="col-span-2">
            <Animate>
              <ResumeItem href="https://eileensantiago.com/" company="By Eileen Mae" position="Freelance UI/UX & Visual Designer" date="Toronto, ON | October 2020 to Present"></ResumeItem>
            </Animate>
            <Animate delay="400">
              <ResumeItem href="https://raise.dev/" company="Raise.dev" position="UI/UX Designer & Front-end Developer" date="New York, NY | June 2020 to June 2021"></ResumeItem>
            </Animate>
            <Animate delay="600">
              <ResumeItem href="https://eileensantiago.com/" company="Dahdaleh Institute of Global Health Research @ York University" position="Graphic Communications Designer" date="Toronto, ON | October 2018 to June 2019"></ResumeItem>
            </Animate>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1">
          <div className="col-span-1">
            <Heading level="h3" style="h2">
              Certificates & Community
            </Heading>
          </div>
          <div className="col-span-2">
            <Animate>
              <ResumeItem href="https://www.interaction-design.org/" company="Interaction Design Foundation (IDF)" position="Member Certificate" date="June 2020 to Present"></ResumeItem>
            </Animate>
            <Animate>
              <ResumeItem href="https://designx.community/" company="DesignX" position="Community Member" date="Toronto, ON | May 2020 to Present"></ResumeItem>
            </Animate>
          </div>
        </div>
      </Container>
      <Container width="lg" bgColor="white">
        <div className="mx-auto mb-12">
          <Heading level="h2" style="h2" classes={{root: 'text-center'}}>Captured moments of 2021</Heading>
        </div>
        <Animate>
          <div className="flex flex-row mx-auto sm:flex-col">
            {imageCaption.map(image => (
              <>
              <div className="flex-row mb-8">
                <div>
                  <img className='mx-auto mb-2 sm:w-full' src={image.imagePath}/>
                </div>
                <div className="text-center">
                  <Text as="p" style="sm" color="grey-dark">{image.caption}</Text>
                </div>
              </div>
              </>
            ))
            }
          </div>
        </Animate>
      </Container>
      <Container width="sm" paddingY="lg">
        <div className="mb-12">
          <Animate>
            <Text style="h1">
              Thanks for making it this far. Interested in chatting about making lattes to design or anything in between? I’d love to hear from you. 
            </Text>
          </Animate>
        </div>
        <Animate>
          <LinkIcon href="mailto:eileenmaesantiago@gmail.com">
            eileenmaesantiago@gmail.com
          </LinkIcon>
        </Animate>
        <Animate delay="400">
          <LinkIcon  color="black" href={socials.linkedIn.link}>
            {socials.linkedIn.name}
          </LinkIcon>
        </Animate>
        <Animate delay="600">
          <LinkIcon  color="black" href="/assets/resume/Resume_EileenSantiago.pdf">
            View my resume
          </LinkIcon>
        </Animate>
      </Container>
    </Layout>
  )
}

export default AboutLayout
