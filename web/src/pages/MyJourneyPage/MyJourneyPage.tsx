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




// // import React, { useState } from 'react'

// // import { Card, Button } from '@mui/material'
// // import styled, { createGlobalStyle } from 'styled-components'

// // import MyJourneyNavBar from './MyJourneyNavBar'

// // const GlobalStyle = createGlobalStyle`
// //   body {
// //     margin: 0;
// //     padding: 0;
// //     background: #f6f8fb;
// //     font-family: Arial, sans-serif;
// //   }
// // `

// // const CourseVideo = styled.div`
// //   flex: 1;
// //   // background: red;
// //   border-radius: 8px;
// //   padding: 20px;
// //   display: flex;
// //   flex-direction: row-reverse;
// //   position: relative; /* Add position relative */
// // `

// // const CourseTitle = styled.h1`
// //   font-size: 24px;
// //   font-weight: bold;
// //   color: #333333;
// //   margin-bottom: 20px;
// // `

// // const VideoPlayer = styled.video`
// //   width: 100%;
// // `

// // const SideNavigation = styled.div`
// //   width: 380px;
// //   height: 100%;
// //   position: fixed;
// //   top: 0;
// //   right: ${({ showNavigation }) => (showNavigation ? '0' : '-300px')};
// //   animation: ${({ showNavigation }) =>
// //     showNavigation ? 'slideIn 0.5s forwards' : 'slideOut 0.5s forwards'};
// //   background: white;
// //   z-index: 3;
// //   padding: 26px;

// //   @keyframes slideIn {
// //     from {
// //       right: -300px;
// //     }
// //     to {
// //       right: 0;
// //     }
// //   }

// //   @keyframes slideOut {
// //     from {
// //       right: 0;
// //     }
// //     to {
// //       right: -300px;
// //     }
// //   }
// // `

// // const SectionItem = styled.div`
// //   display: flex;
// //   align-items: center;
// //   margin-bottom: 10px;
// //   padding: 10px 0;
// //   position: relative;

// //   h1 {
// //     flex: 1; /* Take remaining horizontal space */
// //     margin-right: 10px; /* Add right margin for spacing */
// //   }

// //   input[type='checkbox'] {
// //     margin-left: 10px; /* Adjust margin to the left */
// //   }
// // `

// // const Overlay = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: ${({ showNavigation }) => (showNavigation ? '100%' : '0')};
// //   height: ${({ showNavigation }) => (showNavigation ? '100%' : '0')};
// //   background-color: rgba(0, 0, 0, 0.5);
// //   z-index: 2;
// // `

// // const EnrollCoursePage = () => {
// //   const [completedSections, setCompletedSections] = useState([])

// //   const sections = [
// //     {
// //       id: 1,
// //       title: 'Chapter 1: Design Reusable Object-Oriented Python Classes',
// //     },
// //     { id: 2, title: 'Chapter 2: How to handle Errors' },
// //     { id: 3, title: 'Chapter 3: Work with Python file handling' },
// //     { id: 4, title: 'Chapter 4: Apply OOP Concepts to handle complexity' },
// //   ]

// //   const [completed, setCompleted] = useState(false)
// //   const [menuOpen, setMenuOpen] = useState(false)
// //   const [showNavigation, setShowNavigation] = useState(false)

// //   const handleComplete = () => {
// //     setCompleted(true)
// //   }

// //   const handleSectionCompletion = (sectionId) => {
// //     if (completedSections.includes(sectionId)) {
// //       setCompletedSections(completedSections.filter((id) => id < sectionId))
// //     } else {
// //       setCompletedSections([...completedSections, sectionId])
// //     }
// //   }

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen)
// //   }

// //   const handleCourseContent = () => {
// //     setShowNavigation(!showNavigation)
// //     if (showNavigation) {
// //       setMenuOpen(false)
// //     }
// //   }

// //   return (
// //     <div>
// //       <GlobalStyle />
// //       <MyJourneyNavBar selModule={undefined} setSelModule={undefined} />

// //       <Card
// //         style={{
// //           background:
// //             'linear-gradient(90deg, rgba(189,221,247,1) 60%, rgba(238,174,202,1) 100%)',
// //         }}
// //       >
// //         <CourseVideo>
// //           {showNavigation && (
// //             <SideNavigation showNavigation={showNavigation}>
// //               <h1
// //                 style={{
// //                   fontSize: '24px',
// //                   fontWeight: 'bold',
// //                   marginBottom: '10px',
// //                 }}
// //               >
// //                 Chapters
// //               </h1>
// //               <br />
// //               {sections.map((section, index) => (
// //                 <React.Fragment key={section.id}>
// //                   <SectionItem>
// //                     <h1>{section.title}</h1>
// //                     <input
// //                       type="checkbox"
// //                       checked={completedSections.includes(section.id)}
// //                       onChange={() => handleSectionCompletion(section.id)}
// //                     />
// //                   </SectionItem>
// //                 </React.Fragment>
// //               ))}
// //             </SideNavigation>
// //           )}

