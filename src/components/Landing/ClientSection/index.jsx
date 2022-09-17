import { Container } from '@mui/material'
import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import * as styles from './client-section.module.css'
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
            <FormatQuoteIcon className={styles.leftQuoteIcon} />
            <h4 className={styles.quote}>{clientSection.quote}</h4>
            <FormatQuoteIcon className={styles.rightQuoteIcon} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <GatsbyImage alt="" image={clientSection.logos.gatsbyImage} />
        </div>
      </Fade>
    </Container>
  </div>
)

export default ClientSection
