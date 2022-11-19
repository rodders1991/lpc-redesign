import React from 'react'
import logo from "./logo.png"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import * as styles from './footer.module.css'
import { Container } from '@mui/material';

const Footer = () => (
  <div className={styles.root}>
    <Container maxWidth="xl">
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="leonard peters consulting" />
        <div className={styles.desktopDiv}>
          <small>Salisbury House,</small>
          <small>London Wall,</small>
          <small>EC2M 5SQ</small>
        </div>
        <div className={styles.desktopDiv}>
          <small>info@l-p-c.com</small>
          <small>+44 000 000 0000</small>
        </div>
        <div className={styles.desktopDiv}>
          <small>Privacy</small>
        </div>
        <div>
          <IoLogoLinkedin size={30} color="white" />
          <IoLogoInstagram size={30} color="white" />
        </div>
        <div className={styles.tabletDiv}>
          <small>© Leonard Peters Consulting 2020</small>
        </div>
      </div>
    </Container>
  </div>
)

export default Footer
