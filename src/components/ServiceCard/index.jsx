import React, { useState } from 'react'
import { getImage } from 'gatsby-plugin-image'
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
      onClick={() => setIsFlipped((prevState) => !prevState)}
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
        <div className={`${styles.service} ${styles.serviceText}`}>
            {service.subTitle}
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default ServiceCard
