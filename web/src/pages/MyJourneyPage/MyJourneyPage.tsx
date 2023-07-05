
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
