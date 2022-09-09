import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './Navigation/navigation'
import Footer from './Footer/footer'
class Template extends React.Component {
  render() {
    const { children, navigation } = this.props

    return (
      <>
        <Seo />
        <Navigation navigation={navigation} />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
