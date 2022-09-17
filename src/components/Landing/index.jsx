import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Gallery from './Gallery'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import ProjectSection from './ProjectSection'

const Landing = ({
  galleryItems,
  aboutSection,
  serviceSection,
  projectSection,
}) => {
  return (
    <>
      <Gallery galleryItems={galleryItems} />
      <AboutSection aboutSection={aboutSection} />
      <ServiceSection serviceSection={serviceSection} />
      <ProjectSection projectSection={projectSection} />
    </>
  )
}

export default Landing
