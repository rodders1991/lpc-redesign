import { Container } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ArrowButton from '../../ArrowButton/arrow-button'
import * as styles from './contact-section.module.css'

const ContactSection = () => (
  <div id="contact-section" className={styles.root}>
    <Container maxWidth="xl">
      <Fade>
        <h1 className={styles.header}>
          Talk to a member of our team of experts...
        </h1>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <h5>First Name:</h5>
            <input type="text" />
            <h5>Last Name:</h5>
            <input type="text" />
            <h5>Work Email:</h5>
            <input type="text" />
            <h5>Company Name:</h5>
            <input type="text" />
            <h5>Phone:</h5>
            <input type="text" />
          </div>
          <div className={styles.formGroup}>
            <h5>Message:</h5>
            <textarea />
            <div className={styles.arrowButton}>
              <ArrowButton label="Submit" link="/" />
            </div>
          </div>
        </div>
      </Fade>
    </Container>
  </div>
)

export default ContactSection
