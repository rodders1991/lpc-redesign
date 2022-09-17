import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Gallery from './Gallery'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import ProjectSection from './ProjectSection'
import ClientSection from './ClientSection'
import ContactSection from './ContactSection'

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
      <ContactSection />
    </>
  )
}

export default Landing
