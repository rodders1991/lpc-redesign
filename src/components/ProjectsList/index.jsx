import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Carousel } from 'react-responsive-carousel'
import ArrowButton from '../ArrowButton/arrow-button'
import * as styles from './projects-list.module.css'

const Project = ({ project, right, hideLink }) => (
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
      showIndicators={project.images.length > 1}
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
        {!hideLink && (
          <ArrowButton
            link="/"
            label={project.name}
            textColor="#928D88"
            small
          />
        )}
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

const ProjectsList = ({ projects, hideLink, alignAllLeft }) => (
  <div>
    {projects.map((project, index) => {
      if (alignAllLeft) {
        return (
          <Slide key={project.id}>
            <Project
              key={project.id}
              project={project}
              hideLink={hideLink}
            />
          </Slide>
        )
      }
      return index % 2 ? (
        <Slide key={project.id}>
          <Project
            key={project.id}
            project={project}
            right={index % 2}
            hideLink={hideLink}
          />
        </Slide>
      ) : (
        <Slide direction="right" key={project.id}>
          <Project
            key={project.id}
            project={project}
            right={index % 2}
            hideLink={hideLink}
          />
        </Slide>
      )
    })}
  </div>
)

export default ProjectsList
