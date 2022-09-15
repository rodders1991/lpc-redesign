import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './landing-container.module.css'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import ArrowButton from '../ArrowButton/arrow-button'

const LandingContainer = ({ galleryItems }) => (
  <>
    <Carousel
      autoPlay
      showArrows={false}
      infiniteLoop
      interval={5000}
      showStatus={false}
      transitionTime={1000}
      useKeyboardArrows
    >
      {galleryItems.map((item, index) => (
        <div key={`${item.link}-${index}`}>
          <GatsbyImage alt="" image={item.media.gatsbyImage} />
          <div className={styles.galleryOverlay}>
            <div className={styles.galleryLegend}>
              <h1>{item.heading}</h1>
              <h3>
                {documentToPlainTextString(JSON.parse(item.subHeading.raw))}
              </h3>
              <div className={styles.buttonContainer}>
                <ArrowButton link={item.link} label="Read more" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </>
)

export default LandingContainer
