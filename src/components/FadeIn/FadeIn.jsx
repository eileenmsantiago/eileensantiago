import React , { useState, useEffect, useRef } from 'react';

function FadeIn(props) {
    
    const [ isVisible, setVisible ] = useState(false);
    const domRef = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(!isVisible) {
                    setVisible(entry.isIntersecting)
                }
            });
        })
        observer.observe(domRef.current);
        
        return () => observer.unobserve(domRef.current);
    }, [isVisible]);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeIn;