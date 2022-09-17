import { Container } from '@mui/system'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import * as styles from './service-section.module.css'

const ServiceSection = ({ serviceSection }) => (
  <div className={styles.root}>
    <Container maxWidth="xl">
      <Fade>
        <h3 className={styles.title}>{serviceSection.title}</h3>
        <h2 className={styles.heading}>{serviceSection.heading}</h2>
      </Fade>
    </Container>
    <Container maxWidth="lg">
      <div className={styles.serviceContainer}>
        <Slide>
          {serviceSection.services.map((service) => (
            <div key={service.name} className={styles.service}>
              <GatsbyImage alt="" image={service.icon.gatsbyImage} />
              <h2 className={styles.serviceName}>{service.name}</h2>
            </div>
          ))}
        </Slide>
      </div>
    </Container>
  </div>
)

export default ServiceSection
