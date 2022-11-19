import { Container } from '@mui/system'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import * as styles from './service-section.module.css'
import ServiceCard from '../../ServiceCard'

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
          {serviceSection.services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </Slide>
      </div>
    </Container>
  </div>
)

export default ServiceSection
