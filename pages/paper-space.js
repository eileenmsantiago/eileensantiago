import projects from '../data/projects.js';
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';

export default function project() {
  return (
    <ProjectLayout data={projects.paperSpace}/>
  )
}
