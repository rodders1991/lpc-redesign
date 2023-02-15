import React from 'react'
import * as styles from './team.module.css'

import ContactSection from '../ContactSection'
import { Container } from '@mui/material'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import { IoLogoInstagram } from 'react-icons/io'

const Employee = ({ employee: { name, image, role, about, linkedIn } }) => (
  <div className={styles.employee}>
    <GatsbyImage
      alt=""
      image={image.gatsbyImage}
      objectFit="contain"
      className={styles.employeeImg}
    />
    <div className={styles.employeeTopTextContainer}>
      <div>
        <h3 className={styles.employeeTitle}>{name}</h3>
        <p className={styles.employeeRole}>{role}</p>
      </div>
      <IoLogoInstagram
        className={styles.employeeSocialIcon}
        size={40}
        onClick={() => window.open(linkedIn, '_blank')}
      />
    </div>
    <p className={styles.employeeAbout}>{about.about}</p>
  </div>
)

const Team = ({ employees }) => {
  return (
    <>
      <Fade>
        <Container maxWidth="xl">
          <h1 className={styles.title}>Meet the team</h1>
        </Container>
        <div className={styles.teamRoot}>
          <Container maxWidth="lg">
            <div className={styles.teamRootContainer}>
              {employees.map((employee) => (
                <Employee key={employee.id} employee={employee} />
              ))}
            </div>
          </Container>
        </div>
      </Fade>
      <ContactSection />
    </>
  )
}

export default Team
