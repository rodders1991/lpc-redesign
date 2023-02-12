import React from 'react'
import * as styles from './contact.module.css'

import ContactSection from '../ContactSection'
import { Container } from '@mui/material'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from 'gatsby-plugin-image'
import WhereSection from './WhereSection'

const Contact = ({ banner }) => {
  const bannerImage = getImage(banner)
  const bannerBackgroundImage = convertToBgImage(bannerImage)
  return (
    <>
      <div className={styles.root}>
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bannerBackgroundImage}
          preserveStackingContext
        >
          <div className={styles.container}>
            <Container maxWidth="xl">
              <div className={styles.containerInside}>
                <div>
                  <h1 className={styles.title}>Contact Us</h1>
                </div>
              </div>
            </Container>
          </div>
        </BackgroundImage>
      </div>
      <WhereSection />
      <ContactSection />
    </>
  )
}

export default Contact
