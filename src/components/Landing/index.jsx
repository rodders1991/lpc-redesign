import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Gallery from './Gallery'
import AboutSection from './AboutSection'

const Landing = ({ galleryItems, aboutSection }) => {
  return (
    <>
      <Gallery galleryItems={galleryItems} />
      <AboutSection aboutSection={aboutSection} />
    </>
  )
}

export default Landing
