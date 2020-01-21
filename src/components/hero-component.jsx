//Libraries
import React from 'react'

//Components 
import TitleElement from './title-element.jsx'

const HeroComponent = (props) => {
    return(
        <section className="hero">
            <div className="hero__container">
                <TitleElement
                    tag="h1" 
                    block="hero"
                    element="title"  
                    siteStyle={props.siteStyle}
                    content="Alex builds wonderful websites in Kansas City." />
            </div>
        </section>
    )
}

export default HeroComponent