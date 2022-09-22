import React, { useState } from 'react'
import { Link } from 'gatsby'
import { MdSearch } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import * as styles from './navigation.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Modal } from '@mui/material'

const Navigation = ({ navigation: navigationItems, logo }) => {
  const [open, setOpen] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.root}>
        <Container maxWidth="xl">
          <div className={styles.topContainer}>
            <button className={styles.callBackButton}>
              Request a call back
            </button>
            <MdSearch className={styles.search} onClick={handleOpen} size={25} color="white" />
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
        </Container>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.boxModal}>
          <h5>Search</h5>
          <input type="text" />
        </div>
      </Modal>
    </>
  )
}

export default Navigation
