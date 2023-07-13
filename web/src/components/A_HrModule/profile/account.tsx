import React, { useState, useEffect } from 'react';

const Account = () => {
  return (
    <div>
      <div className="flex flex-row py-4 items-center">
        <p className="text-3xl font-bold ml-1">Places you work in</p>
      </div>

      <div className="flex space-x-4">
        <div className="flex items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-8 h-8"
          >
            {/* SVG path code */}
          </svg>
          <p className="p-2 font-bold text-lg">ENSAR SOLUTIONS</p>
        </div>
        <div className="flex items-center p-4">
          <img
            className="w-10 h-10"
            src="learning_images/cat_python.png"
            alt="python"
          />
          <p className="p-2 font-bold text-lg">PYTHON</p>
        </div>
        <div className="flex items-center p-4">
          <img
            className="w-10 h-10"
            src="learning_images/cat_web_development.png"
            alt="web development"
          />
          <p className="p-2 font-bold text-lg">WEB DEVELOPMENT</p>
        </div>
        <div className="flex items-center p-4">
          <img
            className="w-10 h-10"
            src="learning_images/cat_aws.png"
            alt="aws"
          />
          <p className="p-2 font-bold text-lg">AWS</p>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolledToBottom = (scrollPosition + window.innerHeight) >= document.documentElement.scrollHeight;
      setShowButton(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white rounded-md shadow-md p-6" style={{ marginBottom: '20px' }}>
      <Account />

      {/* {showButton && (
        <div className="fixed bottom-4 right-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Apply Leave
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Card;
