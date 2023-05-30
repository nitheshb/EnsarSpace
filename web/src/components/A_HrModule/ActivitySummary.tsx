import React from 'react'

import Bargraph from './Bargraph'
import LineGraph from './LineGraph'
import PieChartComp from './PieChart'

const ActivitySummary = () => {
  return (




    <div className="flex flex-row h-full"
      style={{
        marginTop: '-15px',
      }}>
      <div className="flex flex-col w-full ">

        <div className="flex flex-row pb-10">
          <div className="flex flex-col w-8/12">
            <div className="flex flex-row items-center py-4">

            </div>
            <div className="flex flex-row">
              <div
                className="flex flex-col app-bg-gradient-blue  w-1/3 h-44 p-4 rounded-xl app-box-shadow-blue ml-4"
                style={{
                  background: 'white',
                  height: '95px',

                }}
              >

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

              </div>
              <div
                className="flex flex-col app-bg-gradient-blue w-1/3 h-44 p-4 rounded-xl app-box-shadow-blue ml-4"
                style={{
                  background: 'white',
                  height: '95px',

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

              </div>
              <div
                className="flex flex-col app-bg-gradient-blue w-1/3 h-44 p-4 rounded-xl app-box-shadow-blue ml-4"
                style={{
                  background: 'white',
                  height: '95px',

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

        </div>
        
      </div>
    </div>
  )
}

export default ActivitySummary
