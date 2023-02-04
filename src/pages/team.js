import React from 'react'
import { get } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Team from '../components/Team'

class TeamPage extends React.Component {
  render() {
    const logo = get(this, 'props.data.contentfulTeamPage.logo')
    const navigationItems = get(
      this,
      'props.data.contentfulTeamPage.navigation.items'
    )

    const employees = get(this, 'props.data.contentfulTeamPage.employees');

    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        projects={{}}
        navigationStatic
      >
        <Team employees={employees} />
      </Layout>
    )
  }
}

export default TeamPage

export const pageQuery = graphql`
  query TeamPage {
    contentfulTeamPage {
      navigation {
        items {
          name
          link
        }
      }
      logo {
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 250)
      }
      employees {
        name
        role
        linkedIn
        image {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
        }
        about {
            about
        }
      }
    }
  }
`
