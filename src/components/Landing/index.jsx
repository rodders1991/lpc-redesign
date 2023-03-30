import React from 'react'
import './custom-carousel.css'
import Gallery from './Gallery'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import ProjectSection from './ProjectSection'
import ClientSection from './ClientSection'
import ContactSection from '../ContactSection'
import InstaSection from './InstaSection'

const Landing = ({
  galleryItems,
  aboutSection,
  serviceSection,
  projectSection,
  clientSection
}) => {
  return (
    <>
      <Gallery galleryItems={galleryItems} />
      <AboutSection aboutSection={aboutSection} />
      <ServiceSection serviceSection={serviceSection} />
      <ProjectSection projectSection={projectSection} />
      <ClientSection clientSection={clientSection} />
      <InstaSection />
      <ContactSection />
    </>
  )
}

export default Landing
