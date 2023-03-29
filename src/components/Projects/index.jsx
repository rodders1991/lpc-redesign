import { Container } from '@mui/material'
import React from 'react'
import * as styles from './projects.module.css'
import ProjectsList from '../ProjectsList'

const Projects = ({ projects }) => {
  return (
    <>
      <div className={styles.banner}>
        <Container maxWidth="xl">
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>Shaping our business to you.</p>
        </Container>
      </div>
      <ProjectsList
        hideLink
        alignAllLeft
        projects={projects.sort(
          ({ sortScore: sortScoreA }, { sortScore: sortScoreB }) =>
            (sortScoreB || 0) - (sortScoreA - 0)
        )}
      />
    </>
  )
}

export default Projects
