import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'
import * as styles from './navigation.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from '@mui/material'

const Navigation = ({
  navigation: navigationItems,
  logo,
  projects,
  staticStyle,
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedProjects, setSearchedProjects] = useState()
  const searchReference = useRef()

  const scrollToContact = () => {
    const element = document.getElementById('contact-section')

    element.scrollIntoView()
  }

  const scrollToProject = (projectId) => {
    const element = document.getElementById(projectId)

    element.scrollIntoView()

    setSearchedProjects()
    setSearchTerm('')
  }

  const handleTextChange = (e) => setSearchTerm(e.target.value)

  useEffect(() => {
    if (searchTerm) {
      setSearchedProjects(searchProjects(searchTerm, projects))
    }
  }, [searchTerm, projects])

  return (
    <>
      <div
        className={
          staticStyle ? `${styles.root} ${styles.rootStatic}` : styles.root
        }
      >
        <Container maxWidth="xl">
          <div className={styles.mainContainer}>
            <Link to="/" className={styles.logoLink}>
              <GatsbyImage alt="" image={logo.gatsbyImage} />
            </Link>
              <div className={styles.bottomContainer}>
              <div className={styles.topContainerRight}>
                  <button
                    className={styles.callBackButton}
                    onClick={scrollToContact}
                  >
                    Request a call back
                  </button>
                  <div className={styles.searchContainer}>
                    <input
                      placeholder="search"
                      ref={searchReference}
                      type="text"
                      onChange={handleTextChange}
                    />
                  </div>
                </div>
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
          </div>
        </Container>
        {searchedProjects && searchedProjects.length > 0 && (
          <div
            className={styles.searchDropdown}
            style={{ left: searchReference.current.offsetLeft }}
          >
            <h3>Projects</h3>
            {searchedProjects.map((project) => (
              <h4
                onClick={() => scrollToProject(project.id)}
                onKeyDown={() => scrollToProject(project.id)}
                key={project.name}
              >
                {project.name}
              </h4>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Navigation

/**
 * Little hack for the time being to search for projects in memory that have already been loaded into memory
 */
const searchProjects = (searchTerm, projects) =>
  projects.filter((project) =>
    project?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  )
