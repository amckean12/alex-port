//Libraries
import React from 'react'

//Components 
import TitleElement from './title-element.jsx'

const HeroComponent = (props) => {
    return(
        <section className="hero">
            <TitleElement
                tag="h1" 
                block="hero"
                element="title"  
                siteStyle={props.siteStyle}
                content="Hello, I'm Alex, a Front End Developer." />
            <TitleElement
                tag="h2" 
                block="hero"
                element="sub-title"  
                siteStyle={props.siteStyle}
                content="How can I help?" />
        </section>
    )
}

export default HeroComponent