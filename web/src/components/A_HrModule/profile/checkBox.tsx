import React from 'react';

const CheckBox = () => {
  return (
    <section className="md:w-[30vw] flex flex-col md:px-8 rounded-md" style={{ width: '600px' }}>
      <div className="w-full flex flex-row py-1 items-center">
        <p className="text-[32px] font-bold">Contributing to</p>
      </div>
      <div>
        <div className="w-full">
          <span className="flex">
            <img src="https://jira-frontend-static.prod.public.atl-paas.net/assets/ProjectsAndGoalsEmptyStateImage.5dbf0ebae4e56f0430a948fbadc6ee9a.8.svg" alt="Illustration" />
            <div>
              <h3 className="px-4 py-2 text-[20px]">
                Share the status of the work you’re driving towards
              </h3>
              <span className="flex p-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                >
                  {/* SVG paths */}
                </svg>
                <span className="pl-2">Powered by Ensar</span>
              </span>
              <p className="px-2 text-sm">
                Help teammates see a summary of what you work on, its current status, and the goals it contributes to.
              </p>
            </div>
          </span>
          <div>
            <p className="p-2" style={{ textDecoration: 'underline' }}>
              Learn More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <CheckBox />
    </div>
  );
};

export default Card;
