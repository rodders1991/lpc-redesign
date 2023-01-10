import { Container } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import ArrowButton from '../../ArrowButton/arrow-button'
import * as styles from './contact-section.module.css'

const ContactSection = () => (
  <GoogleReCaptchaProvider reCaptchaKey="6LfKP-cjAAAAAHUVupnRN0-e_tMSMjKrwUcqOJ0m">
    <div id="contact-section" className={styles.root}>
      <Container maxWidth="xl">
        <Fade>
          <h1 className={styles.header}>
            Talk to a member of our team of experts...
          </h1>
          <form
            action="https://getform.io/f/40bef7bf-150e-4237-87c8-4bb6fe081e3e"
            method="POST"
          >
            <input
              type="hidden"
              id="captchaResponse"
              name="g-recaptcha-response"
            />
            {/* <!-- add hidden Honeypot input to prevent spams --> */}
            <input
              type="hidden"
              name="_gotcha"
              style={{ display: 'none !important' }}
            />
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <h5>First Name:</h5>
                <input type="text" name="firstName" />
                <h5>Last Name:</h5>
                <input type="text" name="lastName" />
                <h5>Work Email:</h5>
                <input type="text" name="email" />
                <h5>Company Name:</h5>
                <input type="text" name="companyName" />
                <h5>Phone:</h5>
                <input type="text" name="phone" />
              </div>
              <GoogleReCaptcha
                onVerify={(token) => {
                  document.getElementById('captchaResponse').value = token;
                }}
              />
              <div className={styles.formGroup}>
                <h5>Message:</h5>
                <textarea name="message" />
                <ArrowButton label="Submit" submitButton />
              </div>
            </div>
          </form>
        </Fade>
      </Container>
    </div>
  </GoogleReCaptchaProvider>
)

export default ContactSection
