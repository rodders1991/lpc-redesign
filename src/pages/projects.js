import React from 'react'
import { get } from 'lodash'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Projects from '../components/Projects'

class ProjectsPage extends React.Component {
  render() {
    const logo = get(this, 'props.data.contentfulContactPage.logo')
    const navigationItems = get(
      this,
      'props.data.contentfulContactPage.navigation.items'
    )

    const projects = get(this, 'props.data.allContentfulProject.nodes')

    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        // TODO: This is for the search bar, we need to update this to search the contact directly
        projects={{}}
        navigationStatic
      >
        <Projects projects={projects} />
      </Layout>
    )
  }
}

export default ProjectsPage

// TODO: For some reason, new content types are not showing up
export const pageQuery = graphql`
  query ProjectPage {
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
    allContentfulProject {
      nodes {
        id
        name
        client
        images {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1000, height: 700)
        }
        sector
        contractPeriod
        meValue
        architect
        quantitySurveyor
        description {
          raw
        }
        shortDescription
        sortScore
      }
    }
  }
`
