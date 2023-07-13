import React from 'react';

const ProfileAssetManagement = () => {
  function handleUpdate(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <section className="flex flex-col md:px-8 rounded-md" style={{ width: '600px' }}>
    <div className="w-full flex flex-row py-4 items-left">
      <span>
        <p className="text-3xl font-bold text-gray-900">Asset Management</p>
        <p className="text-[10px] text-gray-500">
          Others will only see what they can access.
        </p>
      </span>
    </div>

    <div>
      <div className="rounded-xl w-full">
        <span className="flex">
          <svg
            style={{ width: '50px', height: '50px', paddingLeft: '10px' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M448 96H64c-35.29 0-64 28.71-64 64v192c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64V160c0-35.29-28.71-64-64-64zM256 416h-64v-32h64zm160 0h-64v-32h64zm-32-128H128V160h256zm0-192H128v32h256zm96 128h-64v-32h64zm0-96h-64v-32h64z"
              fill="#7248EA"
            />
          </svg>
          <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2">
            Laptops
          </p>
        </span>

        <span className="flex">
          <svg
            style={{ width: '50px', height: '50px', paddingLeft: '10px' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M416 0H96C61.5 0 32 29.5 32 64v384c0 34.5 29.5 64 64 64h320c34.5 0 64-29.5 64-64V64c0-34.5-29.5-64-64-64zm16 448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16v384z"
              fill="#7248EA"
            />
            <path
              d="M256 480c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm0-32c4.4 0 8 3.6 8 8s-3.6 8-8 8-```jsx
8-3.6-8 8-8zm128-64H128V96h256v288zm0-304H128V64h256v32z"
              fill="#7248EA"
            />
          </svg>
          <p className="h-10 w-full hover:bg-blue-300 rounded-xl pl-2 pt-2">
            Printers
          </p>
        </span>
      </div>
    </div>
  </section>
);

};

const Card = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6" style={{ marginTop: '20px' }}>
      <ProfileAssetManagement />
    </div>
  );
};

export default Card;
