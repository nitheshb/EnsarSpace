import { useEffect, useState } from 'react'

import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { TabList } from '@mui/lab'
import { Box, Card, Grid, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'src/context/firebase-auth-context'
import {
  formatToPhone,
  getDifferenceInDays,
  getDifferenceInHours,
  getDifferenceInMinutes,
  prettyDateTime,
} from 'src/util/dateConverter'
import uniqueId from 'src/util/generatedId'

import LLeadsTableBody from '../LLeadsTableBody/LLeadsTableBody'

const torrowDate = new Date(
  +new Date().setHours(0, 0, 0, 0) + 86400000
).getTime()

const TodoListView = ({
  taskListA,
  setisImportLeadsOpen,
  selUserProfileF,
  leadsFetchedData,
  leadsTyper,
  leadByViewLayout,
  setLeadByViewLayout,
  searchKey,
  setSearchKey,
}) => {

  const { t } = useTranslation()
  const [value, setValue] = useState('new')
  const { user } = useAuth()
  const { orgId } = user
  const [tableData, setTableData] = useState([])
  const [tabHeadFieldsA, settabHeadFieldsA] = useState([])

  useEffect(() => {

    const tabHeadFieldsA1 =
      leadsTyper === 'inProgress'
        ? [
            { lab: 'In Progress', val: 'all' },
            { lab: 'New', val: 'new' },
            { lab: 'Follow Up', val: 'followup' },
            { lab: 'Visit Fixed', val: 'visitfixed' },
            { lab: 'Visit strokeLinejoin', val: 'visitdone' },
            { lab: 'Visit Cancel', val: 'visitcancel' },
            { lab: 'Negotiation', val: 'negotiation' },
            { lab: 'Reassign', val: 'reassign' },

            { lab: 'Un Assigned', val: 'unassigned' },

          ]
        : leadsTyper === 'archieveLeads'
        ? archieveTab
        : financeTab
    settabHeadFieldsA(tabHeadFieldsA1)

    leadsTyper === 'inProgress'
      ? setValue('new')
      : leadsTyper === 'archieveLeads'
      ? setValue('all')
      : setValue('booked')
  }, [])

  const handleDelete = async (ids) => {
    const { data } = await axios.post('/api/tableData1/delete', {
      ids,
    })
    setTableData(data)
  }

  const filterTable = tableData.filter((item) =>
    value !== '' ? item.role.toLowerCase() === value : item.role
  )

  const archieveTab = [
    { lab: 'Archieve', val: 'all' },
    { lab: 'Dead', val: 'dead' },
    { lab: 'Not Interested', val: 'notinterested' },
    { lab: 'Blocked', val: 'blockded' },
  ]
  const financeTab = [
    { lab: 'All', val: 'all' },
    { lab: 'In Review', val: 'inReview' },
    { lab: 'Cleared', val: 'cleared' },
    { lab: 'Uncleared', val: 'uncleared' },
  ]
  return (
    <Box pb={4}>
      <div className=" w-full">
        <div className="bg-white py-4 md:py-7 px-4 md:px-4 xl:px-6 rounded">
          <div className="sm:flex items-center justify-between">
            <div className="flex items-center">
              <a
                className={`rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800`}
                onClick={() => setSearchKey(['completed', 'pending'])}
              >
                <div
                  className={`py-2 px-8 rounded-full hover:text-indigo-700 hover:bg-indigo-100  ${
                    searchKey.includes('completed') &&
                    searchKey.includes('pending')
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600'
                  }`}
                >
                  All
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
                onClick={() => setSearchKey(['completed'])}
              >
                <div
                  className={`py-2 px-8 rounded-full hover:text-indigo-700 hover:bg-indigo-100  ${
                    searchKey.includes('completed') && searchKey.length === 1
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600'
                  }`}
                >
                  <p>Done</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
                onClick={() => setSearchKey(['pending'])}
              >
                <div
                  className={`py-2 px-8 rounded-full hover:text-indigo-700 hover:bg-indigo-100  ${
                    searchKey.includes('pending') && searchKey.length === 1
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600'
                  }`}
                >
                  <p>Todo</p>
                </div>
              </a>
              <a
                className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                href="javascript:void(0)"
                onClick={() => setSearchKey(['upcoming'])}
              >
                <div
                  className={`py-2 px-8 rounded-full hover:text-indigo-700 hover:bg-indigo-100  ${
                    searchKey.includes('upcoming') && searchKey.length === 1
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600'
                  }`}
                >
                  <p>Up Coming</p>
                </div>
              </a>
            </div>
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p className="text-sm font-medium leading-none text-white">
                Add Task
              </p>
            </button>
          </div>
          {taskListA.length === 0 && (
            <div className="py-8 px-8 mt-10 flex flex-col items-center bg-red-100 rounded">
              <div className="font-md font-medium text-xs mb-4 text-gray-800 items-center">
                <img
                  className="w-[180px] h-[180px] inline"
                  alt=""
                  src="../note-widget.svg"
                />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-gray-900">
                No Tasks Found
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                <span className="text-blue-600"> Add New Task</span>
              </time>
            </div>
          )}
          <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                {

                  taskListA
                    ?.filter(
                      (d) =>
                        searchKey.includes(d['sts']) ||
                        searchKey.includes('upcoming')
                    )
                    .map((dat, i) => (
                      <tr
                        tabIndex={0}
                        className="focus:outline-none h-16 border border-gray-100 rounded"
                        key={i}
                        onClick={() => {
                          console.log('macho 1', dat?.leadUser, dat)
                          const y = dat.leadUser
                          y.id = dat?.uid
                          console.log('macho 1', y)
                          selUserProfileF('User Profile', y)
                        }}
                      >
                        <td>
                          <div className="ml-5">
                            <div className="rounded-sm h-5 w-5 flex flex-shrink-0 justify-center items-center relative">

                              {i + 1}

                            </div>
                          </div>
                        </td>
                        <td className=" max-w-[300px]">
                          <div className="flex items-center ">
                            <div className="flex flex-col">
                              <p className="text-base max-w-[350px] overflow-ellipsis overflow-hidden font-semibold leading-none text-blue-800 mr-2 mt-2">
                                {dat?.notes}
                              </p>
                              <div className="flex flex-row">
                                <p className="text-[9px]   leading-none  pr-2 text-green-800  mt-[6px]  py-[4px]  rounded-full   mb-1 mr-2  ">
                                  {dat?.leadUser?.Project?.toUpperCase()}
                                </p>


                                <p className="text-[9px]  leading-none text-red-800  mt-[6px] font-bodyLato  py-[4px]  rounded-full   mb-1 mr-4  ">
                                  {dat?.leadUser?.Status?.toUpperCase()}
                                </p>
                                <p className="text-[9px]  leading-none text-gray-600  mt-[6px] font-bodyLato  py-[4px]  rounded-full    mb-1 mr-2  ">
                                  {dat?.sts?.toUpperCase()}
                                </p>
                                <p
                                  className={`text-[9px]  leading-none ${
                                    user?.uid == dat?.leadUser?.assignedTo
                                      ? 'text-green-800'
                                      : 'text-red-800 '
                                  }   mt-[6px] font-bodyLato  py-[4px]  rounded-full    mb-1 mr-2  `}
                                >
                                  {dat?.leadUser?.assignedToObj?.name?.toUpperCase()}
                                </p>
                              </div>
                            </div>

                          </div>
                        </td>
                        <td className="pl-24">

                        </td>
                        <td className="pl-5">
                          <div className="flex flex-col">
                            <p className="text-[12px] leading-none text-gray-600 ml-2 mt-2">
                              {formatToPhone(dat?.leadUser?.Mobile)}
                            </p>
                            <p className="text-[11px] leading-none text-gray-600 ml-2 mt-2">
                              {dat?.leadUser?.Name}
                            </p>

                            <p className="text-sm leading-none text-gray-600 ml-2">

                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex flex-row">


                            <button className="py-3 px-3 text-[13px] focus:outline-none leading-none text-red-700 rounded">
                              {Math.abs(
                                getDifferenceInMinutes(dat['schTime'], '')
                              ) > 60
                                ? Math.abs(
                                    getDifferenceInMinutes(dat['schTime'], '')
                                  ) > 1440
                                  ? `${getDifferenceInDays(
                                      dat['schTime'],
                                      ''
                                    )} Days `
                                  : `${getDifferenceInHours(
                                      dat['schTime'],
                                      ''
                                    )} Hours `
                                : `${getDifferenceInMinutes(
                                    dat['schTime'],
                                    ''
                                  )} Min`}
                              {getDifferenceInMinutes(dat['schTime'], '') < 0
                                ? 'Due'
                                : 'Left'}
                              <p className="text-[11px] leading-none text-gray-600 ml-2 mt-2">
                                {prettyDateTime(dat['schTime'])}
                              </p>
                            </button>
                          </div>
                        </td>

                      </tr>
                    ))
                }

                <tr className="h-3"></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>



    </Box>
  )
}

export default TodoListView

