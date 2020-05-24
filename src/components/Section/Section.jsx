import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const Section = (props) => {

    const { heading, children, noGutter } = props;
    return(
        <section className="section fade-in-section is-visible">
            <div className="section__nav">
                <Heading level="h3" style="h4" color="white">                    
                    {heading}
                </Heading>
            </div>
            <div className={`section__content ${noGutter? 'section__content--no-gutter' : ''}`}>
                {children}
            </div>
        </section>
    )
}

Section.defaultProps = {
}

export default Section;