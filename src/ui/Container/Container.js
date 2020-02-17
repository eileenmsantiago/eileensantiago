import React from 'react'

const Container = (props) => {

    return (
        <div className="container e-container">
            {props.children}
        </div>
    ) 
}

export default Container;