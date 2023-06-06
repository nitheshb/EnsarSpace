/* eslint-disable jsx-a11y/anchor-is-valid */
import { UserGroupIcon } from '@heroicons/react/outline'

import { Link, routes } from '@redwoodjs/router'

import { USER_ROLES } from 'src/constants/userRoles'
import { useAuth } from 'src/context/firebase-auth-context'

const SlimSideMenuBar = (props) => {
  const { pgName, sourceLink, showSideView1, setViewable, viewable } = props
  const { user } = useAuth()

  // if (!user?.role?.includes(USER_ROLES.ADMIN)) {
  //   return null
  // }

  return (
    <div className="flex flex-col items-center w-20 min-w-[83px] pb-4   bg-white bg-opacity-75  bg-[#f0f3ff] h-screen w-[83px] max-w-[83px]">
      {[
        'hrModule',
        'financeModule',
        'crmModule',
        'projectModule',
        'salesModule',
        'constructModule',
        'legalModule',
      ].includes(sourceLink) && (
          <a
            className="flex items-center justify-center flex-shrink-0 w-full py-[9px] mr-4  border-b mt-[4px] pt-[10px]"
            href="#"
          >
            {/* bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 */}
            {/* <svg
          className="w-8 h-8 to-indigo-600 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          // color="#a770ef"
        >
 HL-17-Access_management
          {/* bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 */}
          {/* <svg
          className="w-8 h-8 to-indigo-600 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          // color="#a770ef"
        >

 Development_dev
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg> */}
HL-17-Access_management
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="24"
            viewBox="0 0 1 28"
            fill="none"
            className="my-1"
            data-src="/images/logo/cubejs-logo.svg"
          >
            <path
              d="M22.1337 7.03243L11.8594 1V5.17391L22.1336 11.1804L22.1337 7.03243Z"
              fill="#FF6492"
            ></path>
            <path
              d="M22.1336 11.1823L19.0513 13.0019L11.8574 8.78565L7.74692 11.1857L4.66406 9.49917L11.8593 5.17578L22.1336 11.1823Z"
              fill="#141446"
            ></path>
            <path
              d="M7.74692 11.1826L4.66406 9.49609V12.9988L7.74692 11.1826Z"
              fill="#A14474"
            ></path>
            <path
              d="M1.58105 18.9676L11.8572 13L22.1334 18.9676L11.8572 25L1.58105 18.9676Z"
              fill="#141446"
            ></path>
            <path
              d="M22.1336 14.8259L11.8574 8.71875V12.9998L22.1336 18.9674L22.1336 14.8259Z"
              fill="#FF6492"
            ></path>
            <path
              d="M4.66391 13V9.4973L11.8592 5.17391V1L1.58105 7.03243V18.9676L11.8573 13V8.71892L4.66391 13Z"
              fill="#7A77FF"
            ></path>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="40"
            height="35"
            fill="#141446"
          >

            {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path d="M186.12 343.34c-9.65 9.65-9.65 25.29 0 34.94 9.65 9.65 25.29 9.65 34.94 0L378.24 221.1c19.29-19.29 50.57-19.29 69.86 0s19.29 50.57 0 69.86L293.95 445.1c19.27 19.29 50.53 19.31 69.82.04l.04-.04 119.25-119.24c38.59-38.59 38.59-101.14 0-139.72-38.59-38.59-101.15-38.59-139.72 0l-157.22 157.2zm244.53-104.8c-9.65-9.65-25.29-9.65-34.93 0l-157.2 157.18c-19.27 19.29-50.53 19.31-69.82.05l-.05-.05c-9.64-9.64-25.27-9.65-34.92-.01l-.01.01c-9.65 9.64-9.66 25.28-.02 34.93l.02.02c38.58 38.57 101.14 38.57 139.72 0l157.2-157.2c9.65-9.65 9.65-25.29.01-34.93zm-261.99 87.33l157.18-157.18c9.64-9.65 9.64-25.29 0-34.94-9.64-9.64-25.27-9.64-34.91 0L133.72 290.93c-19.28 19.29-50.56 19.3-69.85.01l-.01-.01c-19.29-19.28-19.31-50.54-.03-69.84l.03-.03L218.03 66.89c-19.28-19.29-50.55-19.3-69.85-.02l-.02.02L28.93 186.14c-38.58 38.59-38.58 101.14 0 139.72 38.6 38.59 101.13 38.59 139.73.01zm-87.33-52.4c9.64 9.64 25.27 9.64 34.91 0l157.21-157.19c19.28-19.29 50.55-19.3 69.84-.02l.02.02c9.65 9.65 25.29 9.65 34.93 0 9.65-9.65 9.65-25.29 0-34.93-38.59-38.59-101.13-38.59-139.72 0L81.33 238.54c-9.65 9.64-9.65 25.28-.01 34.93h.01z" />
          </svg>
        </a>
      )}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="24"
              viewBox="0 0 1 28"
              fill="none"
              className="my-1"
              data-src="/images/logo/cubejs-logo.svg"
            >
              <path
                d="M22.1337 7.03243L11.8594 1V5.17391L22.1336 11.1804L22.1337 7.03243Z"
                fill="#FF6492"
              ></path>
              <path
                d="M22.1336 11.1823L19.0513 13.0019L11.8574 8.78565L7.74692 11.1857L4.66406 9.49917L11.8593 5.17578L22.1336 11.1823Z"
                fill="#141446"
              ></path>
              <path
                d="M7.74692 11.1826L4.66406 9.49609V12.9988L7.74692 11.1826Z"
                fill="#A14474"
              ></path>
              <path
                d="M1.58105 18.9676L11.8572 13L22.1334 18.9676L11.8572 25L1.58105 18.9676Z"
                fill="#141446"
              ></path>
              <path
                d="M22.1336 14.8259L11.8574 8.71875V12.9998L22.1336 18.9674L22.1336 14.8259Z"
                fill="#FF6492"
              ></path>
              <path
                d="M4.66391 13V9.4973L11.8592 5.17391V1L1.58105 7.03243V18.9676L11.8573 13V8.71892L4.66391 13Z"
                fill="#7A77FF"
              ></path>
            </svg>
          </a>
        )}
 Development_dev
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
                    {/* <svg width="24" height="24" viewBox="0 0 24 24">
                            <g fill="currentColor" fillRule="nonzero">
                              <path
                                d="M10 14.5a2 2 0adfaf 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                                opacity="0.1"
                              ></path>
                              <path d="M8.062 adfafafafa4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
                            </g>
                          </svg> */}

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

HL-17-Access_management
            {/* <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'On Boardings'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('On Boardings')}
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
                        d="M4 6h16M4 12h16M4 18h16"
                      />

                    </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">
                    On Boardings
                  </span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li> */}

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

 Development_dev
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
                    {/* <svg width="24" height="24" viewBox="0 0 24 24">
                            <g fill="currentColor" fillRule="nonzero">
                              <path
                                d="M10 14.5a2 2 0adfaf 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                                opacity="0.1"
                              ></path>
                              <path d="M8.062 adfafafafa4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
                            </g>
                          </svg> */}

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
                    {/* <svg width="24" height="24" viewBox="0 0 24 24">
                            <g fill="currentColor" fillRule="nonzero">
                              <path
                                d="M10 14.5a2 2 0adfaf 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                                opacity="0.1"
                              ></path>
                              <path d="M8.062 adfafafafa4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
                            </g>
                          </svg> */}

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
 HL-17-Access_management
            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) || user?.role?.includes(USER_ROLES.ADMIN)) &&
            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) ||
              user?.role?.includes(USER_ROLES.ADMIN)) && (
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

            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) ||
              user?.role?.includes(USER_ROLES.ADMIN)) && (
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
                      <span className="text-[9px] font-bold  pl-1">
                        Leads Bank
                      </span>
                    </span>
                    <span className="flex ml-auto items-bottom">
                      <span className="flex ml-auto items-bottom text-xs mt-2"></span>
 Development_dev
                    </span>

                    <span className="text-[9px] font-bold  pl-1">Leads Bank</span>
                    <span className="text-[9px] font-bold  pl-1">
                      Leads Bank
                    </span>
                  </span>
                  <span className="flex ml-auto items-bottom">




                    <span className="flex ml-auto items-bottom text-xs mt-2"></span>


                  </span>
 HL-17-Access_management
                </span>
              </li>
            }
            )}

                </li>
              )}
