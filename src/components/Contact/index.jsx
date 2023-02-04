import React from 'react'
import * as styles from './contact.module.css'

import ContactSection from '../ContactSection'
import { Container } from '@mui/material'
import { InlineWidget } from 'react-calendly'
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
                  <h3 className={styles.subTitle}>
                    If you have any further questions, we suggest booking a
                    meeting with 1 of our team of experts who would be happy to
                    help but alternatively you can call or email us. We look
                    forward to hearing from you!
                  </h3>
                </div>
                <div className={styles.calendarContainer}>
                  <InlineWidget url="https://calendly.com/georgeormrod" />
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
