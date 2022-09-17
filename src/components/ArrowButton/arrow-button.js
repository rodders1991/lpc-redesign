import React from 'react'
import EastIcon from '@mui/icons-material/East'
import * as styles from './arrow-button.module.css'
import { Link } from 'gatsby'

const ArrowButton = ({ label, link }) => {
  return (
    <Link to={link} className={styles.root}>
      <div className={styles.iconContainer}>
        <EastIcon className={styles.icon} />
      </div>
      {label && <h6 className={styles.label}>{label}</h6>}
    </Link>
  )
}

export default ArrowButton
