import React from 'react'

const Container = (props) => {

    const bgClass = `e-container--bg-${props.bgColor}`;

    return (
        <div className={`e-container ${bgClass}`}>
            <div className="container">
                {props.children}
            </div>
        </div>
    ) 
}

Container.defaultProps = {
    bgColor: 'white'
}

export default Container;