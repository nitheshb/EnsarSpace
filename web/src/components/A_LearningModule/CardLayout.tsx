import React from 'react'
const CardLayout = () => {
  return (
    <>
      <div
        className="bg-white"
        style={{
          boxSizing: 'border-box',
          margin: '0px auto',
          minWidth: '0px',
          paddingLeft: '12px',
          paddingRight: '12px',
          maxWidth: '1152px',
          width: '100%',
        }}
      >
        <div className="flex flex-col py-2">
          <section className="flex">
            <div className="flex justify-start w-3/4 p-2 font-bold text-2xl mr-6">
              Quiz Analytics
            </div>

            <div className="flex justify-end w-1/4">
              <button className="bg-gray-200 p-2 mr-5">View All</button>
            </div>
          </section>
        </div>
        <section className="flex items-center justify-center ml-auto bg-white border-gray-100 py-4 md:py-4 px-5">
          <div
            className="p-4 flex items-center justify-center flex-grow border border-gray-300"
            style={{
              height: '10rem',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <div className="flex justify-center w-3/4 pb-4  text-sm">
              Total Score
            </div>
            <div className="flex justify-center font-bold text-3xl">N/A</div>
            <div className="text-gray-300 font-bold text-xl">out of 24</div>
          </div>

          <div
            className="p-4 flex flex-col items-center justify-center flex-grow border-t border-b border-gray-300"
            style={{ height: '10rem' }}
          >
            <div className="flex justify-center w-3/4 pb-4 text-sm text-white">
              &nbsp; {/* Add a non-breaking space to maintain the height */}
            </div>
            <div className="flex justify-center font-bold text-3xl">8</div>
            <div className="text-gray-300 font-bold text-xl text-center">
              Quizes
            </div>
          </div>

          <div
            className="p-4 flex flex-col items-center justify-center flex-grow border-t border-b border-gray-300"
            style={{ height: '10rem' }}
          >
            <div className="flex justify-center w-3/4 pb-4  text-sm text-white">
              &nbsp;
            </div>
            <div className="flex justify-center font-bold text-3xl">N/A</div>
            <div className="text-gray-300 font-bold text-xl">Completed</div>
          </div>

          <div
            className="p-4 flex flex-col items-center justify-center flex-grow border-t border-b border-gray-300"
            style={{ height: '10rem' }}
          >
            <div className="flex justify-center w-3/4 pb-4  text-sm text-white">
              &nbsp;
            </div>
            <div className="flex justify-center font-bold text-3xl">N/A</div>
            <div className="text-gray-300 font-bold text-xl">Accuracy</div>
          </div>

          <div
            className="p-4 flex flex-col items-center justify-center flex-grow border-t border-b border-r border-gray-300"
            style={{ height: '10rem' }}
          >
            <div className="flex justify-center w-3/4 pb-4  text-sm text-white">
              &nbsp;
            </div>
            <div className="flex justify-center font-bold text-3xl">N/A</div>
            <div className="text-gray-300 font-bold text-xl">Avg.Score</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CardLayout
