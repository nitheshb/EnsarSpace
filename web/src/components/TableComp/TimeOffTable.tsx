import React, { useEffect, useState } from "react";
import { getLeaveRequests, deleteLeaveRequest } from "src/context/dbQueryFirebase";
import { useAuth } from "src/context/firebase-auth-context";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

const TimeOffTable = () => {
  const [leaveApplied, setLeaveApplied] = useState([]);
  const [selLeave, setSelLeave] = useState('all');
  const [filteredLeaveApplied, setFilteredLeaveApplied] = useState([]);
  const [casualLeaveCount, setCasualLeaveCount] = useState(0);
  const [sickLeaveCount, setSickLeaveCount] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const fetchLeaveApplied = async () => {
      try {
        if (user && user.orgId) { // Add null check for user and orgId
          const applied = await getLeaveRequests(user.orgId);
          setLeaveApplied(applied);
          setFilteredLeaveApplied(applied);
          updateLeaveCounts(applied); // Update leave counts when data is fetched
        }
      } catch (error) {
        console.error('Error fetching applied leaves:', error);
      }
    };
    fetchLeaveApplied();
  }, [user]); // Update the dependency array to re-fetch when user changes

  useEffect(() => {
    updateLeaveCounts(filteredLeaveApplied); // Update leave counts when filtered data changes
  }, [filteredLeaveApplied]);

  const updateLeaveCounts = (leaveData) => {
    const casualCount = leaveData.filter(leave => leave.leaveType === 'Casual Leave').length;
    const sickCount = leaveData.filter(leave => leave.leaveType === 'Sick Leave').length;
    setCasualLeaveCount(casualCount);
    setSickLeaveCount(sickCount);
  };

  const showOnlyLeave = (category) => {
    if (category === 'all') {
      setFilteredLeaveApplied(leaveApplied);
    } else {
      const filteredLeaves = leaveApplied.filter(
        leave => leave.leaveType === category || leave.isLeaveApproved === category
      );
      setFilteredLeaveApplied(filteredLeaves);
    }
    setSelLeave(category);
  };

  const handleDelete = async (requestId) => {
    try {
      await deleteLeaveRequest(user.orgId, requestId);
      setLeaveApplied(prevRequests =>
        prevRequests ? prevRequests.filter(request => request.id !== requestId) : []
      );
      console.log('Leave request deleted successfully.');
    } catch (error) {
      console.error('Error deleting leave request:', error);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <section className="flex ml-auto mt-[18px]  bg-white  border-gray-100 py-4 md:py-7 px-4">
                {[
                  { label: 'All', val: 'all' },
                  { label: 'Sick', val: 'Sick Leave' },
                  { label: 'Casual', val: 'Casual Leave' },
                  { label: 'LOP', val: 'LOP' },
                  { label: 'Approved', val: 'Approved' },
                  { label: 'Rejected', val: 'Rejected' },
                  { label: 'Pending', val: 'Pending' },
                ].map((dat, index) => (
                  <a
                    key={index}
                    className={`rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800 mr-4`}
                    onClick={() => showOnlyLeave(dat.val)}
                  >
                    <div
                      className={`py-2 px-8 rounded-full hover:text-indigo-700 hover:bg-indigo-100  ${selLeave.includes(dat.val)
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600'
                        }`}
                    >
                      {dat.label}
                      {dat.val === 'Casual Leave' && casualLeaveCount > 0 && (
                        <sup className="rounded-full bg-indigo-500 text-white px-2 py-1 m-1 text-xs">
                          {casualLeaveCount}
                        </sup>
                      )}
                      {dat.val === 'Sick Leave' && sickLeaveCount > 0 && (
                        <sup className="rounded-full bg-indigo-500 text-white px-2 py-1 m-1 text-xs">
                          {sickLeaveCount}
                        </sup>
                      )}
                    </div>
                  </a>
                ))}
              </section>
              <div className="bg-white">
                <div className="shadow overflow-hidden border-b border-gray-200 mx-auto p-4 mb-10">
                  {filteredLeaveApplied.length > 0 ? (
                    <table className="w-full table-auto">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No of Days</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredLeaveApplied.map((leave) => (
                          <tr key={leave.requestId}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {leave.leaveType}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {leave.fromDate}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {leave.toDate}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {leave.noOfDays}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {leave.reason}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {leave.comment}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  leave.isLeaveApproved === "Approved"
                                    ? "bg-green-100 text-green-800"
                                    : leave.isLeaveApproved === "Rejected"
                                      ? "bg-red-100 text-red-800"
                                      : leave.isLeaveApproved === "Pending"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : ""
                                  }`}
                              >
                                {leave.isLeaveApproved}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900 mr-3"
                              >
                                <PencilIcon className="h-5 w-5" />
                              </a>
                              <a
                                href="#"
                                className="text-red-600 hover:text-red-900"
                                onClick={() => handleDelete(leave.requestId)}
                              >
                                <TrashIcon className="h-5 w-5" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-10">
                      No leave requests found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeOffTable;
