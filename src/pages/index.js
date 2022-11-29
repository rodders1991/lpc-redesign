import { graphql } from 'gatsby'
import { get } from 'lodash'
import React from 'react'
import Layout from '../components/layout'
import Landing from '../components/Landing'

class RootIndex extends React.Component {
  render() {
    const navigationItems = get(
      this,
      'props.data.contentfulLandingPage.navigation.items'
    )
    const galleryItems = get(this, 'props.data.contentfulLandingPage.gallery')
    const logo = get(this, 'props.data.contentfulLandingPage.logo')
    const aboutSection = get(
      this,
      'props.data.contentfulLandingPage.aboutSection'
    )

    const serviceSection = get(
      this,
      'props.data.contentfulLandingPage.serviceSection'
    )

    const projectSection = get(
      this,
      'props.data.contentfulLandingPage.projectSection'
    )

    const clientSection = get(
      this,
      'props.data.contentfulLandingPage.clientSection'
    )
    return (
      <Layout
        logo={logo}
        navigation={navigationItems}
        location={this.props.location}
        projects={projectSection?.projects}
      >
        <Landing
          galleryItems={galleryItems}
          aboutSection={aboutSection}
          serviceSection={serviceSection}
          projectSection={projectSection}
          clientSection={clientSection}
        />
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
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 250)
      }
      gallery {
        id
        media {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        heading
        subHeading {
          raw
        }
        relatedProject {
          id
        }
      }
      aboutSection {
        title
        heading
        subHeading {
          raw
        }
        media {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 200
            height: 212
          )
        }
      }
      serviceSection {
        title
        heading
        services {
          name
          subTitle
          icon {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 1000
            )
          }
        }
      }
      projectSection {
        title
        heading
        projects {
          id
          name
          client
          images {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1000)
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
        }
      }
      clientSection {
        title
        heading
        quote
        logos {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1000)
        }
        testimonials {
          content {
            content
          }
          company
        }
      }
    }
  }
`
