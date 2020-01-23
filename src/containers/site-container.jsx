//Libraries
import React, { Component } from 'react';

//Components
import HeaderComponent from '../components/header-component.jsx'
import HeroComponent from '../components/hero-component.jsx'
import SkillsComponent from '../components/skills-component.jsx'

class SiteContainer extends Component {
    render() {
        return (
            <div className="port-site">
                <HeaderComponent siteStyle="dark-minimal" />
                <HeroComponent siteStyle="dark-minimal" />
                <SkillsComponent siteStyle="dark-minimal" />
            </div>
        )
    }
}

export default SiteContainer