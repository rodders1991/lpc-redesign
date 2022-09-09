import { graphql } from 'gatsby';
import { get } from 'lodash'
import React from 'react'

import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const navigationItems = get(this, 'props.data.contentfulLandingPage.navigation.items')

    console.log(get(this, 'props.data'));
    return (
      <Layout navigation={navigationItems} location={this.props.location}>
        <div>TODO</div>
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
    }
  }
`
