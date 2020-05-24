import React from 'react'

const Container = (props) => {
    const {bgHex} = props;
    const bgClass = `e-container--bg-${props.bgColor}`;

    return (
        <div className={`e-container ${bgClass}`} style={{backgroundColor: bgHex}}>
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