import React from 'react'
import * as styles from './about.module.css'

import ContactSection from '../ContactSection'
import { Fade, Slide } from 'react-awesome-reveal'
import { Container } from '@mui/material'
import { GatsbyImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Section = ({ section, right }) => (
  <Fade id={section.id}>
    <div
      className={
        right ? `${styles.section} ${styles.sectionRight}` : styles.section
      }
    >
      <div className={styles.imageContainer}>
        <GatsbyImage
          alt=""
          image={section.image.gatsbyImage}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{section.header}</h2>
        <div>{documentToReactComponents(JSON.parse(section.content.raw))}</div>
      </div>
    </div>
  </Fade>
)

const About = ({ subtitle, sections }) => {
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <h1 className={styles.title}>About us</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </Container>
        {/* <div className={styles.content}> */}
        {sections.map((section, index) =>
          index % 2 ? (
            <Slide key={section.id}>
              <Section key={section.id} section={section} right={index % 2} />
            </Slide>
          ) : (
            <Slide direction="right" key={section.id}>
              <Section key={section.id} section={section} right={index % 2} />
            </Slide>
          )
        )}
        {/* </div> */}
      </div>
      <ContactSection />
    </>
  )
}

export default About
