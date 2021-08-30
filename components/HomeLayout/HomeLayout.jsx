import {
  Layout,
  Container,
  Heading,
  Text,
  LinkIcon,
  Blob,
  ProjectCard,
  Button,
} from "../index"
import Link from 'next/link'
import { projectList } from "../../data/projects"
import { socials } from '../../data/footer';
import css from "./HomeLayout.module.scss"

const Home = () => {
  return (
    <Layout>
      <div className="relative">
        <Container classes={{ root: "relative z-10" }} paddingY="lg">
          <div className={css.heroText}>
            <Heading level="h1" style="h5" color="grey-dark" classes={{ root: "mb-4" }}>
              Hello, I'm Eileen.
            </Heading>
            <Heading level="h1" className="w-full lg:w-5/6">
              A <em>Product Designer</em> experienced in{" "}
              <em>front-end development</em>, and creating design systems for better
              digital experiences.
            </Heading>
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
      <Container>
        <div className="mb-4">
          <Text style="sm-bold">Selected work</Text>
        </div>
        <hr />
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
