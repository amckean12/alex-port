//Libraries
import React from 'react'

//Components 
import TitleElement from './title-element.jsx'
import CopyElement from './copy-element.jsx'
import ButtonElement from './button-element.jsx'

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
                {console.log()}
                <CopyElement 
                    block="hero"
                    element="copy"  
                    siteStyle={props.siteStyle}
                    content={Content.hero.subheading}
                />
                <ButtonElement
                    block="hero"
                    element="button"
                    siteStyle ={props.siteStyle}
                    content={Content.hero.cta_text}
                />
            </div>
        </section>
    )
}

export default HeroComponent