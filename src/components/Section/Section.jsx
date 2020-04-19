import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const Section = (props) => {

    const { heading, children, noGutter } = props;
    return(
        <div className="section">
            <div className="section__nav">
                <Heading level="h3" color="white">                    
                    {heading}
                </Heading>
            </div>
            <div className={`section__content ${noGutter? 'section__content--no-gutter' : ''}`}>
                {children}
            </div>
        </div>
    )
}

Section.defaultProps = {
}

export default Section;