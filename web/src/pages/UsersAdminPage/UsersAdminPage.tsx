import { Fragment, useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import AttendancePage from 'src/components/A_LearningModule/Attendance'
import SlimSideMenuBar from 'src/components/A_SideMenu/slimSideMenu'
// import HeadSideBarDetailView from 'src/components/HeadDetailSideBar'
import HeadNavBar2 from 'src/components/HeadNavBar/HeadNavBar2'
// import HeadSideBar from 'src/components/HeadSideBar/HeadSideBar'
// import LeadsTeamReportBody from 'src/components/LeadsTeamReportBody'
import LeadsTeamReportBody from 'src/components/LeadsTeamReportBody'
import MyActivityHome from 'src/components/MyActivityHome/MyActivityHome'
import SUserSignup from 'src/components/SUserSignup/SUserSignup'
import OnBoarding from 'src/components/TableComp/OnBoarding'
// import OnBoarding from 'src/components/TableComp/OnBoarding'
import TimeOffTable from 'src/components/TableComp/TimeOffTable'
import UserAccessTable from 'src/components/UserAccessTable/UserAccessTable'
import UserManageTable from 'src/components/UserManageTable/UserManageTable'
import LeaveApprovalPage from '../LeaveApprovalPage/LeaveApprovalPage'
import LaptopDetailsPage from '../LaptopDetailPage/LaptopDetailPage'
import SiderForm from 'src/components/SiderForm/SiderForm'
// import ActivitySummaryReport from 'src/components/ActivitySummaryReport'
// import UserAccessTable from 'src/components/UserAccessTable/UserAccessTable'
// import TimeOff from 'src/components/TableComp/TimeOff'
import TableData from 'src/components/A_AccessManagement/TableData'
// import ActivitySummaryReport from 'src/components/ActivitySummaryReport'
import TimeOff from 'src/components/TableComp/TimeOff'
import Calendar from 'src/components/TableComp/Calendar'
// import OnBoarding1 from 'src/components/ConstructModule/OnBoarding1'
// import Assets from 'src/components/ConstructModule/OnBoarding'

const UsersAdminPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOnClose = () => setIsOpen(false)
  const [viewable, setViewable] = useState('User Management')
  const [empData, setEmpData] = useState({})
  const [selModule, setSelModule] = useState('HR')
  const [isImportLeadsOpen, setisImportLeadsOpen] = useState(false)
  const [isLeaveOpen, setisLeaveOpen] = useState(false)

  const editEmployeeFun = (empData) => {
    setEmpData(empData)
    setIsOpen(true)
  }
  return (
    <>
      <MetaTags title="UsersAdmin" description="UsersAdmin page" />

      <div className="flex w-screen h-screen text-gray-700">
        <SlimSideMenuBar
          pgName={'hrModule'}
          sourceLink={'hrModule'}
          showSideView1={undefined}
          setViewable={setViewable}
          viewable={viewable}
        />

        <div className="flex flex-col flex-grow">
          <HeadNavBar2 selModule={selModule} setSelModule={setSelModule} />
          <div className="flex-grow p-6 overflow-auto  text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
            <div className="flex items-center flex-shrink-0 h-16 px-0  pl-0  ">
              {/* <h1 className="text-lg font-medium">redefine.</h1> */}
              <span className="relative  flex items-center w-auto text-2xl font-bold leading-none pl-0">
                {viewable}
              </span>

              {viewable === 'User Management' && (
                <button
                  onClick={() => editEmployeeFun({})}
                  className="flex items-center justify-center h-10 px-4  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="ml-1 leading-none">Add Employee</span>
                </button>
              )}

              {viewable === 'OnBoarding' && (
                <button
                  onClick={() => setisImportLeadsOpen(true)}
                  className="flex items-center justify-center h-10 px-4  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="ml-1 leading-none">Add Asset</span>
                </button>
              )}

               {/* {viewable === 'OnBoarding' && (
                <button
                  onClick={() => setisImportLeadsOpened(true)}
                  className="flex items-center justify-center h-10 px-4  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="ml-1 leading-none">Assign Asset</span>
                </button>
              )} */}



              {viewable === 'Roles Management' && (
                <button
                  onClick={() => editEmployeeFun({})}
                  className="flex items-center justify-center h-10 px-5  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-400 "
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="ml-1 leading-none">Add Role</span>
                </button>
              )}

              {viewable === 'TimeOff' && (
                <button
                  onClick={() => setisLeaveOpen(true)}
                  className="flex items-center justify-center h-10 px-5  bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-400 "
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="ml-1 leading-none">Apply Leave</span>
                </button>
              )}
            </div>

            {viewable === 'User Management' && (
              <UserManageTable editEmployeeFun={editEmployeeFun} />
            )}

            {viewable === 'ongoing_projects' && (
              <>
                <UserManageTable editEmployeeFun={editEmployeeFun} />
              </>
            )}

            {viewable === 'Leave Approval' && (
              <>
                <LeaveApprovalPage />
              </>
            )}
            {/* {viewable === 'Roles Management' && (
              <>
                <TableData />
              </>
            )} */}

            {viewable === 'Roles Management' && (
              <>
                <TableData />
                {/* <OnBoarding leadsTyper={undefined} /> */}
              </>
            )}



              {/* {viewable === 'LaptopDetailsPage' && (
              <>
                <LaptopDetailsPage />
              </>
            )} */}
            {viewable === 'On Boarding' && (
              <>
                <OnBoarding leadsTyper={undefined} />
              </>
            )}

            {viewable === 'Holidays Calendar' && (
              <>
                <Calendar />
              </>
            )}

            {viewable === 'My Activity' && (
              <>
                <MyActivityHome source={'individual'} />
              </>
            )}

            {viewable === 'Time Off' && (
              <>
                <TimeOffTable />
              </>
            )}

            {viewable === 'Time Off' && (
              <>
                <TimeOff />
              </>
            )}

            {viewable === 'AttendancePage' && (
              <>
                <AttendancePage />
              </>
            )}

            {viewable === 'Team Activity' && (
              <>
                <MyActivityHome source={'team'} />
              </>
            )}
            {viewable === 'Pay Slips'}

            {viewable === 'User Report' && (
              <LeadsTeamReportBody
                project={{
                  area: 1000,
                  builderName: 'hello',
                  location: 'local',
                  projectName: 'User Report',
                  projectType: 'aprtment',
                }}
                isEdit={false}
              />
            )}

            {viewable === 'User Report' && (
              // <ReportMain/>
              <ActivitySummaryReport
                project={{
                  area: 1000,
                  builderName: 'hello',
                  location: 'local',
                  projectName: 'User Report',
                  projectType: 'aprtment',
                }}
                isEdit={false}
              />
            )}

            <SUserSignup
              open={isOpen}
              setOpen={handleOnClose}
              title="User"
              empData={empData}
            />

            <SiderForm
            open={isImportLeadsOpen}
            setOpen={setisImportLeadsOpen}
            title='AddAsset'
            widthClass="max-w-xl"
            />

           {/* <SiderForm
            open={isImportLeadsOpened}
            setOpen={setisImportLeadsOpened}
            title='AssignAsset'
            widthClass="max-w-xl"
            /> */}

          </div>
        </div>
      </div>
      <SiderForm
        open={isLeaveOpen}
        setOpen={setisLeaveOpen}
        title='applyLeave'
        widthClass="max-w-xl"
      />
    </>
  )
}

export default UsersAdminPage
