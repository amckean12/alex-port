//Libraries
import React, { Component } from 'react';

//Components
import HeroComponent from '../components/hero-component.jsx'

class SiteContainer extends Component {
    render() {
        return (
            <HeroComponent siteStyle="neomorphism"/>
        )
    }
}

export default SiteContainer