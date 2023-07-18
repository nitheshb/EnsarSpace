
import React, { useState } from 'react';

const LessonComponent = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [comments, setComments] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="lesson-component">
      <div className="tabs" style={{ display: 'flex' }}>
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabClick('about')}
          style={{
            marginRight: '10px',
            fontWeight: 'bold',
            borderRadius: '3px',
            color: activeTab === 'about' ? 'black' : '#cacccb',
          }}
        >
          About
        </button>
        <button
          className={activeTab === 'discussion' ? 'active' : ''}
          onClick={() => handleTabClick('discussion')}
          style={{
            marginRight: '10px',
            fontWeight: 'bold',
            borderRadius: '3px',
            color: activeTab === 'discussion' ? 'black' : '#cacccb',
          }}
        >
          Discussion
        </button>
        <button
          className={activeTab === 'comments' ? 'active' : ''}
          onClick={() => handleTabClick('comments')}
          style={{
            marginRight: '10px',
            fontWeight: 'bold',
            borderRadius: '3px',
            color: activeTab === 'comments' ? 'black' : '#cacccb',
          }}
        >
          Comments
        </button>
      </div>

      <div className="section">
        {activeTab === 'about' && (
          <div className="about-section" style={{ padding: '10px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '25px', fontFamily: 'Times New Roman', marginBottom: '10px', fontWeight: 'bold' }}>About Section</h2>
            <p style={{ fontSize: '18px', fontFamily: 'Times New Roman' }}>
              The React JS lessons cover various topics related to building modern web applications using the React JavaScript library. The lessons include fundamental concepts, such as JSX syntax, component composition, state management, and handling events. You will also learn advanced techniques, such as working with React hooks, managing forms, and integrating with external APIs.
            </p>
            <p style={{ fontSize: '18px', fontFamily: 'Times New Roman' }}>
              Each lesson provides hands-on examples and exercises to reinforce your understanding of React JS. By the end of the course, you will have a solid foundation in React development and be able to build dynamic and interactive user interfaces.
            </p>
          </div>
        )}

        {activeTab === 'discussion' && (
          <div className="discussion-section" style={{ padding: '10px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '25px', fontFamily: 'Times New Roman', marginBottom: '10px',fontWeight: 'bold' }}>Lesson Discussion</h2>
            <div>
              <textarea
                name=""
                placeholder="Start a Discussion"
                style={{
                  boxSizing: 'border-box',
                  margin: '0',
                  minWidth: '0',
                  display: 'block',
                  width: '100%',
                  appearance: 'none',
                  lineHeight: 'inherit',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  padding: '8px',
                  border: '1px solid #ccc',
                  flex: '1 1 0%',
                  color: '#333',
                  fontSize: '1rem',
                  fontFamily: 'Arial, sans-serif'
                }}
              ></textarea>
            </div>
          </div>
        )}

        {activeTab === 'comments' && (
          <div className="comments-section" style={{ padding: '10px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '25px', fontFamily: 'Times New Roman', marginBottom: '10px',fontWeight: 'bold' }}>Comments Section</h2>
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Write a comment"
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '18px',
                  fontFamily: 'Arial, sans-serif',
                  width: '100%',
                  marginBottom: '10px',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#333333',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontFamily: 'Arial, sans-serif',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
              >
                Submit
              </button>
            </form>
            <div className="comment-list">
              {/* Display the list of comments */}
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="comment-item"
                  style={{ marginBottom: '10px', fontSize: '18px', fontFamily: 'Arial, sans-serif' }}
                >
                  {comment}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonComponent;
