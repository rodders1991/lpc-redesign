import React from 'react'
import { get } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Contact from '../components/Contact'

class ContactPage extends React.Component {
  render() {
    const logo = get(this, 'props.data.contentfulContactPage.logo')
    const navigationItems = get(
      this,
      'props.data.contentfulContactPage.navigation.items'
    )
    const banner = get(this, 'props.data.contentfulContactPage.banner')

    const markerUrl = get(this, 'props.data.contentfulContactPage.markerIcon.url');

    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        // TODO: This is for the search bar, we need to update this to search the contact directly
        projects={{}}
      >
        <Contact banner={banner} markerUrl={markerUrl} />
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPage {
    contentfulContactPage {
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
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 200
          height: 212
        )
      }
      markerIcon {
        url
      }
    }
  }
`
