import React, { useState } from 'react';

const LessonComponent = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [comments, setComments] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="lesson-component">
      <div className="tabs">
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabClick('about')}
        >
          About
        </button>
        <button
          className={activeTab === 'discussion' ? 'active' : ''}
          onClick={() => handleTabClick('discussion')}
        >
          Discussion
        </button>
        <button
          className={activeTab === 'comments' ? 'active' : ''}
          onClick={() => handleTabClick('comments')}
        >
          Comments
        </button>
      </div>

      {activeTab === 'about' && (
        <div className="about-section">
          {/* Add content for the about section */}
        </div>
      )}

      {activeTab === 'discussion' && (
        <div className="discussion-section">
          {/* Add content for the discussion section */}
        </div>
      )}

      {activeTab === 'comments' && (
        <div className="comments-section">
          <form onSubmit={handleCommentSubmit}>
            <input type="text" placeholder="Write a comment" />
            <button type="submit">Submit</button>
          </form>
          <div className="comment-list">
            {/* Display the list of comments */}
            {comments.map((comment, index) => (
              <div key={index} className="comment-item">
                {comment}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LessonComponent;
