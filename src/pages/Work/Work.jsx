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
        description: "A digital space utilizing Google’s Speech Recognition API that allows users to create doodles from QuickDraw! dataset through voice command by.",
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

    // const { projectData } = props;
    return(
        <>
            <Hero 
                pageTitle="A Portfolio" 
                heading="by Eileen"
                description="A detail-oriented UX/UI designer & front-end developer based in Toronto. I design and develop digital products, user interfaces and experiences. 
                Email me at eileenmvs@gmail.com"
            />
            <img src="/assets/scroll.svg" className="divider"/>
            <ProjectContainer items={projectData}/>
            {/* <ProjectContainer 
                title="PaperSpace" 
                description="A journaling App that tracks user’s emotions based on their written entries."
                tags="development       ux/ui"
                cta="View project here"
            /> */}
        </> 
    );
}

export default Work;