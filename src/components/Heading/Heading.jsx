import React, { createContext } from 'react'
import cx from 'classnames';
const Heading = (props) => {

    const { className, level, children, color, weight } = props;
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

    return (
        <Tag 
            className={cx(
                `heading-${headingStyle}`,
                `heading--color-${color}`,
                `heading--weight-${weight}`,
                {
                    [className]: !!className
                }
            )}>
            {children}
        </Tag>
    )
}

Heading.defaultProps = {
    level: "h4"
};

export default Heading;