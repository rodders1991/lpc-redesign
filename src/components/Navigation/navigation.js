import React from 'react'
import { Link } from 'gatsby'
import { MdSearch } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import * as styles from './navigation.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from '@mui/material'
import { FEATURE_LANDING } from '../constants'

const Navigation = ({ navigation: navigationItems, logo }) => {

  const scrollToContact = () => {
    const element = document.getElementById("contact-section");

    element.scrollIntoView();
  };

  return (
    <>
      <div className={styles.root}>
        <Container maxWidth="xl">
          <div className={styles.topContainer}>
            <button className={styles.callBackButton} onClick={scrollToContact}>
              Request a call back
            </button>
            <div className={styles.searchContainer}>
              <input type="text" />
              <MdSearch className={styles.search} size={35} color="white" />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <Link to="/" className={`${styles.logoLink} ${FEATURE_LANDING ? styles.logoLinkBack : 
          ""}`}>
              <GatsbyImage alt="" image={logo.gatsbyImage} />
            </Link>
            {!FEATURE_LANDING && (
              <ul className={styles.navigation}>
                {navigationItems.map((item) => (
                  <li key={item.name} className={styles.navigationItem}>
                    <Link to={item.link} activeClassName="active">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {!FEATURE_LANDING && (
              <GiHamburgerMenu
                className={styles.hamburgerMenu}
                size={40}
                color="white"
              />
            )}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Navigation
