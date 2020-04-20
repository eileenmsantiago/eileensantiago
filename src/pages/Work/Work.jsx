import React from 'react'
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer'
import Hero from '../../components/Hero/Hero';

const projectData = [
    {
        title: "PaperSpace",
        description: "A journaling App that tracks user’s emotions based on their written entries.",
        tags: "front-end & back-end development      ux/ui       project management",
        image: "PaperSpace-container.svg"
    },
    {
        title: "YODAE",
        description: "A digital space utilizing Google’s Speech Recognition API that allows users to create doodles from a dataset by QuickDraw! through voice command.",
        tags: "development      ux/ui",
        image: "PaperSpace-container.svg"
    },
    {
        title: "GlucoCheck",
        description: "GlucoCheck is a Smartwatch app to guide or be a best-friend to count on (health wise) to keep your blood sugar levels in check.",
        tags: "ux/ui       case study",
        image: "Glucocheck-container.svg"
    },
    {
        title: "COVID-19 Tracker",
        description: "A React.js application viewing a COVID-19 Case Data that interacts with an Express server retrieving its data from a COVID-19 API.",
        tags: "back-end development",
        image: "COVID-container.svg"
    },
]

const Work = (props) => {

    return(
        <>
            <Hero 
                pageTitle="A Portfolio" 
                heading="by Eileen"
                description="A systems thinker, based in Toronto, who uses design & code to strategize and solve digital product solutions.  
                Email me at eileenmvs@gmail.com"
            />
            <img src="/assets/scroll.svg" className="divider"/>
            <ProjectContainer items={projectData}/>
        </> 
    );
}

export default Work;