// //           <div style={{ flex: 1 }}>
// //             <div
// //               style={{
// //                 display: 'flex',
// //                 flexDirection: 'row',
// //                 justifyContent: 'space-between',
// //                 alignItems: 'center',
// //               }}
// //             >
// //               <CourseTitle>Course Name</CourseTitle>
// //               <div style={{ display: 'flex', gap: '10px' }}>
// //                 <Button variant="contained" onClick={toggleMenu}>
// //                   Your Progress: {completedSections.length}/{sections.length}
// //                 </Button>
// //                 <Button variant="contained" onClick={handleCourseContent}>
// //                   Course Content
// //                 </Button>
// //               </div>
// //             </div>
// //             <VideoPlayer controls style={{ background: 'white' }}>
// //               <source src="path_to_video_file.mp4" type="video/mp4" />
// //               Your browser does not support the video tag.
// //             </VideoPlayer>
// //           </div>
// //         </CourseVideo>
// //         <br />

// //         <div
// //           style={{
// //             border: '2px solid black',
// //             borderRadius: '8px',
// //             padding: '20px',
// //           }}
// //         >
// //           <h2
// //             style={{ fontSize: '24px', fontWeight: 'bold', color: '#333333' }}
// //           >
// //             What You'll Learn
// //           </h2>
// //           <ul
// //             style={{
// //               listStyleType: 'disc',
// //               paddingLeft: '20px',
// //               fontSize: '16px',
// //               color: '#333333',
// //             }}
// //           >
// //             <li>Introduction to the course</li>
// //             <li>Understanding the basics</li>
// //             <li>Advanced techniques and strategies</li>
// //             <li>Practical exercises and projects</li>
// //           </ul>
// //         </div>
// //         <br />

// //         <div
// //           style={{
// //             border: '2px solid black',
// //             borderRadius: '8px',
// //             padding: '20px',
// //           }}
// //         >
// //           <div style={{ marginBottom: '20px' }}>
// //             <h2
// //               style={{ fontSize: '24px', fontWeight: 'bold', color: '#333333' }}
// //             >
// //               Description
// //             </h2>
// //             <p style={{ fontSize: '16px', color: '#666666' }}>
// //               Learn A-Z everything about Python, from the basics, to advanced
// //               topics like Python GUI, Python Data Analysis, and more!
// //             </p>
// //           </div>
// //         </div>
// //       </Card>
// //       <Overlay showNavigation={showNavigation} onClick={handleCourseContent} />
// //       <br />
// //     </div>
// //   )
// // }

// // export default EnrollCoursePage









import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai';
import { curriculum } from 'src/components/A_LearningModule/LearningModules/courseContent';
import MyJourneyNavBar from './MyJourneyNavBar';
import { navigate } from '@redwoodjs/router'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f6f8fb;
    font-family: Arial, sans-serif;
  }
`;

const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  display: flex;
`;

const CourseVideo = styled.div`
  flex: 7;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;




const VideoPlayer = styled.iframe`
  width: 100%;
  height: 60%;


  &[autoplay="true"] {
    border: 2px solid green;
  }


  &[autoplay="false"] {
    border: 2px solid red;

  }
`;

const SideNavigation = styled.div`
  width: 100%;
  max-width: 380px;
  height: 100%;
  position: sticky;
  top: 0;
  right: 0;
  background: white;
  z-index: 3;
  padding: 26px;
  overflow-y: auto;
  max-height: 100vh;
`;

const ExpandIcon = styled(AiOutlineDown)`
  font-size: 20px;
  color: ${({ expanded }) => (expanded ? '#333333' : '#cccccc')};
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: ${({ expanded }) => (expanded ? '#333333' : '#999999')};
    cursor: pointer;
  }

  transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center;
  margin-left: 10px;
`;

const LessonName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: #333333;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  position: relative;
  cursor: pointer;
  outline: none;
  background-color: ${({ checked }) => (checked ? 'green' : 'transparent')};

  &::before {
    content: "\u2714"; /* Check mark Unicode character */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: white;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: green;
  border-radius: 5px;
`;

