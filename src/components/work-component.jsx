//Libraries
import React from 'react'

//Components
import AccentElement from './accent-element.jsx'
import TitleElement from './title-element.jsx'

//Content
import Content from '../content.json'

const WorkComponent = (props) => {
    return(
        <section className="section work">
            <div className="work__container">
                <div className="work__heading-wrapper">
                    <TitleElement
                        tag="h2"
                        block="work"
                        element="heading"
                        siteStyle={props.siteStyle}
                        content={Content.work.heading}
                    />
                    <TitleElement
                        tag="h3"
                        block="work"
                        element="sub-heading"
                        siteStyle={props.siteStyle}
                        content={Content.work.subheading}
                    />
                    <AccentElement
                        block="work"
                        siteStyle={props.siteStyle}
                    />
                </div>
            </div>
        </section>
    )
}

export default WorkComponent