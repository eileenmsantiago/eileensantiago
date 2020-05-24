import React from 'react'

const Paragraph = (props) => {

    const { className, children, size, weight, color } = props;
    return(
        <p 
            className={`
                p-text
                p-text--size-${size}
                p-text--weight-${weight}
                p-text--color-${color}
            ${className ? className : ""}
        `}>
            {children}
        </p>
    )
}

export default Paragraph;