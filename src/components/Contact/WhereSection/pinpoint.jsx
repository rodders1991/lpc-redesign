import React from 'react'
import * as styles from './pinpoint.module.css'

const PinPoint = ({ markerUrl }) => {
  return (
    <div
      className={styles.pointContainer}
      // style={{ backgroundImage: `url("${markerUrl}")` }}
    >
      <div
        className={styles.pinpoint}
        style={{ backgroundImage: `url("${markerUrl}")` }}
      ></div>
    </div>
  )
}

export default PinPoint