Development_dev
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
 HL-17-Access_management
 Development_dev
                  <span className="text-[9px] font-bold  pl-1">Reports</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>
 HL-17-Access_management
            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) || user?.role?.includes(USER_ROLES.ADMIN)) &&
            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) ||
              user?.role?.includes(USER_ROLES.ADMIN)) && (
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

            {(user?.role?.includes(USER_ROLES.SALES_MANAGER) ||
              user?.role?.includes(USER_ROLES.ADMIN)) && (
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
 Development_dev
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
 HL-17-Access_management
                  <span className="flex ml-auto items-bottom">
                    <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                  </span>
                </span>
              </li>
 HEAD
            }
     )}
 d46e45ed7a94bd91dd1045de586bb81be8d0bef7

                </li>
              )}
 Development_dev
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
 HL-17-Access_management
                {/* <span className="flex items-center flex-col pt-[8px]">
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
  <span className="text-xs pl-1">Sales</span>
</span> */}
Development_dev
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
                  (viewable === 'Leave Approval'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Leave Approval')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" fill="#068e3a"></path> <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" fill="#068e3a"></path> <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" fill="#068e3a"></path> </svg>
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Leave</span>
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
                    {/* <svg width="24" height="24" viewBox="0 0 24 24">
                            <g fill="currentColor" fillRule="nonzero">
                              <path
                                d="M10 14.5a2 2 0adfaf 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                                opacity="0.1"
                              ></path>
                              <path d="M8.062 adfafafafa4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
                            </g>
                          </svg> */}

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
                  <span className="text-[9px] font-bold  pl-1">HR</span>
                </span>
              </span>
            </li>
            <li className="relative mt-1">
              <span
                className={
                  'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'User Management'
 HL-17-Access_management
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('User Management')}

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
                  <span className="text-[9px] font-bold  pl-1">Employees</span>
                </span>
                <span className="flex ml-auto items-bottom">
                  <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                </span>
              </span>
            </li>

            <li className="relative justify-center ">
              <span
                className={
                  'flex items-center justify-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                  (viewable === 'Time off'
                    ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                    : '')
                }
                onClick={() => setViewable('Time off')}
 Development_dev
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >


                <span className="flex items-center flex-col pt-[8px]">
                  <span style={{ color: '#058527' }}>
                    {/* <svg
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
                        d="M12 14s3-3.5 3-6.5S12 2 12 2s-3 3.5-3 5.5S12 14 12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14s-3 3.5-3 6.5h6c0-3-3-6.5-3-6.5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12h-2a10.01 10.01 0 00-3-7M3 12h2a10.01 10.01 0 013 7m-6-7v4m14-4v4"
                      />
                    </svg> */}
                    {/* <svg
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
                        d="M12 14s3-3.5 3-6.5S12 2 12 2s-3 3.5-3 5.5S12 14 12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14s-3 3.5-3 6.5h6c0-3-3-6.5-3-6.5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12h-2a10.01 10.01 0 00-3-7M3 12h2a10.01 10.01 0 013 7m-6-7v4m14-4v4"
                      />
                    </svg> */}
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
                      <path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                      <path d="M12 6v6l4 2" />
                    </svg>

 HL-17-Access_management
                    <UserGroupIcon className="h-5 w-5 " aria-hidden="true" />
                  </span>
                  <span className="text-[9px] font-bold  pl-1">Employees</span>

                  </span>
                  <span className="text-xs pl-1">Time off</span>
 Development_dev
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
 HL-17-Access_management
                    {/* <svg
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
                    </svg> */}
 Development_dev
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
 HL-17-Access_management


                  </span>
                  <span className="text-[9px] font-bold  pl-1">Pay Slips</span>

                  </span>
                  <span className="text-[9px] font-bold  pl-1">Bank</span>
 Development_dev
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
            {(user?.role?.includes(USER_ROLES.HR_MANAGER) ||
              user?.role?.includes(USER_ROLES.ADMIN)) && (
                <li className="relative mt-1">
                  <span
                    className={
                      'flex items-center text-sm py-1  overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded  rounded-tl-[30px] rounded-bl-[30px]  hover:text-blue-600 hover:bg-[#ecdbd1] transition duration-300 ease-in-out cursor-pointer ' +
                      (viewable === 'User Report'
                        ? 'bg-[#ecdbd1] w-100 rounded-tl-[30px] rounded-bl-[30px] '
                        : '')
                    }
                    onClick={() => setViewable('User Report')}
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
                        User Reports
                      </span>
                    </span>
                    <span className="flex ml-auto items-bottom">
                      <span className="flex ml-auto items-bottom text-xs mt-2"></span>
                    </span>
                  </span>
                </li>
              )}
          </ul>
        </>
      )}

      <Link
        className={
          'flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 mt-auto rounded hover:bg-gray-300 ' +
          (pgName === 'erpAccount' ? 'bg-gray-300' : '')
        }
      // to={routes.erpAccount()}
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
