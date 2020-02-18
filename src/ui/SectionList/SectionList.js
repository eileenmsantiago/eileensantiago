import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const SectionList = (props) => {

    return(
        <>
            {
                props.items.map(item => {
                    console.log(item)
                    return (
                        <div className="section-list__item">
                            <Heading level="h4">
                                {item.title}
                            </Heading>
                            <div>
                                {item.heading}
                            </div>
                            <div className="section-list__subheading">
                                {item.subheading}
                            </div>
                            <Paragraph>
                                {item.description}
                            </Paragraph>
                        </div>
                    );
                })
            }
        </>
        
    )
}

SectionList.defaultProps = {
    items: []
}

export default SectionList;