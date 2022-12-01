import React, { useState } from 'react'
import { getImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import * as styles from './service-card.module.css'
import ReactCardFlip from '../FlipCard'

const ServiceCard = ({ service, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const serviceImage = getImage(service.icon)
  const serviceBackgroundImage = convertToBgImage(serviceImage)
  return (
    <div
      role="presentation"
      className={styles.root}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchEnd={() => (prevState) => setIsFlipped(!prevState)}
    >
      <ReactCardFlip isFlipped={isFlipped}>
        <div key={service.name} className={styles.service}>
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...serviceBackgroundImage}
            className={styles.serviceImage}
            key={`service-image-${index}`}
            style={{
              backgroundSize: 'contain',
            }}
            preserveStackingContext
          ></BackgroundImage>
          <h2 className={styles.serviceName}>{service.name}</h2>
        </div>
        <div className={styles.service}>
          <span className={styles.serviceRight}>
          {documentToReactComponents(JSON.parse(service.flipText.raw))}
          </span>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default ServiceCard
