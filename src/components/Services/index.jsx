import React from 'react'
import * as styles from './service.module.css'

import ContactSection from '../ContactSection'
import { Container } from '@mui/material'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'

const Service = ({ service: { name, icon, subTitle }, index }) => (
  <div className={styles.service} style={{ animationDelay: `${index * 0.5}s` }}>
    <GatsbyImage
      alt=""
      image={icon.gatsbyImage}
      objectFit="contain"
      className={styles.serviceImg}
    />
    <div className={styles.serviceTopTextContainer}>
      <h3 className={styles.serviceTitle}>{name}</h3>
    </div>
    <p className={styles.serviceAbout}>{subTitle}</p>
  </div>
)

const Services = ({ services }) => {
  return (
    <>
      <Fade>
        <Container maxWidth="xl">
          <h1 className={styles.title}>Services</h1>
        </Container>
        <div className={styles.servicesRoot}>
          <Container maxWidth="lg">
            <div className={styles.servicesRootContainer}>
              {services.map((service, index) => (
                <Service
                  key={`${service.id}-${index}`}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </Container>
        </div>
      </Fade>
      <ContactSection />
    </>
  )
}

export default Services
