// import React from 'react'
// import Heading from '../Heading/Heading'
// import Paragraph from '../Paragraph/Paragraph';
// import ProjectList from '../ProjectList/ProjectList';

// const ProjectContainer = (props) => {
    
//     const { cta } = props;

//     return (
//         <>
//             {
//                 props.items.map(projectItem => {
//                     return (
//                         <section className="projects">
//                             <div className="projects__container">
//                                 <div className="col-md-6">
//                                     <img className="projects__container-image" src={`/assets/${projectItem.image}`}/>
//                                 </div>
//                                 <div className="col-md-6 project__container-content">
//                                     <div className="wrapper">
//                                         <Heading level="h3" style="h2">{projectItem.title}</Heading>
//                                         <Paragraph className="description" size="reg" weight="regular" color="grey">{projectItem.description}</Paragraph>
//                                         <Paragraph size="sm" weight="bold" color="grey">{projectItem.tags}</Paragraph>
//                                         <a href={`https://${projectItem.url}`} className="cta">
//                                             <Paragraph size="sm" weight="md" weight="bold" color="black">{cta}</Paragraph>
//                                             <img src="/assets/arrow.svg"/>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <ProjectList></ProjectList>
//                             </div>
//                         </section>
//                     );
//                 })
//             }
//         </>
//     )
// }

// ProjectContainer.defaultProps = {
//     items: []
// }

// export default ProjectContainer;