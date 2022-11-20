import React from 'react'
import EastIcon from '@mui/icons-material/East'
import * as styles from './arrow-button.module.css'
import { Link } from 'gatsby'

const ArrowButton = ({ label, link, small, textColor, key, submitButton }) => {
  const content = () => (
    <>
      <div
        className={
          small
            ? `${styles.iconContainer} ${styles.iconContainerSmall}`
            : styles.iconContainer
        }
      >
        <EastIcon
          sx={{ width: small ? 15 : 30 }}
          style={{ color: 'white ' }}
          className={small ? styles.iconSmall : styles.icon}
        />
      </div>
      {label && (
        <h6
          className={
            small ? `${styles.label} ${styles.labelSmall}` : styles.label
          }
          style={textColor ? { color: textColor } : {}}
        >
          {label}
        </h6>
      )}
    </>
  )
  return (
    <>
      {submitButton ? (
        <button className={styles.button} type='submit'>{content()}</button>
      ) : (
        <Link to={link} className={styles.root}>
          {content()}
        </Link>
      )}
    </>
  )
}

export default ArrowButton
