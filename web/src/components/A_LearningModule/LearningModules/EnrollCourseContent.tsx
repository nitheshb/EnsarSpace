import React from 'react';
import { useParams } from '@redwoodjs/router';

const EnrolledCourseSlidePage = () => {
  const { category } = useParams();
  // Fetch course details for the enrolled course using the category parameter

  // Dummy video URL
  const videoUrl = 'https://www.example.com/dummy-video';

  return (
    <div className="enrolled-course-slide-page">
      <div className="video-player">
        {/* Add your video player component here */}
        <video src={videoUrl} controls></video>
      </div>
      <div className="course-description">
        <h3>Course Description</h3>
        {/* Add the course description content here */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
      </div>
    </div>
  );
};

export default EnrolledCourseSlidePage;
