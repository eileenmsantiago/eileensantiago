import React from 'react'
import cx from 'classnames'

const Container = (props) => {

    const { bgHex, className, children, bgColor } = props;

    return (
        <div
            className={cx('e-container', `e-container--bg-${bgColor}`)}
            style={{backgroundColor: bgHex}}
        >
            <div className={cx("container",{
                className: !!className,
            })}>
                {children}
            </div>
        </div>
    ) 
}

Container.defaultProps = {
    bgColor: 'white'
}

export default Container;