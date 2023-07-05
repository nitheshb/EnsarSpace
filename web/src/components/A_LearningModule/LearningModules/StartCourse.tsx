
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navigate } from '@redwoodjs/router';
import { startCourse, getCourseProgress } from 'src/context/dbQueryFirebase';
import { useAuth } from 'src/context/firebase-auth-context';

const StartCourseButton = ({ course }) => {
  const { user } = useAuth();
  const [courseStarted, setCourseStarted] = useState(false);

  useEffect(() => {
    checkCourseProgress();
  }, []);

  const checkCourseProgress = async () => {
    try {
      const progress = await getCourseProgress(user.orgId, user.uid, course.id);
      setCourseStarted(progress !== null);
    } catch (error) {
      console.error('Error checking course progress:', error);
    }
  };

  const handleButtonClick = async () => {
    try {
      let courseData = {
        course_name: course.course_name,
        course_id: course.id,
        course_category: course.category,
        course_progress: 0,
        name: user.displayName, // Use the user's name from authentication context
        uid: user.uid
      }
      await startCourse(user.orgId, courseData);
      console.log('Course started:', course.course_name);
      setCourseStarted(true);
      navigate('/my-journey');
    } catch (error) {
      console.error('Error starting course:', error);
    }
  };

  const buttonText = courseStarted ? 'Continue Course' : 'Start Course';

  return (
    <Button onClick={handleButtonClick}>{buttonText}</Button>
  );
};

const Button = styled.button`
  padding: 10px 20px;
  background-color: #cd21fc;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export default StartCourseButton;
