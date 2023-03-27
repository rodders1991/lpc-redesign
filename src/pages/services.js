import React from 'react'
import { get } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Services from '../components/Services'

class TeamPage extends React.Component {
  render() {
    const logo = get(this, 'props.data.contentfulContactPage.logo')
    const navigationItems = get(
      this,
      'props.data.contentfulContactPage.navigation.items'
    )

    const services = get(this, 'props.data.allContentfulService.nodes')

    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        projects={{}}
        navigationStatic
      >
        <Services services={services} />
      </Layout>
    )
  }
}

export default TeamPage

export const pageQuery = graphql`
  query ServicesPage {
    contentfulContactPage {
      navigation {
        items {
          name
          link
        }
      }
      logo {
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 350)
      }
    }
    allContentfulService {
      nodes {
        name
        subTitle
        icon {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
        }
      }
    }
  }
`
