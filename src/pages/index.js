import { graphql } from 'gatsby'
import { get } from 'lodash'
import React from 'react'
import Layout from '../components/layout'
import LandingContainer from '../components/LandingContainer/landing-container';

class RootIndex extends React.Component {
  render() {
    const navigationItems = get(
      this,
      'props.data.contentfulLandingPage.navigation.items'
    )
    const galleryItems = get(this, 'props.data.contentfulLandingPage.gallery')
    const logo = get(this, 'props.data.contentfulLandingPage.logo')

    return (
      <Layout logo={logo} navigation={navigationItems} location={this.props.location}>
        <LandingContainer galleryItems={galleryItems} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query LandingPage {
    contentfulLandingPage {
      navigation {
        items {
          name
          link
        }
      }
      logo {
        gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 250
          )
      }
      gallery {
        media {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        link
        heading
        subHeading {
          raw
        }
      }
    }
  }
`
