import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const Section = (props) => {

    const { heading, children, noGutter } = props;
    return(
        <>
        <div className="category-container ">
            <div className="category-container__nav">
                <Heading level="h3" style="h4" color="black">                    
                    {heading}
                </Heading>
            </div>
            <div className={`fade-in-section is-visible category-container__content ${noGutter ? 'category-container__content--no-gutter' : ''}`}>
                {children}
            </div>
        </div>
        </>
    )
}

Section.defaultProps = {
}

export default Section;