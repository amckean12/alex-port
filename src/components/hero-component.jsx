//Libraries
import React from 'react'

//Components 
import AccentElement from './accent-element.jsx'
import CopyElement from './copy-element.jsx'
import TitleElement from './title-element.jsx'

//Content
import Content from '../content.json'

const HeroComponent = (props) => {
    return(
        <section className="section hero">
            <div className="hero__container">
                <TitleElement
                    tag="h1" 
                    block="hero"
                    element="title"  
                    siteStyle={props.siteStyle}
                    content={Content.hero.heading} />
                <AccentElement 
                    block= "hero"
                    siteStyle={props.siteStyle}
                />
                <CopyElement 
                    block="hero"
                    element="copy"  
                    siteStyle={props.siteStyle}
                    content={Content.hero.subheading}
                />
            </div>
        </section>
    )
}

export default HeroComponent