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
                            <Heading level="h4" style="h4">
                                {item.title}
                            </Heading>
                            <Paragraph 
                                className="section-list__location"
                                size="reg"
                                weight="bold"
                                color="black"
                            > 
                                {item.heading}
                            </Paragraph>
                            <Paragraph 
                                className="section-list__date"
                                size="reg"
                                weight="reg"
                                color="grey"
                            > 
                                {item.subheading}
                            </Paragraph>
                            <Paragraph
                                className="section-list__content"
                                size="reg"
                                weight="reg"
                                color="black"
                            >
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