import React from 'react'

const Heading = (props) => {

    const { className, level, children, color } = props;
    let { style } = props;
    // Default style to level value 
    let headingStyle;
    if (!style) {
        headingStyle = level
    } else {
        headingStyle = style
    }

    // Assign level to a variable with a capital letter (React restrictions)
    const Tag = level;

    // Determine which class to use based on style
    const styleClass = `heading-${headingStyle}`;
    
    return (
        <Tag 
            className={`
                ${className} 
                ${styleClass}
                ${color}
            `}>
            {children}
        </Tag>
    )
}

Heading.defaultProps = {
    level: "h4"
};

export default Heading;