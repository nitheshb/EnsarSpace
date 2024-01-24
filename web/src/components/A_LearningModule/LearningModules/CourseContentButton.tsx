import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const CourseContent = () => {
  // Add your logic for handling the course content here
  const chapters = []; // Define your chapters array here

  return (
    <Card>
      <CardContent>
        <h2>Course Content</h2>
        {/* Render the chapters */}
        {chapters.map((chapter, index) => (
          <div key={index}>
            <h3>{chapter.title}</h3>
            {/* Render the videos */}
            {chapter.videos.map((video, index) => (
              <div key={index}>
                <h4>{video.title}</h4>
                {/* Render the video component */}
                <video src={video.url} controls />
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const YourComponent = () => {
  const [showCourseContent, setShowCourseContent] = useState(false);

  const handleCourseContent = () => {
    setShowCourseContent(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="contained" onClick={handleCourseContent}>
          Course Content
        </Button>
      </div>

      {/*
        Render the CourseContent component based on the button click.
        You can conditionally render it using a state variable or any other logic.
      */}
      {showCourseContent && <CourseContent />}
    </div>
  );
};

export default YourComponent;
