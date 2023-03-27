import { Container } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ProjectsList from '../../ProjectsList'
import * as styles from './project-section.module.css'

const ProjectSection = ({ projectSection }) => (
  <div className={styles.root}>
    <Container maxWidth="xl">
      <Fade>
        <h3 className={styles.title}>{projectSection.title}</h3>
        <h1 className={styles.heading}>{projectSection.heading}</h1>
      </Fade>
    </Container>
    <ProjectsList projects={projectSection.projects} />
  </div>
)

export default ProjectSection
