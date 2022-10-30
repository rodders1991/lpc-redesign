import { Container } from '@mui/material'
import React from 'react'
import * as styles from './client-section.module.css'
import quote1Img from './quote1.png'
import quote2Img from './quote2.png'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { Carousel } from 'react-responsive-carousel'

const ClientSection = ({ clientSection }) => (
  <div>
    <Container className={styles.root} maxWidth="xl">
      <Fade>
        <h3 className={styles.title}>{clientSection.title}</h3>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>{clientSection.heading}</h2>
          <div className={styles.quoteContainer}>
            <img
              src={quote1Img}
              alt="quote 1"
              className={styles.leftQuoteIcon}
            />
            <div className={styles.testimonialsContainer}>
              <TestimonyBlock testimonials={clientSection.testimonials} />
            </div>
            <img
              src={quote2Img}
              alt="quote 2"
              className={styles.rightQuoteIcon}
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          {clientSection.logos.map((logo, index) => (
            <GatsbyImage
              className={styles.image}
              key={`client-logo-${index}`}
              alt=""
              image={logo.gatsbyImage}
            />
          ))}
        </div>
      </Fade>
    </Container>
  </div>
)

export default ClientSection

const TestimonyBlock = ({ testimonials }) => (
  <Carousel
    autoPlay
    showArrows={false}
    infiniteLoop
    interval={6000}
    showStatus={false}
    transitionTime={1000}
    useKeyboardArrows
    showThumbs={false}
    showIndicators={false}
  >
    {testimonials.map(({ content: { content: quote }, company }, index) => (
      <div>
        <h4 key={`quote-${index}`} className={styles.quote}>
          {quote}
        </h4>
        <p className={styles.quoteCompany}>- {company}</p>
      </div>
    ))}
  </Carousel>
)
