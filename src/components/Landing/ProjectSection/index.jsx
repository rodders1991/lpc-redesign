import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Container } from '@mui/material'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Carousel } from 'react-responsive-carousel'
import ArrowButton from '../../ArrowButton/arrow-button'
import * as styles from './project-section.module.css'

const Project = ({ project, right }) => (
  <div
    id={project.id}
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
        <p>{project.shortDescription}</p>
      </div>
      <div className={styles.textContentContainer}>
        <h2>{project.name}</h2>
        <table className={styles.projectTable}>
          <tbody>
            <tr>
              <td>Sector</td>
              <td>{project.sector}</td>
            </tr>
            {project.contractPeriod && (
              <tr>
                <td>Contract Period</td>
                <td>{project.contractPeriod}</td>
              </tr>
            )}
            {project.meValue && (
              <tr>
                <td>M&E Value</td>
                <td>{project.meValue}</td>
              </tr>
            )}
            {project.architect && (
              <tr>
                <td>Architect</td>
                <td>{project.architect}</td>
              </tr>
            )}
            {project.quantitySurveyor && (
              <tr>
                <td>Quantity Surveyor</td>
                <td>{project.quantitySurveyor}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          {documentToReactComponents(JSON.parse(project.description.raw))}
        </div>
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
            <Project key={project.id} project={project} right={index % 2} />
          </Slide>
        ) : (
          <Slide direction="right">
            <Project key={project.id} project={project} right={index % 2} />
          </Slide>
        )
      )}
    </div>
  </div>
)

export default ProjectSection
