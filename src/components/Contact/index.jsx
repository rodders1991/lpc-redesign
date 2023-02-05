import React, { useState } from 'react'
import * as styles from './contact.module.css'

import ContactSection from '../ContactSection'
import { Container } from '@mui/material'
import { InlineWidget } from 'react-calendly'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import WhereSection from './WhereSection'

const MeetingEmployee = ({ employee, handleBookClick }) => (
  <div className={styles.employee}>
    <GatsbyImage
      alt=""
      image={employee.image.gatsbyImage}
      objectFit="contain"
      className={styles.employeeImg}
    />
    <div className={styles.employeeTextContainer}>
      <h3 className={styles.employeeTitle}>{employee.name}</h3>
      <p className={styles.employeeRole}>{employee.role}</p>
      <input
        className={styles.employeeBookButton}
        type="button"
        value={`Book with ${employee?.name.split(' ')[0]}`}
        onClick={handleBookClick}
      />
    </div>
  </div>
)

const Contact = ({ banner, meetingEmployees }) => {
  const bannerImage = getImage(banner)
  const bannerBackgroundImage = convertToBgImage(bannerImage)
  const [showCalendar, setShowCalendar] = useState(false)
  return (
    <>
      <div className={styles.root}>
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bannerBackgroundImage}
          preserveStackingContext
        >
          <div className={styles.container}>
            <Container maxWidth="xl">
              <div className={styles.containerInside}>
                <div>
                  <h1 className={styles.title}>Contact Us</h1>
                  <h3 className={styles.subTitle}>
                    If you have any further questions, we suggest booking a
                    meeting with 1 of our team of experts who would be happy to
                    help but alternatively you can call or email us. We look
                    forward to hearing from you!
                  </h3>
                </div>
                <div className={styles.calendarContainer}>
                  {!showCalendar && (
                    <div>
                      {meetingEmployees.map((employee) => (
                        <MeetingEmployee
                          key={employee.name}
                          employee={employee}
                          handleBookClick={() => setShowCalendar(true)}
                        />
                      ))}
                    </div>
                  )}
                  {showCalendar && (
                    <>
                      <input
                        className={styles.employeeBookButton}
                        type="button"
                        value={`< Book with someone else`}
                        onClick={() => setShowCalendar(false)}
                      />
                      <InlineWidget url="https://calendly.com/georgeormrod" />
                    </>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </BackgroundImage>
      </div>
      <WhereSection />
      <ContactSection />
    </>
  )
}

export default Contact
