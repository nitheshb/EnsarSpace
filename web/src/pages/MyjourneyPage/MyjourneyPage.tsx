import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import { FaCheck, FaCircle, FaSpinner } from 'react-icons/fa';
import MyJourneyHeadBar from './MyJourneyHeadBar';



const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f0f0;
    margin: 0;
    padding: 0;
    background: rgb(238,174,202);
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Card = styled.div`
  background-color: #f2f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 32px; /* Adjust the gap size as per your preference */
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 8px;
    background-color: orange;
  }
`;


const TitleLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 14px;
  margin-left:2px;
  font-weight: bold;
  color: #333;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 4px;
  margin-left: 16px;
`;

const ProgressBarFill = styled.div`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: orange;
  border-radius: 4px;
`;

const Percentage = styled.span`
  font-weight: bold;
  margin-left: 8px;
`;

const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  border-radius: 4px;
  border: 1px solid black;
  padding: 12px;
  margin-bottom: 8px;
  width: 100%;
`;

const SubCardDescription = styled.p`
  margin-bottom: 8px;
`;

const CourseTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-left: 70px;
`;

const CompletionTick = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  color: ${({ completed }) => (completed ? '#4caf50' : '#f44336')};

`;

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
`;




const FullPageCard = () => {
  const courseTitle = 'My Journey';

  const cardData = [
    {
      title: 'Python (Apr 06 - Jun 03)',
      contents: [
        {
          description: 'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
          completed: true,
        },
        {
          description: 'Python introduction for beginners. Learn complete Python from scratch!',
          completed: false,
        },
        {
          description: 'From Classes To Inheritance - OOP In-Depth For Python Programmers.',
          completed: true,
        },
      ],
      totalPercentage: 90,
    },
    {
      title: 'Data Science (May 10 - Jul 05)',
      contents: [
        {
          description: 'All you need to master AWS Certified Security Specialty certification.',
          completed: false,
        },
        {
          description: 'Data Science Associate Exam - Master Foundations. Join Live Study Group Q&A!',
          completed: true,
        },
        {
          description: 'Learn Programming In R And R Studio. Data Analytics, Data Science.',
          completed: true,
        },
      ],
      totalPercentage: 70,
    },
    {
      title: 'AWS (Jun 15 - Aug 10)',
      contents: [
        {
          description: 'Learn how to use the R programming language for data science.',
          completed: true,
        },
        {
          description: 'Videos, labs & practice exams - AWS Certified .',
          completed: true,
        },
        {
          description: 'All you need to master AWS Certified Security Specialty certification.',
          completed: false,
        },
      ],
      totalPercentage: 66,
    },
  ];

  return (
    <div>
      <GlobalStyle />
      <MyJourneyHeadBar selModule={'none'} setSelModule={'none'} />
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
  );
};

export default FullPageCard;