const EnrollCoursePage = () => {
  const [chapters, setChapters] = useState(curriculum);
  const [selectedVideo, setSelectedVideo] = useState(null);








  const handleViewAnalytics = () => {
    navigate('/course-progress');
  };




  const completedLessons = chapters.reduce(
    (count, chapter) =>
      count + chapter.lessons.filter((lesson) => lesson.completed).length,
    0
  );
  const totalLessons = chapters.reduce(
    (count, chapter) => count + chapter.lessons.length,
    0
  );

  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const handleLessonClick = (event, chapterIndex, lessonIndex) => {
    event.stopPropagation();
    const lesson = chapters[chapterIndex].lessons[lessonIndex];
    setSelectedVideo(lesson);
  };

  const handleCheckboxChange = (chapterIndex, lessonIndex) => {
    const updatedChapters = [...chapters];
    const lesson = updatedChapters[chapterIndex].lessons[lessonIndex];
    lesson.completed = !lesson.completed;

    const allCompleted = updatedChapters[chapterIndex].lessons.every(
      (lesson) => lesson.completed
    );

    updatedChapters[chapterIndex].completed = allCompleted;
    setChapters(updatedChapters);
  };




  const handleChapterExpand = (chapterIndex) => {
    const updatedChapters = [...chapters];
    const chapter = updatedChapters[chapterIndex];
    chapter.expanded = !chapter.expanded;


    updatedChapters.forEach((otherChapter, index) => {
      if (index !== chapterIndex) {
        otherChapter.expanded = false;
      }
    });

    setChapters(updatedChapters);
  };

  return (
    <div>
      <GlobalStyle />
      <MyJourneyNavBar selModule={undefined} setSelModule={undefined} />
      <Card>
        <CourseVideo>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >

            </div>


            {selectedVideo && (
              <>
                <VideoPlayer src={selectedVideo.videoLink} frameBorder="0" allowFullScreen autoplay={false} />
                <LessonName>{selectedVideo.title}</LessonName>
              </>
            )}



          </div>
        </CourseVideo>




        <SideNavigation>
          <div className="section-title" style={{ marginBottom: '10px' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Arial',
              fontSize: '18px'
            }}>
              <h1>Syllabus</h1>


            </div>
          </div>
          <div className="progress-container">


            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'Arial, sans-serif',
              fontSize: '16px'
            }}>
              <h1>Course Analytics</h1>
              <button
                style={{ backgroundColor: '#ff9b3d', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px' }}
                onClick={handleViewAnalytics}
              >
                View Analytics
              </button>


            </div>
            <br />
            <ProgressBar>
              <ProgressFill percentage={progressPercentage} />
            </ProgressBar>
            <div className="progress-percentage">
              {progressPercentage.toFixed(0)}%
            </div>
          </div>
          {chapters.map((chapter, chapterIndex) => (
            <div
              key={chapter.id}
              onClick={() => handleChapterExpand(chapterIndex)}
              className="chapter-wrapper"
              style={{
                marginBottom: '10px',
                cursor: 'pointer',
                backgroundColor: '#f5f5f5',
                padding: '10px',
              }}
            >
              <div
                className="chapter-title"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  backgroundColor: '#fafffb',
                  padding: '10px',
                  color: '#333',
                  fontFamily: ' sans-serif', fontSize: '16px'
                }}
              >
                {chapter.title}
                <div className="expand-icon">
                  <ExpandIcon expanded={chapter.expanded} />
                </div>
              </div>







{chapter.expanded && (
  <div className="lessons-wrapper" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {chapter.lessons.map((lesson, lessonIndex) => (
      <div
        key={lesson.id}
        className="lesson"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '10px',
          backgroundColor: '#e0e0e0',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          width: '300px',
        }}
        onClick={(event) =>
          handleLessonClick(event, chapterIndex, lessonIndex)
        }
      >
        <div
          className={`lesson-title ${selectedVideo === lesson ? 'active' : ''}`}
          style={{
            fontFamily: 'Times New Roman',
            fontSize: '16px',
            marginRight: '10px',
            flexGrow: 1,
            textAlign: 'center',
          }}
        >
          {lesson.title}
        </div>
        <Checkbox
          type="checkbox"
          checked={lesson.completed}
          onChange={() =>
            handleCheckboxChange(chapterIndex, lessonIndex)
          }
        />
      </div>
    ))}
  </div>
)}


            </div>
          ))}
        </SideNavigation>
      </Card>
    </div>
  );
};

export default EnrollCoursePage;

