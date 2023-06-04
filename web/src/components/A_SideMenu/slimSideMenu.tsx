import { UserGroupIcon } from '@heroicons/react/outline'

import { Link, routes } from '@redwoodjs/router'

import { USER_ROLES } from 'src/constants/userRoles'
import { useAuth } from 'src/context/firebase-auth-context'


const SlimSideMenuBar = (props) => {
  const { pgName, sourceLink, showSideView1, setViewable, viewable } = props
  const { user } = useAuth()



  return (
    <div className="flex flex-col items-center w-20 min-w-[83px] pb-4   bg-white bg-opacity-75  bg-[#f0f3ff] h-screen w-[83px] max-w-[83px]">
      {['hrModule',
      'financeModule',
       'crmModule',
       'projectModule',
       'salesModule',
       'constructModule',
       'legalModule',
      ]
       .includes(sourceLink) && (
        <a
          className="flex items-center justify-center flex-shrink-0 w-full py-[9px] mr-4  border-b mt-[4px] pt-[10px]"
          href="#"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="40"
            height="35"
            fill="#141446"
            >


            <path d="M186.12 343.34c-9.65 9.65-9.65 25.29 0 34.94 9.65 9.65 25.29 9.65 34.94 0L378.24 221.1c19.29-19.29 50.57-19.29 69.86 0s19.29 50.57 0 69.86L293.95 445.1c19.27 19.29 50.53 19.31 69.82.04l.04-.04 119.25-119.24c38.59-38.59 38.59-101.14 0-139.72-38.59-38.59-101.15-38.59-139.72 0l-157.22 157.2zm244.53-104.8c-9.65-9.65-25.29-9.65-34.93 0l-157.2 157.18c-19.27 19.29-50.53 19.31-69.82.05l-.05-.05c-9.64-9.64-25.27-9.65-34.92-.01l-.01.01c-9.65 9.64-9.66 25.28-.02 34.93l.02.02c38.58 38.57 101.14 38.57 139.72 0l157.2-157.2c9.65-9.65 9.65-25.29.01-34.93zm-261.99 87.33l157.18-157.18c9.64-9.65 9.64-25.29 0-34.94-9.64-9.64-25.27-9.64-34.91 0L133.72 290.93c-19.28 19.29-50.56 19.3-69.85.01l-.01-.01c-19.29-19.28-19.31-50.54-.03-69.84l.03-.03L218.03 66.89c-19.28-19.29-50.55-19.3-69.85-.02l-.02.02L28.93 186.14c-38.58 38.59-38.58 101.14 0 139.72 38.6 38.59 101.13 38.59 139.73.01zm-87.33-52.4c9.64 9.64 25.27 9.64 34.91 0l157.21-157.19c19.28-19.29 50.55-19.3 69.84-.02l.02.02c9.65 9.65 25.29 9.65 34.93 0 9.65-9.65 9.65-25.29 0-34.93-38.59-38.59-101.13-38.59-139.72 0L81.33 238.54c-9.65 9.64-9.65 25.28-.01 34.93h.01z" />
          </svg>

        </a>
      )}
      <section className="mb-4"></section>
      {['crmModule'].includes(sourceLink) && (
        <>
          <ul className="w-full">
            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'CrmTasks'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('CrmTasks')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          fillRule="nonzero"
                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                          opacity=".1"
                        ></path>
                        <path
                          fillRule="nonzero"
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                        ></path>
                        <text
                          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                          fontSize="9"
                          transform="translate(4 2)"
                          fontWeight="500"
                        >
                          <tspan x="8" y="15" textAnchor="middle">
                            28
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <span className="text-xs pl-1">Tasks</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1 ">
              <span
                className={
                  'flex items-center text-sm py-1   overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'crmSpace-I'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('crmSpace-I')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#eb8909' }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">CRM</span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('MyCustomers-II')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>


                    <UserGroupIcon className="h-5 w-5 " aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Customers</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>

            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'MyCustomersEvents'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('MyCustomersEvents')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Snapshot</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Today1')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Construct</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'crmDashboard'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('crmDashboard')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}


              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#692fc2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g fill="currentColor" fillRule="nonzero">
                          <g>
                            <g>
                              <path
                                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                                transform="translate(-564 -480) translate(528 444) translate(36 36)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>

                  <span className="text-[9px] font-bold  pl-1">Reports</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
          </ul>
        </>
      )}
      {['constructModule'].includes(sourceLink) && (
        <>
          <ul className="w-full">
            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Today1')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          fillRule="nonzero"
                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                          opacity=".1"
                        ></path>
                        <path
                          fillRule="nonzero"
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                        ></path>
                        <text
                          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                          fontSize="9"
                          transform="translate(4 2)"
                          fontWeight="500"
                        >
                          <tspan x="8" y="15" textAnchor="middle">
                            28
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <span className="text-xs pl-1">Tasks</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1 pt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'ConstructUnits'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('ConstructUnits')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#eb8909' }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Units</span>
                </span>
              </span>
            </li>

            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'ConstructQueries'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('ConstructQueries')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Modify</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Roles Management'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Roles Management')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Gallery</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>

          </ul>
        </>
      )}
      {['projectModule'].includes(sourceLink) && (
        <>
          <ul className="w-full">
            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('MyProjectTasks')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          fillRule="nonzero"
                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                          opacity=".1"
                        ></path>
                        <path
                          fillRule="nonzero"
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                        ></path>
                        <text
                          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                          fontSize="9"
                          transform="translate(4 2)"
                          fontWeight="500"
                        >
                          <tspan x="8" y="15" textAnchor="middle">
                            28
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <span className="text-xs pl-1">Tasks</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1 pt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'ongoing_projects'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('ongoing_projects')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#eb8909' }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Projects</span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Marketing'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Marketing')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>


                    <UserGroupIcon className="h-5 w-5 " aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Templates</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Bank Accounts'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Bank Accounts')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Bank</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Today1')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">
                    Integration
                  </span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'projectReports'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('projectReports')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#692fc2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g fill="currentColor" fillRule="nonzero">
                          <g>
                            <g>
                              <path
                                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                                transform="translate(-564 -480) translate(528 444) translate(36 36)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Reports</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
          </ul>
        </>
      )}
      {['salesModule'].includes(sourceLink) && (
        <>
          <ul className="w-full">
            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Today1')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          fillRule="nonzero"
                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                          opacity=".1"
                        ></path>
                        <path
                          fillRule="nonzero"
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                        ></path>
                        <text
                          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                          fontSize="9"
                          transform="translate(4 2)"
                          fontWeight="500"
                        >
                          <tspan x="8" y="15" textAnchor="middle">
                            28
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <span className="text-xs pl-1">Tasks</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1 pt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'inProgress'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('inProgress')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#eb8909' }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">
                    In Progress
                  </span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'archieveLeads'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('archieveLeads')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>

                    <UserGroupIcon className="h-5 w-5 " aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Archieve</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'booked'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('booked')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Booked</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) || user?.role?.includes(USER_ROLES.ADMIN)) &&
              <li className="relative mt-1">
                <span
                  className={
                    'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                    (viewable === 'leadslake'
                      ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                      : '')
                  }
                  onClick={() => setViewable('leadslake')}
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <span className="flex items-center flex-col pt-[8px]">
                    <span style={{ color: '#058527' }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-[9px] font-bold  pl-1">Leads Bank</span>
                  </span>
                  <span className="flex ml-auto items-bottom">




                    <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                  </span>
                </span>
              </li>
            }
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'My Lead Report'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('My Lead Report')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#692fc2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g fill="currentColor" fillRule="nonzero">
                          <g>
                            <g>
                              <path
                                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                                transform="translate(-564 -480) translate(528 444) translate(36 36)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                 <span className="text-[9px] font-bold  pl-1">Reports</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) || user?.role?.includes(USER_ROLES.ADMIN)) &&
              <li className="relative mt-1">
                <span
                  className={
                    'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                    (viewable === 'Team Lead Report'
                      ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                      : '')
                  }
                  onClick={() => setViewable('Team Lead Report')}
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <span className="flex items-center flex-col pt-[8px]">
                    <span style={{ color: '#692fc2' }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <g fill="currentColor" fillRule="nonzero">
                            <g>
                              <g>
                                <path
                                  d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                                  transform="translate(-564 -480) translate(528 444) translate(36 36)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span className="text-[9px] font-bold  pl-1">
                      Team Reports
                    </span>
                  </span>
                  <span className="flex ml-auto items-bottom">
                    <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                  </span>
                </span>
              </li>
            }
          </ul>
        </>
      )}
      {['legalModule'].includes(sourceLink) && (
        <>
          <ul className="w-full">
            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Today1')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          fillRule="nonzero"
                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                          opacity=".1"
                        ></path>
                        <path
                          fillRule="nonzero"
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                        ></path>
                        <text
                          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                          fontSize="9"
                          transform="translate(4 2)"
                          fontWeight="500"
                        >
                          <tspan x="8" y="15" textAnchor="middle">
                            28
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <span className="text-xs pl-1">Tasks</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1 pt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'legalDocuments'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('legalDocuments')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#eb8909' }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Documents</span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Team Lead Report'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Team Lead Report')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#692fc2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g fill="currentColor" fillRule="nonzero">
                          <g>
                            <g>
                              <path
                                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                                transform="translate(-564 -480) translate(528 444) translate(36 36)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>

                  <span className="text-[9px] font-bold  pl-1">
                    Team Reports
                  </span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
          </ul>
        </>
      )}

      {['financeModule'].includes(sourceLink) && (
        <>
          <ul className="w-full">
            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Today1'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Today1')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          fillRule="nonzero"
                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                          opacity=".1"
                        ></path>
                        <path
                          fillRule="nonzero"
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                        ></path>
                        <text
                          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                          fontSize="9"
                          transform="translate(4 2)"
                          fontWeight="500"
                        >
                          <tspan x="8" y="15" textAnchor="middle">
                            28
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <span className="text-xs pl-1">Tasks</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1 pt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Payments'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Payments')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#eb8909' }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Amounts</span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Bank Accounts'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Bank Accounts')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Bank</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>

            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Dashboard'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Dashboard')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#692fc2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g fill="currentColor" fillRule="nonzero">
                          <g>
                            <g>
                              <path
                                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                                transform="translate(-564 -480) translate(528 444) translate(36 36)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>

                  <span className="text-[9px] font-bold  pl-1">Reports</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
          </ul>
        </>
      )}
      {['hrModule'].includes(sourceLink) && (
        <>
          <ul className="w-full">
            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'myHRTasks'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('myHRTasks')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >

                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <g fill="currentColor" fillRule="evenodd">
                        <path
                          fillRule="nonzero"
                          d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                          opacity=".1"
                        ></path>
                        <path
                          fillRule="nonzero"
                          d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                        ></path>
                        <text
                          fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                          fontSize="9"
                          transform="translate(4 2)"
                          fontWeight="500"
                        >
                          <tspan x="8" y="15" textAnchor="middle">
                            28
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                  <span className="text-xs pl-1">Tasks</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>

            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'User Management'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('User Management')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>


                    <UserGroupIcon className="h-5 w-5 " aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Organization</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>




            {/* <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Attendence'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Attendence')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>


                    <UserGroupIcon className="h-5 w-5 " aria-hidden="true" />

                  </span>
                  <span className="text-[9px] font-bold  pl-1">Attendence</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li> */}

            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded rounded-tl-[30px] rounded-bl-[30px] hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Attendence'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Attendence')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M16 8L10 15L8 12" />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold pl-1">Attendence</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>

            <li className="relative mt-1 pt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'ongoing_projects'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('ongoing_projects')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#eb8909' }}>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Jobs</span>
                </span>
              </span>
            </li>

            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Calendar'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Calendar')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <line x1="7" y1="14" x2="7" y2="21" />
                      <line x1="17" y1="14" x2="17" y2="21" />
                      <line x1="3" y1="14" x2="3" y2="21" />
                    </svg>


                  </span>
                  <span className="text-[9px] font-bold pl-1">Calendar</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Pay Slips'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Pay Slips')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 9h12M6 18h3M6 14h6" />
                    </svg>
                     </span>
                  <span className="text-[9px] font-bold  pl-1">Pay Slips</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Roles Management'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Roles Management')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Access</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'projectReports'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('projectReports')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#692fc2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g fill="currentColor" fillRule="nonzero">
                          <g>
                            <g>
                              <path
                                d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                                transform="translate(-564 -480) translate(528 444) translate(36 36)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Reports</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
          </ul>
        </>
      )}

      <Link
        className={
          'flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300 ' +
          (pgName === 'erpAccount' ? 'bg-gray-300' : '')
        }

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
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
    </div>
  )
}

export default SlimSideMenuBar
