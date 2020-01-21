//Libraries
import React from 'react'

//Components 
import TitleElement from './title-element.jsx'
import CopyElement from './copy-element.jsx'

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
                <CopyElement 
                    block="hero"
                    element="copy"  
                    siteStyle={props.siteStyle}
                />
            </div>
        </section>
    )
}

export default HeroComponent