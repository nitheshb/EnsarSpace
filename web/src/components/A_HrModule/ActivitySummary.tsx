import React from 'react'

import Bargraph from './Bargraph'
import LineGraph from './LineGraph'
import PieChartComp from './PieChart'

const ActivitySummary = () => {
  return (

    // <div
    //   style={{
    //     padding: '1rem',
    //     backgroundColor: 'white',
    //     width: '90vw',
    //   }}
    // >
    //   <div style={{ display: 'flex' }}>
    //     <div style={{ width: '25%' }}>
    //       <div style={{ height: '12.5rem' }} className="bg-[#397D8A] p-6">
    //         <span className="text-white text-lg ">Lead Conversion Ratio</span>
    //         <div className="text-white text-[44px] my-5">17:1</div>
    //         <div className="text-white text-sm">Bookings vs Qualified</div>
    //       </div>
    //       <div
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'column',
    //           justifyContent: 'space-evenly',
    //           alignItems: 'center',
    //         }}
    //       >
    //         {[
    //           { stausTitle: 'Leads', count: '2,130' },
    //           { stausTitle: 'Opportunities', count: '643' },
    //           { stausTitle: 'Site Vists', count: '295' },
    //           { stausTitle: 'Negotiation', count: '501' },
    //           { stausTitle: 'Bookings', count: '295' },
    //           { stausTitle: 'Junk', count: '194' },
    //         ].map((item, i) => (
    //           <div
    //             key={i}
    //             className="bg-[#3C7E7D] my-[0.5px]"
    //             style={{
    //               height: '4rem',
    //               display: 'flex',
    //               justifyContent: 'space-between',
    //               alignItems: 'center',
    //               padding: '1rem',
    //               fontSize: '1.3rem',
    //               width: '100%',
    //             }}
    //           >
    //             <div className="text-white">{item?.stausTitle}</div>
    //             <div className="text-white">{item?.count}</div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <div style={{ border: '1px solid black', width: '75%' }}>
    //       <div style={{ border: '1px solid black', display: 'flex' }}>
    //         <Bargraph />
    //       </div>
    //       <div style={{ display: 'flex' }}>
    //         <div
    //           style={{
    //             width: '25%',
    //             display: 'flex',
    //             flexDirection: 'column',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}
    //         >
    //           <div
    //             style={{

    //               width: '100%',
    //               height: '12rem',
    //               position: 'relative',
    //             }}
    //           >
    //             <PieChartComp />
    //             <div
    //               style={{
    //                 position: 'absolute',
    //                 top: '40%',
    //                 left: '39%',
    //                 fontSize: '2rem',
    //                 fontWeight: '600',
    //                 color: '#4fa183',
    //               }}
    //             >
    //               30%
    //             </div>
    //             <div
    //               style={{
    //                 position: 'absolute',
    //                 top: '80%',
    //                 left: '4.5%',
    //                 padding: '0 0.5rem',
    //                 fontSize: '0.9rem',
    //                 color: '#4fa183',
    //               }}
    //               className="bg-[#4DA283]"
    //             >
    //               <span className="text-white">Lead-to-Opportunity Ratio</span>
    //             </div>
    //           </div>
    //           <div
    //             style={{

    //               width: '100%',
    //               height: '12rem',
    //               position: 'relative',
    //             }}
    //           >
    //             <PieChartComp />
    //             <div
    //               style={{
    //                 position: 'absolute',
    //                 top: '40%',
    //                 left: '39%',
    //                 fontSize: '2rem',
    //                 fontWeight: '600',
    //                 color: '#4fa183',
    //               }}
    //             >
    //               30%
    //             </div>
    //             <div
    //               style={{
    //                 position: 'absolute',
    //                 top: '80%',
    //                 left: '4.5%',
    //                 padding: '0 0.5rem',
    //                 fontSize: '0.9rem',
    //                 color: '#4fa183',
    //               }}
    //               className="bg-[#4DA283]"
    //             >
    //               <span className="text-white">
    //                 Oppurtunity-to-Booking
    //               </span>
    //             </div>
    //           </div>
    //           {/* <div
    //             style={{
    //               border: '1px solid red',
    //               width: '100%',
    //               height: '10rem',
    //             }}
    //           ></div> */}
    //         </div>
    //         <div
    //           style={{
    //             border: '1px solid black',
    //             width: '75%',

    //             display: 'flex',
    //             flexDirection: 'column',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}
    //         >
    //           <div
    //             style={{
    //               border: '1px solid blue',
    //               height: '7rem',
    //               display: 'flex',
    //               flexDirection: 'column',
    //               justifyContent: 'space-between',
    //               alignItems: 'center',
    //             }}
    //           >
    //             <div style={{ border: '1px solid black', height: '30%' }}></div>
    //             <div style={{ border: '1px solid black' }}>
    //               <LineGraph />
    //             </div>
    //           </div>
    //           <div
    //             style={{
    //               border: '1px solid blue',
    //               height: '7rem',
    //               display: 'flex',
    //               flexDirection: 'column',
    //               justifyContent: 'space-between',
    //               alignItems: 'center',
    //             }}
    //           >
    //             <div style={{ border: '1px solid black', height: '30%' }}></div>
    //             <div style={{ border: '1px solid black' }}>
    //               <LineGraph />
    //             </div>
    //           </div>
    //           <div
    //             style={{
    //               border: '1px solid blue',
    //               height: '7rem',
    //               display: 'flex',
    //               flexDirection: 'column',
    //               justifyContent: 'space-between',
    //               alignItems: 'center',
    //             }}
    //           >
    //             <div style={{ border: '1px solid black', height: '30%' }}></div>
    //             <div style={{ border: '1px solid black' }}>
    //               <LineGraph />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-row h-full"
      style={{
        marginTop: '-15px',
      }}>
      <div className="flex flex-col w-full ">
        {/* <div className="flex flex-col bg-[#F5F4F4] px-10 rounded-bl-3xl rounded-br-3xl"> */}
        {/* <div className="flex flex-row items-center py-6"> */}
        {/* <span className="app-color-blue font-bold text-xs mr-2">
              Finance Dashboard
            </span> */}
        {/* <span className="mr-2"></span>
            <span className="mr-auto font-bold text-xs app-color-black"></span>
            <span className="font-bold text-xs app-color-gray"></span>
          </div> */}
        <div className="flex flex-row pb-10">
          <div className="flex flex-col w-8/12">
            <div className="flex flex-row items-center py-4">
              <span className="text-lg font-semibold mr-auto">
                All Activity Summary
              </span>
              {/* <div className="rounded w-2 h-2 mx-1 app-bg-black"></div>
                <div className="rounded w-2 h-2 mx-1 app-bg-gray-2"></div>
                <div className="rounded w-2 h-2 mx-1 app-bg-gray-2"></div> */}
            </div>
            <div className="flex flex-row">
              <div
                className="flex flex-col app-bg-gradient-blue  w-1/3 h-44 p-4 rounded-xl app-box-shadow-blue ml-4"
                style={{
                  background: 'white',
                  height: '95px',
                  // 'linear-gradient(to bottom left, #d7b391, #966D47)',
                }}
              >
                {/* <span className=" font-bold mb-auto">
                  Total
                </span>
                <span className="flex flex-row">
                  <span className=" text-xs  mt-[12px] min-w[68px] w-full">
                    In Review
                  </span>
                  <span className=" text-2xl ml-2 font-semibold text-right">
                    40
                  </span>
                </span>
                <span className="flex flex-row mt-1">
                  <span className=" text-xs  mt-[12px] min-w[68px] w-full">
                    Cleared
                  </span>
                  <span className=" text-2xl font-semibold">
                    10
                  </span>
                </span>
                <span className="flex flex-row mt-1">
                  <span className=" text-xs mt-[12px] min-w[68px] w-full">
                    Uncleared
                  </span>
                  <span className=" text-2xl  ml-2 font-semibold">
                    30
                  </span>
                </span> */}
                <div>
                  <p>
                    Members Worked
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    15
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col app-bg-gradient-blue w-1/3 h-44 p-4 rounded-xl app-box-shadow-blue ml-4"
                style={{
                  background: 'white',
                  height: '95px',
                  // 'linear-gradient(to bottom left, #D0B8A1, #966D47)',
                }}
              >
                <div>
                  <p>
                    Projects Worked
                  </p>
                </div>
                <div>
                  <p className="font-bold">10</p>
                </div>
                {/* <span className="text-black font-bold mb-auto">
                  Today's Activity
                </span>
                <span className="flex flex-row">
                  <span className="text-black text-xs  mt-[12px] min-w[68px] w-full">
                    In Review
                  </span>
                  <span className="text-black text-2xl ml-2 font-semibold text-right">
                    14
                  </span>
                </span>
                <span className="flex flex-row mt-1">
                  <span className="text-black text-xs  mt-[12px] min-w[68px] w-full">
                    Cleared
                  </span>
                  <span className="text-black text-2xl font-semibold">
                    4
                  </span>
                </span>
                <span className="flex flex-row mt-1">
                  <span className="text-black text-xs mt-[12px] min-w[68px] w-full">
                    Uncleared
                  </span>
                  <span className="text-black text-2xl  ml-2 font-semibold">
                    10
                  </span>
                </span> */}
              </div>
              <div
                className="flex flex-col app-bg-gradient-blue w-1/3 h-44 p-4 rounded-xl app-box-shadow-blue ml-4"
                style={{
                  background: 'white',
                  height: '95px',
                  // 'linear-gradient(to bottom left, #D0B8A1, #966D47)',
                }}
              >
                <div>
                  <p>
                    Todays Activity
                  </p>
                </div>
                <div>
                  <p className="font-bold">75%</p>
                </div>
                {/* <span className="text-black font-bold mb-auto">
                  Working Today
                </span>
                <span className="flex flex-row">
                  <span className="text-black text-xs  mt-[12px] min-w[68px] w-full">
                    In Review
                  </span>
                  <span className="text-black text-2xl ml-2 font-semibold text-right">
                    28
                  </span>
                </span>
                <span className="flex flex-row mt-1">
                  <span className="text-black text-xs  mt-[12px] min-w[68px] w-full">
                    Cleared
                  </span>
                  <span className="text-black text-2xl font-semibold">
                    18
                  </span>
                </span>
                <span className="flex flex-row mt-1">
                  <span className="text-black text-xs mt-[12px] min-w[68px] w-full">
                    Uncleared
                  </span>
                  <span className="text-black text-2xl  ml-2 font-semibold">
                    10
                  </span>
                </span> */}
              </div>
              <div
                className="flex flex-col app-bg-gradient-blue w-1/3 h-44 p-4 rounded-xl app-box-shadow-blue ml-4"
                style={{
                  background: 'white',
                  height: '95px',
                  // 'linear-gradient(to bottom left, #D0B8A1, #966D47)',
                }}
              >
                <div>
                  <span>
                    Worked Today
                  </span>
                </div>
                <div>
                  <p className="font-bold">06:30:45</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-px app-bg-gray-2 mx-12"></div>
          {/* <div className="flex flex-col w-4/12 justify-between">
              <div className="flex flex-row items-center py-6">
                <span className="mr-auto text-lg font-semibold">
                  Balance
                </span>
                <span className="text-sm font-semibold">
                  Last month
                </span>
                <svg
                  className="w-6 h-6 font-bold ml-2 app-color-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <span className="app-color-blue text-4xl font-semibold">
                ₹5 400.55
              </span>
              <span className="app-color-blue text-sm font-semibold"></span>
              <div className="flex flex-row">
                <div className="flex flex-col w-1/2">
                  <span className="text-xs app-color-gray font-semibold mb-2">
                    Cleared
                  </span>
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row w-7 h-7 app-bg-gray-2 justify-center items-center rounded-full mr-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 app-color-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-semibold">₹6 320.15</span>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <span className="text-xs app-color-gray font-semibold mb-2">
                    Pending
                  </span>
                  <div className="flex flex-row items-center">
                    <div className="transform rotate-90 flex flex-row w-7 h-7 app-bg-gray-2 justify-center items-center rounded-full mr-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 app-color-red"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-semibold">₹919.60</span>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ActivitySummary
