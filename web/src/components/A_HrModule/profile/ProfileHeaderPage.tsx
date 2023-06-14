import { relative } from 'path';
import React from 'react';

const ProfileHeaderPage = () => {
  const handleImageUpload = (event) => {
    // Handle image upload logic here
  };

  function handleFileInputChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (

    <div className="page-container hover:bg-blue-300" style={{ height: '250px'}}>
  <div className="sc-7ldj5v-3 jtGKkh" data-testid="profile-header-backdrop">
    <div className="sc-7ldj5v-5 ilezIS" data-testid="profile-header-hover-overlay">
      <div className="sc-7ldj5v-2 haSDbM">
        <input
          id="file-input"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleImageUpload}
        />
        <label htmlFor="file-input">
          {/* Updated code starts here */}




           <div className="flex flex-col items-center justify-center ">



           <span
      className="css-178ag6o"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span
        aria-hidden="true"
        className="css-gu2hl6"
        style={{
          '--icon-primary-color': 'currentColor',
          '--icon-secondary-color': 'var(--ds-surface, #000000)',
        }}
        onClick={() => handleImageClick()}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation" style={{ verticalAlign: 'middle' }}>
          <path
            d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H4.995A1.995 1.995 0 013 19.005V4.995zM10.5 16.5L9 15l-3 3h12v-2.7L15 12l-4.5 4.5zM8 10a2 2 0 100-4 2 2 0 000 4z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
      <span
        id="dropdown-trigger-label"
        onClick={() => handleImageClick()}
        className="text-black mt-1" // Add mt-1 class for slight spacing
        style={{ textAlign: 'center' }} // Center align the text
      >
        <p>Add your header image</p>
      </span>
    </span>





            <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center absolute mt-[450px] left-[330px]">





              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="sr-only"
              />
              <label htmlFor="file-input" className="flex items-center  relative bottom-30 right-2">
                {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11 9h3l-4-4-4 4h3v4h2V9zm5-7h-3v2h-2V2H5v2H3a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zm0 13H3V7h14v11z" clipRule="evenodd" />
                </svg> */}
              </label>
              <span className="text-white text-4xl font-bold">
                DR
              </span>

            </div>

          </div>
          {/* Updated code ends here */}
        </label>
      </div>
    </div>
  </div>
</div>




    //  <div className="page-container">
//     <div className="page-container" style={{ height: '250px',zIndex: "-1", position:"relative" }}>


//      <div className="sc-7ldj5v-3 jtGKkh" data-testid="profile-header-backdrop ">

//         <div className="sc-7ldj5v-5 ilezIS" data-testid="profile-header-hover-overlay">
//           <div className="sc-7ldj5v-2 haSDbM">
//             <input
//               id="file-input"
//               type="file"
//               accept="image/*"
//               className="sr-only"
//               onChange={handleImageUpload}
//             />
//             <label htmlFor="file-input">

// <span className="css-178ag6o" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//   <span
//     aria-hidden="true"
//     className="css-gu2hl6"
//     style={{
//       '--icon-primary-color': 'currentColor',
//       '--icon-secondary-color': 'var(--ds-surface, #FFFFFF)',
//     }}
//   >
//     <svg width="24" height="24" viewBox="0 0 24 24" role="presentation" style={{ verticalAlign: 'middle' }}>
//       <path
//         d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0119.005 21H4.995A1.995 1.995 0 013 19.005V4.995zM10.5 16.5L9 15l-3 3h12v-2.7L15 12l-4.5 4.5zM8 10a2 2 0 100-4 2 2 0 000 4z"
//         fill="currentColor"
//         fillRule="evenodd"
//       ></path>
//     </svg>
//   </span>
//   <span id="dropdown-trigger-label">
//     <p>Add your header image</p>
//   </span>
// </span>




//             </label>
//           </div>


// <div className="w-32 h-32 bg-blue-900 rounded-full flex flex-col items-center justify-center relative mt-[-15px] mr-[-15px] p-0">
//   <input
//     id="file-input"
//     type="file"
//     accept="image/*"
//     onChange={handleFileInputChange}
//     className="sr-only"
//   />



//    <label htmlFor="file-input" className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
//     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//       <path fillRule="evenodd" d="M11 9h3l-4-4-4 4h3v4h2V9zm5-7h-3v2h-2V2H5v2H3a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zm0 13H3V7h14v11z" clipRule="evenodd" />
//     </svg>
//   </label>
//   <span className="text-white text-4xl font-bold flex items-center justify-center">
//     Add your header image
//   </span>

// <span className="text-white text-4xl font-bold">
//     DR
//   </span>
// </div> */}






        // </div>
      // </div>


// </div>
      // </div>
  );


};

export default ProfileHeaderPage;
