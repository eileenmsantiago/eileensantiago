import {
  Layout,
  Container,
  Heading,
  Text,
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
            <Heading level="h1" className="w-full lg:w-5/6">
              A <em>Product Designer</em> experienced in{" "}
              <em>front-end development</em>, creating design systems for better
              digital experiences.
            </Heading>
            <div className="flex flex-col space-y-4 sm:space-y-2">
              <div className="flex flex-row space-x-4">
                <Text style="lg-md">
                  ↗
                </Text>
                <Text style="lg">
                  <Link href={socials.linkedIn.link}>{socials.linkedIn.name}</Link>
                </Text>
              </div>
              <div className="flex flex-row space-x-4">
                <Text style="lg-md">
                  ↗
                </Text>
                <Text style="lg"> 
                  <Link href="mailto:eileenmaesantiago@gmail.com">eileenmaesantiago@gmail.com</Link>
                </Text>
              </div>
            </div>
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
