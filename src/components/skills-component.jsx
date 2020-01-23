//Libraries
import React from 'react'

//Components 
import AccentElement from './accent-element.jsx'
import CopyElement from './copy-element.jsx'
import TitleElement from './title-element.jsx'

//Content
import Content from '../content.json'


const SkillsComponent = (props) => {
    return(
        <section className="skills">
            <div className="skills__container">
                <TitleElement
                    tag="h2" 
                    block="skills"
                    element="title"  
                    siteStyle={props.siteStyle}
                    content={Content.skills.heading} 
                />
                <AccentElement
                     block="skills"
                     siteStyle={props.siteStyle}
                />
                { Content.skills.tools.map((value, index) =>{
                    return <div className={`skills__content-wrapper skills__content-wrapper--${index}`}>
                                <TitleElement
                                    tag="h3"
                                    block="skills"
                                    element="tool-title"
                                    siteStyle={props.siteStyle}
                                    content={value.title}
                                />
                                <TitleElement
                                    tag="h6"
                                    block="skills"
                                    element="tool-sub-title"
                                    siteStyle={props.siteStyle}
                                    content={value.sub_title}
                                />
                                <AccentElement
                                    block="skills"
                                    siteStyle={props.siteStyle}
                                />
                                <div class="skills__tool-wrapper">
                                    { value.skills.map((value, index) =>{
                                        return <CopyElement
                                            block="skills"
                                            element="copy"
                                            modifier="box-display"  
                                            siteStyle={props.siteStyle}
                                            content={value} 
                                        />
                                    })}
                                </div> 
                            </div>
                })}
            </div>
        </section>
    )
}

export default SkillsComponent