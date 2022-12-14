import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './gallery.module.css'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Container } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import ArrowButton from '../../ArrowButton/arrow-button'

const Gallery = ({ galleryItems }) => (
  <div>
    <Carousel
      autoPlay
      showArrows={false}
      infiniteLoop
      interval={5000}
      showStatus={false}
      transitionTime={1000}
      useKeyboardArrows
      showThumbs={false}
    >
      {galleryItems.map((item, index) => {
        const link =
          item.link || item.relatedProject?.id
            ? `#${item.relatedProject?.id}`
            : null

        return (
          <div key={`${item.id}-${index}`}>
            <GatsbyImage className={styles.carouselImage} alt="" image={item.media.gatsbyImage} />
            <div
              className={`${styles.galleryOverlay} ${
                item.noOverlay ? styles.noOverlay : ''
              }`}
            >
              <Container maxWidth="xl" className={styles.galleryLegend}>
                <Fade>
                  <h1
                    style={{
                      ...(item.headerColour
                        ? { color: item.headerColour }
                        : {}),
                    }}
                  >
                    {item.heading}
                  </h1>
                  <h3>
                    {documentToPlainTextString(JSON.parse(item.subHeading.raw))}
                  </h3>
                  {link && <ArrowButton link={link} label="Read more" />}
                </Fade>
              </Container>
            </div>
          </div>
        )
      })}
    </Carousel>
  </div>
)

export default Gallery
