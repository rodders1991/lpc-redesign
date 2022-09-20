import { Container } from '@mui/material'
import React from 'react'
import * as styles from './client-section.module.css'
import quote1Img from "./quote1.png";
import quote2Img from "./quote2.png";
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'

const ClientSection = ({ clientSection }) => (
  <div>
    <Container className={styles.root} maxWidth="xl">
      <Fade>
        <h3 className={styles.title}>{clientSection.title}</h3>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>{clientSection.heading}</h2>
          <div className={styles.quoteContainer}>
            <img src={quote1Img} alt="quote 1" className={styles.leftQuoteIcon} />
            <h4 className={styles.quote}>{clientSection.quote}</h4>
            <img src={quote2Img} alt="quote 2" className={styles.rightQuoteIcon} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          {clientSection.logos.map((logo, index) => (
            <GatsbyImage className={styles.image} key={`client-logo-${index}`} alt="" image={logo.gatsbyImage} />
          ))}
        </div>
      </Fade>
    </Container>
  </div>
)

export default ClientSection
