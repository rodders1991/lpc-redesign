import React from 'react'
import { Link } from 'gatsby'
import logo from './logo.png'
import { MdSearch } from 'react-icons/md'
import { GiHamburgerMenu } from "react-icons/gi";
import * as styles from './navigation.module.css'

const menuItems = [
  {
    name: 'About Us',
    link: '/about',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'News',
    link: '/news',
  },
  {
    name: 'Sustainability',
    link: '/sustainability',
  },
  {
    name: 'Meet the team',
    link: '/team',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
]

const Navigation = () => (
  <div className={styles.root}>
    <nav role="navigation" className={styles.container} aria-label="Main">
      <div className={styles.topContainer}>
        <button className={styles.callBackButton}>Request a call back</button>
        <MdSearch className={styles.searchIcon} size={25} color="white" />
      </div>
      <div className={styles.bottomContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="leonard peters consulting" />
        </Link>
        <ul className={styles.navigation}>
          {menuItems.map((item) => (
            <li key={item.name} className={styles.navigationItem}>
              <Link to={item.link} activeClassName="active">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <GiHamburgerMenu className={styles.hamburgerMenu} size={40} color="white" />
      </div>
    </nav>
  </div>
)

export default Navigation
