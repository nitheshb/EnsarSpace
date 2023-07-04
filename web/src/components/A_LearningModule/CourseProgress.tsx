import React from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'

import CardLayout from './CardLayout'
import MyJourneyNavBar2 from './MyLearningsHeadxer'

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px; /* Increase top margin to push the boxes down */
  box-sizing: border-box;
  margin: 0px auto;
  min-width: 0px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 1152px;
  width: 100%;
  color: #151a30;
`

const ProgressBox = styled.div`
  flex: 0 0 calc(33.33% - 40px);
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center the content horizontally */
`

const ProgressInfoRow = styled.div`
  display: flex;
  flex-direction: column; /* Update to column */
  margin-top: 10px;
  justify-content: space-between;
`

const ProgressInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px; /* Add margin between the progress info items */
`

const ProgressColor = styled.div`
  width: 12px;
  height: 12px;
  // border-radius: 50%;
  margin-right: 8px;
`
const Heading1 = styled.h1`
  padding-top: 25px; /* Add margin to create space between heading and boxes */
  text-align: left;
  box-sizing: border-box;
  margin: 0px auto;
  min-width: 0px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 1152px;
  width: 100%;
  color: #151a30;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 22px;
`
const ProgressBarContainer = styled.div`
  width: 150px; /* Adjust the width to control the size of the circular progress bar */
  height: 150px; /* Adjust the height to control the size of the circular progress bar */
`

const Heading2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px; /* Add margin to create space between heading and boxes */
  text-align: left;
  box-sizing: border-box;
  margin: 0px auto;
  min-width: 0px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 1152px;
  width: 100%;
  color: #151a30;
  font-weight: bold;
  font-size: 22px;
`
const Heading3 = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

const CourseProgress = () => {
  // Sample data for progress
  const lessonProgress = 70 // Percentage of completed lessons
  const assignmentProgress = 50 // Percentage of completed assignments
  const quizProgress = 25 // Percentage of completed quizzes

  return (
    <>
      <MyJourneyNavBar2 selModule={'Learning'} setSelModule={'Module'} />
      <div>
        <Heading1>Course Name</Heading1>
        <br />
        <Heading2>Progress</Heading2>
        <ProgressContainer>
          <ProgressBox>
            <Heading3>Lessons</Heading3>
            <br />
            <ProgressBarContainer>
              <CircularProgressbar
                value={lessonProgress}
                text={`${lessonProgress}%`}
                styles={buildStyles({
                  textSize: '20px',
                  pathColor: `#0070AC`,
                  textColor: '#151A30',
                  trailColor: '#d6d6d6',
                })}
              />
            </ProgressBarContainer>
            <ProgressInfoRow>
              <ProgressInfo>
                <ProgressColor style={{ background: '#0070AC' }} />
                <span>Total Lessons: 10</span>
              </ProgressInfo>
              <ProgressInfo>
                <ProgressColor style={{ background: '#d6d6d6' }} />
                <span>Completed Lessons: 7</span>
              </ProgressInfo>
            </ProgressInfoRow>
          </ProgressBox>
          <ProgressBox>
            <Heading3>Assignments</Heading3>
            <br />
            <ProgressBarContainer>
              <CircularProgressbar
                value={assignmentProgress}
                text={`${assignmentProgress}%`}
                styles={buildStyles({
                  textSize: '20px',
                  pathColor: `#0070AC`,
                  textColor: '#151A30',
                  trailColor: '#d6d6d6',
                })}
              />
            </ProgressBarContainer>
            <ProgressInfoRow>
              <ProgressInfo>
                <ProgressColor style={{ background: '#0070AC' }} />
                <span>Total Assignments: 6</span>
              </ProgressInfo>
              <ProgressInfo>
                <ProgressColor style={{ background: '#d6d6d6' }} />
                <span>Completed Assignments: 3</span>
              </ProgressInfo>
            </ProgressInfoRow>
          </ProgressBox>
          <ProgressBox>
            <Heading3>Quizzes</Heading3>
            <br />
            <ProgressBarContainer>
              <CircularProgressbar
                value={quizProgress}
                text={`${quizProgress}%`}
                styles={buildStyles({
                  textSize: '20px',
                  pathColor: `#0070AC`,
                  textColor: '#151A30',
                  trailColor: '#d6d6d6',
                })}
              />
            </ProgressBarContainer>
            <ProgressInfoRow>
              <ProgressInfo>
                <ProgressColor style={{ background: '#0070AC' }} />
                <span>Total Quizzes: 4</span>
              </ProgressInfo>
              <ProgressInfo>
                <ProgressColor style={{ background: '#d6d6d6' }} />
                <span>Completed Quizzes: 1</span>
              </ProgressInfo>
            </ProgressInfoRow>
          </ProgressBox>
        </ProgressContainer>
        <CardLayout />
      </div>
    </>
  )
}

export default CourseProgress
