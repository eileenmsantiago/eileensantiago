import React from 'react';
import Paragraph from '../components/Paragraph/Paragraph';

const ProjectList = (props) => {

    const { projectItemList } = props;
    return (
        <div className="project-list">
            <Paragraph size="xl" weight="regular" color="black"><a href={projectItemList}></a></Paragraph>
        </div>
    )
}
export default ProjectList;