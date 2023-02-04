import React from 'react'
import { get } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import About from '../components/About'

class AboutPage extends React.Component {
  render() {
    const logo = get(this, 'props.data.contentfulAboutPage.logo')
    const navigationItems = get(
      this,
      'props.data.contentfulAboutPage.navigation.items'
    )

    const banner = get(this, 'props.data.contentfulAboutPage.banner')
    const subtitle = get(
      this,
      'props.data.contentfulAboutPage.subtitle.subtitle'
    )

    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        projects={{}}
        navigationStatic
      >
        <About banner={banner} subtitle={subtitle} />
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    contentfulAboutPage {
      navigation {
        items {
          name
          link
        }
      }
      logo {
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 250)
      }
      banner {
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1000)
      }
      subtitle {
        subtitle
      }
    }
  }
`
