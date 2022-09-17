import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Gallery from './Gallery'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'

const Landing = ({ galleryItems, aboutSection, serviceSection }) => {
  return (
    <>
      <Gallery galleryItems={galleryItems} />
      <AboutSection aboutSection={aboutSection} />
      <ServiceSection serviceSection={serviceSection} />
    </>
  )
}

export default Landing
