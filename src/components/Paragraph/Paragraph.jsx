import React from 'react'
import cx from 'classnames';
const Paragraph = (props) => {

    const { className, children, size, weight, color } = props;
    return(
        <p 
            className={cx(
                `p-text--size-${size}`,
                `p-text--weight-${weight}`,
                `p-text--color-${color}`,
                {
                    [className]: !!className
                })}>
            {children}
        </p>
    )
}

export default Paragraph;