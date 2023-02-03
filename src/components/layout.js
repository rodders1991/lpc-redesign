import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './Navigation/navigation'
import Footer from './Footer/footer'
class Template extends React.Component {
  render() {
    const { children, navigation, logo, projects, navigationStatic } = this.props

    return (
      <>
        <Seo />
        <Navigation
          logo={logo}
          navigation={navigation}
          projects={projects}
          staticStyle={navigationStatic}
        />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
