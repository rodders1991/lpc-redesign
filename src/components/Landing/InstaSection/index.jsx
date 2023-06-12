import React, { useEffect, useState } from 'react'
import * as styles from './insta-section.module.css'

const InstaSection = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://h8krv9hy3m.execute-api.us-east-1.amazonaws.com/')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.data)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error || !isLoaded) return null

  let columnNumber = 0
  let columnedItems = [[], [], [], []]

  if (!items || items.length) {
    return null;
  }

  items.forEach((item) => {
    if (columnNumber === 4) {
      columnNumber = 0
    }

    columnedItems[columnNumber].push(item)

    columnNumber++
  })

  return (
    <div className={styles.gallery}>
      {columnedItems.map((column, indexColumn) => (
        <div key={`column-${indexColumn}`} className={styles.gallery__column}>
          {column.map((item) => (
            <a
              href="https://www.instagram.com/leonardpetersconsulting/"
              target="_blank"
              rel="noreferrer"
              className={styles.gallery__link}
              key={item.id}
            >
              <figure className={styles.gallery__thumb}>
                <img
                  src={item.media_url}
                  alt={item.caption}
                  className={styles.gallery__image}
                />
                <figcaption className={styles.gallery__caption}>
                  {item.caption}
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      ))}
    </div>
  )
}

export default InstaSection
