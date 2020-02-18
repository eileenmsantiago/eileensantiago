import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const Section = (props) => {
    return(
        <div className="section">
            <div className="section__header">
                <Heading level="h3">                    
                    {props.heading}
                </Heading>
            </div>
            <div className="section__content">
                {props.children}
            </div>
        </div>
    )
}

Section.defaultProps = {
}

export default Section;