//Libraries
import React from 'react'

//Components 
import TitleElement from './title-element.jsx'
import CopyElement from './copy-element.jsx'
import ButtonElement from './button-element.jsx'

//Content
import Content from '../content.json'

const SkillsComponent = (props) => {
    return(
        <section className="skills">
            <div className="skills__container">
                <CopyElement 
                    block="skills"
                    element="copy"  
                    siteStyle={props.siteStyle}
                    content={Content.skills.test_content}
                />
            </div>
        </section>
    )
}

export default SkillsComponent