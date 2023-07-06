// import React from 'react';
// import styled,{ createGlobalStyle }  from 'styled-components';
// import { FaCheck, FaCircle, FaSpinner } from 'react-icons/fa';
// import MyJourneyNavBar from './MyJourneyNavBar';

// const GlobalStyle = createGlobalStyle`
//   body {

//     margin: 0;
//     padding: 0;
//     background: rgb(189,221,247);
// background: linear-gradient(90deg, rgba(189,221,247,1) 60%, rgba(238,174,202,1) 100%);
//   }
// `;
// const CardContainer = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   margin-top: 50px;
// `;

// const Card = styled.div`
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   padding: 16px;
//   margin-bottom: 16px;
//   position: relative;
//   overflow: hidden;

//   ::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 8px;
//     background-color: orange;
//   }
// `;

// const TitleLine = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 16px;
// `;

// const Title = styled.h3`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
// `;

// const ProgressBar = styled.div`
//   width: 100%;
//   height: 8px;
//   background-color: #f1f1f1;
//   border-radius: 4px;
//   margin-left: 16px;
// `;

// const ProgressBarFill = styled.div`
//   width: ${({ percentage }) => percentage}%;
//   height: 100%;
//   background-color: orange;
//   border-radius: 4px;
// `;

// const Percentage = styled.span`
//   font-weight: bold;
//   margin-left: 8px;
// `;

// const SubCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: skyblue;
//   border-radius: 4px;
//   padding: 12px;
//   margin-bottom: 8px;
//   width: 100%;
// `;

// const SubCardDescription = styled.p`
//   margin-bottom: 8px;
// `;

// const CourseTitle = styled.h1`
//   font-size: 24px;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 20px;
//   margin-top: 30px;
//   margin-left: 70px;
// `;

// const CompletionTick = styled.span`
//   display: inline-block;
//   width: 18px;
//   height: 18px;
//   margin-right: 8px;
//   text-align: center;
//   line-height: 18px;
//   font-size: 14px;
//   color: ${({ completed }) => (completed ? '#4caf50' : '#f44336')};
// `;

// const InProgressIcon = styled(FaSpinner)`
//   color: #ff9800;

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

// const FullPageCard = () => {
//   const courseTitle = 'My Journey';

//   const cardData = [
//     {
//       title: 'Python (Apr 06 - Jun 03)',
//       contents: [
//         {
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//           completed: true,
//         },
//         {
//           description: 'Nullam consequat lectus id arcu tempus pulvinar.',
//           completed: false,
//         },
//         {
//           description: 'Praesent vestibulum auctor tincidunt.',
//           completed: true,
//         },
//       ],
//       totalPercentage: 90,
//     },
//     {
//       title: 'JavaScript (May 10 - Jul 05)',
//       contents: [
//         {
//           description: 'Vestibulum id ligula porta felis euismod semper.',
//           completed: false,
//         },
//         {
//           description: 'Cras mattis consectetur purus sit amet fermentum.',
//           completed: true,
//         },
//         {
//           description: 'Etiam porta sem malesuada magna mollis euismod.',
//           completed: true,
//         },
//       ],
//       totalPercentage: 70,
//     },
//     {
//       title: 'HTML & CSS (Jun 15 - Aug 10)',
//       contents: [
//         {
//           description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
//           completed: true,
//         },
//         {
//           description: 'Donec id elit non mi porta gravida at eget metus.',
//           completed: true,
//         },
//         {
//           description: 'Aenean lacinia bibendum nulla sed consectetur.',
//           completed: false,
//         },
//       ],
//       totalPercentage: 66,
//     },
//   ];

//   return (
//     <div>
//       <GlobalStyle />
//       <MyJourneyNavBar selModule={undefined} setSelModule={undefined}/>
//       <CourseTitle>{courseTitle}</CourseTitle>
//       <CardContainer>
//         {cardData.map((card, index) => (
//           <Card key={index}>
//             <TitleLine>
//               <Title style={{ width: '130%' }}>{card.title}</Title>
//               <ProgressBar>
//                 <ProgressBarFill percentage={card.totalPercentage} />
//               </ProgressBar>
//               <Percentage>{card.totalPercentage}%</Percentage>
//             </TitleLine>
//             {card.contents.map((content, idx) => (
//               <SubCard key={idx}>
//                 <div className="flex flex-row justify-between">
//                   <SubCardDescription>{content.description}</SubCardDescription>
//                   <CompletionTick completed={content.completed}>
//                     {content.completed ? <FaCheck /> : <InProgressIcon />}
//                   </CompletionTick>
//                 </div>
//               </SubCard>
//             ))}
//           </Card>
//         ))}
//       </CardContainer>
//     </div>
//   );
// };

// export default FullPageCard;

import React, { useState } from 'react'

