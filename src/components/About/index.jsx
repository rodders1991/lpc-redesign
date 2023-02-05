import React from 'react'
import * as styles from './about.module.css'

import ContactSection from '../ContactSection'
import { Container } from '@mui/material'
import { GatsbyImage } from 'gatsby-plugin-image'

const About = ({ banner, subtitle }) => {
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <h1 className={styles.title}>About us</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </Container>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <GatsbyImage
              alt=""
              image={banner.gatsbyImage}
              className={styles.image}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            sem non ipsum lacinia tincidunt. Aenean dictum eros ac orci
            tristique, nec imperdiet elit sagittis.
            <br />
            <br />
            In hac habitasse platea dictumst. Vestibulum vitae sagittis ante.
            Sed quis fermentum nibh. Suspendisse eu volutpat ex, vel maximus
            tortor. Etiam et lorem libero. Aliquam erat volutpat.
            <br />
            <br />
            Aliquam viverra nisl ut velit malesuada interdum. Ut porta eros
            porta massa venenatis, ac ultrices sem euismod. Donec sapien nisl,
            interdum vitae lacus vel, volutpat porttitor purus. Suspendisse eget
            condimentum odio, non tincidunt nisl. Fusce varius orci elit, eu
            rhoncus nisi mattis vitae.
            <br />
            <br />
            Aliquam suscipit, arcu et mollis lacinia, magna nisi bibendum quam,
            venenatis posuere nulla risus a magna. Aliquam placerat sed magna
            sit amet semper. Praesent id nibh tortor.
          </p>
        </div>
      </div>
      <ContactSection />
    </>
  )
}

export default About
