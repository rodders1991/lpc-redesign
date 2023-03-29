import React from 'react'
import { get } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import About from '../components/About'

class SustainabilityPage extends React.Component {
  render() {
    const logo = get(this, 'props.data.contentfulSustainabilityPage.logo')
    const navigationItems = get(
      this,
      'props.data.contentfulSustainabilityPage.navigation.items'
    )

    const subtitle = get(
      this,
      'props.data.contentfulSustainabilityPage.subtitle'
    )

    const policies = get(this, 'props.data.contentfulSustainabilityPage.policies')

    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        projects={{}}
        navigationStatic
      >
        <About title="Sustainability" subtitle={subtitle} sections={policies} />
      </Layout>
    )
  }
}

export default SustainabilityPage

export const pageQuery = graphql`
  query SustainabilityPage {
    contentfulSustainabilityPage {
      navigation {
        items {
          name
          link
        }
      }
      logo {
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 350)
      }
      subtitle
      policies {
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
