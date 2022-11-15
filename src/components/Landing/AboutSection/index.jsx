import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { Slide } from "react-awesome-reveal";
import * as styles from './about-section.module.css'
import { Container } from '@mui/material'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import ArrowButton from '../../ArrowButton/arrow-button'

const AboutSection = ({ aboutSection }) => {
  const aboutSectionImage = getImage(aboutSection.media)
  const aboutSectionBackgroundImage = convertToBgImage(aboutSectionImage)

  return (
    <div className={styles.root}>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...aboutSectionBackgroundImage}
        preserveStackingContext
      >
        <Container maxWidth="xl" className={styles.container}>
            <Slide>
                <h4 className={styles.title}>{aboutSection.title}</h4>
                <h3 className={styles.heading}>{aboutSection.heading}</h3>
                <h3 className={styles.subHeading}>
                    {documentToPlainTextString(JSON.parse(aboutSection.subHeading.raw))}
                </h3>
                <ArrowButton label="Read more" link="/about" />
            </Slide>
        </Container>
      </BackgroundImage>
    </div>
  )
}

export default AboutSection