import { Card, Button } from '@mui/material'
import styled, { createGlobalStyle } from 'styled-components'

import MyJourneyNavBar from './MyJourneyNavBar'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f6f8fb;
    font-family: Arial, sans-serif;
  }
`

const CourseVideo = styled.div`
  flex: 1;
  // background: red;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  position: relative; /* Add position relative */
`

const CourseTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 20px;
`

const VideoPlayer = styled.video`
  width: 100%;
`

const SideNavigation = styled.div`
  width: 380px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${({ showNavigation }) => (showNavigation ? '0' : '-300px')};
  animation: ${({ showNavigation }) =>
    showNavigation ? 'slideIn 0.5s forwards' : 'slideOut 0.5s forwards'};
  background: white;
  z-index: 3;
  padding: 26px;

  @keyframes slideIn {
    from {
      right: -300px;
    }
    to {
      right: 0;
    }
  }

  @keyframes slideOut {
    from {
      right: 0;
    }
    to {
      right: -300px;
    }
  }
`

const SectionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
  position: relative;

  h1 {
    flex: 1; /* Take remaining horizontal space */
    margin-right: 10px; /* Add right margin for spacing */
  }

  input[type='checkbox'] {
    margin-left: 10px; /* Adjust margin to the left */
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ showNavigation }) => (showNavigation ? '100%' : '0')};
  height: ${({ showNavigation }) => (showNavigation ? '100%' : '0')};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

const EnrollCoursePage = () => {
  const [completedSections, setCompletedSections] = useState([])

  const sections = [
    {
      id: 1,
      title: 'Chapter 1: Design Reusable Object-Oriented Python Classes',
    },
    { id: 2, title: 'Chapter 2: How to handle Errors' },
    { id: 3, title: 'Chapter 3: Work with Python file handling' },
    { id: 4, title: 'Chapter 4: Apply OOP Concepts to handle complexity' },
  ]

  const [completed, setCompleted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)

  const handleComplete = () => {
    setCompleted(true)
  }

  const handleSectionCompletion = (sectionId) => {
    if (completedSections.includes(sectionId)) {
      setCompletedSections(completedSections.filter((id) => id < sectionId))
    } else {
      setCompletedSections([...completedSections, sectionId])
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleCourseContent = () => {
    setShowNavigation(!showNavigation)
    if (showNavigation) {
      setMenuOpen(false)
    }
  }

  return (
    <div>
      <GlobalStyle />
      <MyJourneyNavBar selModule={undefined} setSelModule={undefined} />

      <Card
        style={{
          background:
            'linear-gradient(90deg, rgba(189,221,247,1) 60%, rgba(238,174,202,1) 100%)',
        }}
      >
        <CourseVideo>
          {showNavigation && (
            <SideNavigation showNavigation={showNavigation}>
              <h1
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
                Chapters
              </h1>
              <br />
              {sections.map((section, index) => (
                <React.Fragment key={section.id}>
                  <SectionItem>
                    <h1>{section.title}</h1>
                    <input
                      type="checkbox"
                      checked={completedSections.includes(section.id)}
                      onChange={() => handleSectionCompletion(section.id)}
                    />
                  </SectionItem>
                </React.Fragment>
              ))}
            </SideNavigation>
          )}

          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CourseTitle>Course Name</CourseTitle>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Button variant="contained" onClick={toggleMenu}>
                  Your Progress: {completedSections.length}/{sections.length}
                </Button>
                <Button variant="contained" onClick={handleCourseContent}>
                  Course Content
                </Button>
              </div>
            </div>
            <VideoPlayer controls style={{ background: 'white' }}>
              <source src="path_to_video_file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </VideoPlayer>
          </div>
        </CourseVideo>
        <br />

        <div
          style={{
            border: '2px solid black',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <h2
            style={{ fontSize: '24px', fontWeight: 'bold', color: '#333333' }}
          >
            What You'll Learn
          </h2>
          <ul
            style={{
              listStyleType: 'disc',
              paddingLeft: '20px',
              fontSize: '16px',
              color: '#333333',
            }}
          >
            <li>Introduction to the course</li>
            <li>Understanding the basics</li>
            <li>Advanced techniques and strategies</li>
            <li>Practical exercises and projects</li>
          </ul>
        </div>
        <br />

        <div
          style={{
            border: '2px solid black',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <h2
              style={{ fontSize: '24px', fontWeight: 'bold', color: '#333333' }}
            >
              Description
            </h2>
            <p style={{ fontSize: '16px', color: '#666666' }}>
              Learn A-Z everything about Python, from the basics, to advanced
              topics like Python GUI, Python Data Analysis, and more!
            </p>
          </div>
        </div>
      </Card>
      <Overlay showNavigation={showNavigation} onClick={handleCourseContent} />
      <br />
    </div>
  )
}

export default EnrollCoursePage
