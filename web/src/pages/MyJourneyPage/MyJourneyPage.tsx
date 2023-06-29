import React from 'react'

import { FaCheck, FaSpinner } from 'react-icons/fa'
import styled, { createGlobalStyle } from 'styled-components'

import MyJourneyNavBar from './MyJourneyNavBar'

const GlobalStyle = createGlobalStyle`
  body {

    margin: 0;
    padding: 0;
    background: rgb(189,221,247);
background: linear-gradient(90deg, rgba(189,221,247,1) 60%, rgba(238,174,202,1) 100%);
  }
`
const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
`

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 8px;
    background-color: orange;
  }
`

const TitleLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 4px;
  margin-left: 16px;
`

const ProgressBarFill = styled.div`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: orange;
  border-radius: 4px;
`

const Percentage = styled.span`
  font-weight: bold;
  margin-left: 8px;
`

const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 8px;
  width: 100%;
`

const SubCardDescription = styled.p`
  margin-bottom: 8px;
`

const CourseTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 70px;
`

const CompletionTick = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  color: ${({ completed }) => (completed ? '#4caf50' : '#f44336')};
`

const InProgressIcon = styled(FaSpinner)`
  color: #ff9800;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const FullPageCard = () => {
  const courseTitle = 'My Journey'

  const cardData = [
    {
      title: 'Python (Apr 06 - Jun 03)',
      contents: [
        {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          completed: true,
        },
        {
          description: 'Nullam consequat lectus id arcu tempus pulvinar.',
          completed: false,
        },
        {
          description: 'Praesent vestibulum auctor tincidunt.',
          completed: true,
        },
      ],
      totalPercentage: 90,
    },
    {
      title: 'JavaScript (May 10 - Jul 05)',
      contents: [
        {
          description: 'Vestibulum id ligula porta felis euismod semper.',
          completed: false,
        },
        {
          description: 'Cras mattis consectetur purus sit amet fermentum.',
          completed: true,
        },
        {
          description: 'Etiam porta sem malesuada magna mollis euismod.',
          completed: true,
        },
      ],
      totalPercentage: 70,
    },
    {
      title: 'HTML & CSS (Jun 15 - Aug 10)',
      contents: [
        {
          description:
            'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          completed: true,
        },
        {
          description: 'Donec id elit non mi porta gravida at eget metus.',
          completed: true,
        },
        {
          description: 'Aenean lacinia bibendum nulla sed consectetur.',
          completed: false,
        },
      ],
      totalPercentage: 66,
    },
  ]

  return (
    <div>
      <GlobalStyle />
      <MyJourneyNavBar selModule={undefined} setSelModule={undefined} />
      <CourseTitle>{courseTitle}</CourseTitle>
      <CardContainer>
        {cardData.map((card, index) => (
          <Card key={index}>
            <TitleLine>
              <Title style={{ width: '130%' }}>{card.title}</Title>
              <ProgressBar>
                <ProgressBarFill percentage={card.totalPercentage} />
              </ProgressBar>
              <Percentage>{card.totalPercentage}%</Percentage>
            </TitleLine>
            {card.contents.map((content, idx) => (
              <SubCard key={idx}>
                <div className="flex flex-row justify-between">
                  <SubCardDescription>{content.description}</SubCardDescription>
                  <CompletionTick completed={content.completed}>
                    {content.completed ? <FaCheck /> : <InProgressIcon />}
                  </CompletionTick>
                </div>
              </SubCard>
            ))}
          </Card>
        ))}
      </CardContainer>
    </div>
  )
}

export default FullPageCard
