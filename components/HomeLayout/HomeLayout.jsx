import { Text, Container } from 'reviga-ui';
import {
  Layout,
  Heading,
  LinkIcon,
  Blob,
  ProjectCard,
  Button,
} from "../index"
import Link from 'next/link'
import { projectList } from "../../data/projects"
import { socials } from '../../data/footer';
import css from "./HomeLayout.module.scss"
import Animate from "../Animate";


const Home = () => {
  return (
    <Layout>
      <div className="relative">
        <Container classNames={{wrapper: "relative z-10"}}>
          <div className={css.container}>
            <Text.Heading variant="h1">
              Archives of my <br/>
              <span style={{paddingLeft: '60px'}}>most proudest</span> <br/>
              <Text variant="highlight" color="primary" textDecoration="underline"><u>UI/UX Design</u></Text> & <Text variant="highlight" color="primary"><u>Development</u></Text> Work
            </Text.Heading>
            <Text.Paragraph variant="highlight">
              Eileen Mae is a <Text color="primary" variant="bodyLg">Product Designer</Text>, based in Toronto, CA. Creating design systems for better digital service experiences
            </Text.Paragraph>
            <LinkIcon color="black" href="mailto:eileenmaesantiago@gmail.com">
              eileenmaesantiago@gmail.com
            </LinkIcon>
            <LinkIcon color="black" href={socials.linkedIn.link}>
              {socials.linkedIn.name}
            </LinkIcon>
          </div>
        </Container>
        <Blob />
      </div>
      <Container variant="sm" py="4">
        <article>
          {projectList.map((project) => (
            <ProjectCard data={project} />
          ))}
        </article>
      </Container>
    </Layout>
  )
}

export default Home
