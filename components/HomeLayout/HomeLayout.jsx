import { Layout, Container, Heading, Text, Blob, ProjectCard, Button } from '../index';
import { projectList } from '../../data/projects';
import css from './HomeLayout.module.scss';

const Home = () => {
  return (
    <Layout>
        <div className="relative">
            <Container classes={{root: "relative z-10"}} paddingY="lg">
                <div className={css.heroText}>
                <Heading level="h1" className="w-full lg:w-5/6">
                    A <em>Product Designer</em> experienced in <em>front-end development</em>, creating design systems for better digital experiences.
                </Heading>
                <Button as="a" href="/raise">View Select Project</Button>
                </div>
            </Container>
            <Blob />
        </div>
        <Container>
            <div className="mb-4">
                <Text style="sm-bold">
                    Selected work
                </Text>
            </div>
            <hr />
            <article>
                {projectList.map(project => (
                    <ProjectCard data={project}/>
                ))}
            </article>
        </Container>
    </Layout>
  )
}

export default Home;
