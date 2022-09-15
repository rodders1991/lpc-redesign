import React from 'react'
import { Link } from 'gatsby'
import { MdSearch } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import * as styles from './navigation.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const Navigation = ({ navigation: navigationItems, logo }) => {
    return (
      <div className={styles.root}>
        <nav role="navigation" className={styles.container} aria-label="Main">
          <div className={styles.topContainer}>
            <button className={styles.callBackButton}>
              Request a call back
            </button>
            <MdSearch size={25} color="white" />
          </div>
          <div className={styles.bottomContainer}>
            <Link to="/" className={styles.logoLink}>
              <GatsbyImage alt="" image={logo.gatsbyImage} />
            </Link>
            <ul className={styles.navigation}>
              {navigationItems.map((item) => (
                <li key={item.name} className={styles.navigationItem}>
                  <Link to={item.link} activeClassName="active">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <GiHamburgerMenu
              className={styles.hamburgerMenu}
              size={40}
              color="white"
            />
          </div>
        </nav>
      </div>
    )
}

export default Navigation

