import { Container } from '@mui/material'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Carousel } from 'react-responsive-carousel'
import ArrowButton from '../../ArrowButton/arrow-button'
import * as styles from './project-section.module.css'

const Project = ({ project, right }) => (
  <div
    className={
      right ? `${styles.project} ${styles.projectRight}` : styles.project
    }
  >
    <Carousel
      showArrows={false}
      infiniteLoop
      interval={5000}
      showStatus={false}
      transitionTime={1000}
      useKeyboardArrows
      showThumbs={false}
      className={styles.gallery}
    >
      {project.images.map((image, index) => (
        <GatsbyImage
          key={`${project.name}-image${index}`}
          alt=""
          image={image.gatsbyImage}
          // objectFit="cover"
        />
      ))}
    </Carousel>
    <div className={styles.textContainer}>
      <div className={styles.buttonContainer}>
        <ArrowButton
          link="/projects"
          label={project.name}
          textColor="#928D88"
          small
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className={styles.textContentContainer}>
        <h2>{project.name}</h2>
        <h4>{project.client}</h4>
        <p>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </strong>
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  </div>
)

const ProjectSection = ({ projectSection }) => (
  <div className={styles.root}>
    <Container maxWidth="xl">
      <Fade>
        <h3 className={styles.title}>{projectSection.title}</h3>
        <h1 className={styles.heading}>{projectSection.heading}</h1>
      </Fade>
    </Container>
    <div>
      {projectSection.projects.map((project, index) =>
        index % 2 ? (
          <Slide>
            <Project key={project.name} project={project} right={index % 2} />
          </Slide>
        ) : (
          <Slide direction='right'>
            <Project key={project.name} project={project} right={index % 2} />
          </Slide>
        )
      )}
    </div>
  </div>
)

export default ProjectSection
