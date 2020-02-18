import React from 'react'

const Paragraph = (props) => {
    return(
        <p className={`p--size-${props.size}`}>
            {props.children}
        </p>
    )

}

export default Paragraph