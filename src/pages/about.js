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

    const subtitle = get(
      this,
      'props.data.contentfulAboutPage.subtitle.subtitle'
    )

    const sections = get(this, 'props.data.contentfulAboutPage.sections')

    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        projects={{}}
        navigationStatic
      >
        <About
          subtitle={subtitle}
          sections={sections}
        />
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
      subtitle {
        subtitle
      }
      sections {
        header
        content {
          raw
        }
        image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1000)
        }
      }
    }
  }
`
