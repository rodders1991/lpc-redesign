import { Container } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import GoogleMapReact from 'google-map-react'
import { Phone } from '@mui/icons-material'
import * as styles from './where-section.module.css'
import mapStyles from './map-styles'
import PinPoint from './pinpoint'

const WhereSection = () => {
  const defaultProps = {
    center: {
      lng: -0.08767760048234095,
      lat: 51.51761501280764,
    },
    zoom: 15,
  }

  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <Fade>
          <div>
            <h3 className={styles.title}>Where to find us</h3>
            <div className={styles.container}>
              <div className={styles.map}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyDpCWrenjSCUlyFsflso32HK_19bP7j16E',
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  options={{ styles: mapStyles }}
                >
                  <PinPoint
                    text="test"
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                  />
                </GoogleMapReact>
              </div>
              <div>
                <div className={styles.textContainer}>
                  <h3>
                    Salisbury House <br />
                    161-162 London Wall <br />
                    London <br />
                    EC2M 5QQ <br />
                  </h3>
                  <h3 className={styles.phoneContainer}>
                    {' '}
                    <Phone /> <a href="tel:+447500689297">07500 689 297</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </div>
  )
}

export default WhereSection
