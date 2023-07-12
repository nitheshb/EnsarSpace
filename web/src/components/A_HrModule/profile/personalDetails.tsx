import React, { useState } from 'react';

const PersonalDetails = () => {
  function handleUpdate(event) {
    // Handle the update functionality here
    console.log('Update button clicked');
  }

  return (
    <section
      className="flex flex-col md:px-8 rounded-md"
      style={{
        width: '600px',
      }}
    >
      <div className="w-full flex flex-row py-4 items-center">
        <span>
          <p className="text-3xl font-bold text-gray-900">Worked On</p>
          <p className="text-sm text-gray-500">
            Others will only see what they can access.
          </p>
        </span>
        <button
          onClick={handleUpdate}
          className="h-10 w-40 bg-gray-400 hover:bg-blue-300 rounded-full"
        >
          Update
        </button>
      </div>
      <div>
        <div className="border-[#2499EF] rounded-xl border w-full">
          <span className="flex items-center">
            <svg
              style={{
                width: '50px',
                height: '50px',
                paddingLeft: '10px',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              {/* SVG path code */}
            </svg>

            <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2 transition-colors duration-300">
              Programming Foundations
            </p>
          </span>
          <span className="flex items-center">
            <svg
              style={{
                width: '50px',
                height: '50px',
                paddingLeft: '10px',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              {/* SVG path code */}
            </svg>
            <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2 transition-colors duration-300">
              Web Applications
            </p>
          </span>
          <span className="flex items-center">
            <svg
              style={{
                width: '50px',
                height: '50px',
                paddingLeft: '10px',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              {/* SVG path code */}
            </svg>
            <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2 transition-colors duration-300">
              Introduction to Database
            </p>
          </span>
          <span className="flex items-center">
            <svg
              style={{
                width: '50px',
                height: '50px',
                paddingLeft: '10px',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              {/* SVG path code */}
            </svg>
            <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2 transition-colors duration-300">
              Other Course
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <div className="tabs" style={{ display: 'flex' }}>
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabClick('about')}
        >
          About
        </button>
        <button
          className={activeTab === 'workedon' ? 'active' : ''}
          onClick={() => handleTabClick('workedon')}
        >
          Worked On
        </button>
      </div>

      <div className="section">
        {activeTab === 'about' && (
          <div className="about-section">
            {/* Your content for the About section */}
          </div>
        )}

        {activeTab === 'workedon' && (
          <div className="workedon-section">
            <PersonalDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
