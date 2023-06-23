import React, { useEffect, useState } from "react";
import { showLeaveRequests } from "src/context/dbQueryFirebase";
import { useAuth } from "src/context/firebase-auth-context";

const TimeOffTable = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const requests = await showLeaveRequests(user.orgId);
        setLeaveRequests(requests); // Update the state with the retrieved data
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };
    console.log("PREVIOUS LEAVES DETAILS DATA");
    fetchLeaveRequests();
  }, []);

  return (
    <>
      <div className="bg-white mt-2">
        <h1 className="p-2 m-2 text-xl font-bold">Past Leaves :</h1>
        <div className="mx-auto p-4 mb-20">
          {leaveRequests.length > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-center border border-black">Leave Type</th>
                  <th className="px-4 py-2 text-center border border-black">From Date</th>
                  <th className="px-4 py-2 text-center border border-black">To Date</th>
                  <th className="px-4 py-2 text-center border border-black">No of Days</th>
                  <th className="px-4 py-2 text-center border border-black">Reason</th>
                  <th className="px-4 py-2 text-center border border-black">Comment</th>
                  <th className="px-4 py-2 text-center border border-black">Approved By</th>
                  <th className="px-4 py-2 text-center border border-black ">Status</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((leaveRequest, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center border border-black">{leaveRequest.leaveType}</td>
                    <td className="px-4 py-2 text-center border border-black">{leaveRequest.fromDate}</td>
                    <td className="px-4 py-2 text-center border border-black">{leaveRequest.toDate}</td>
                    <td className="px-4 py-2 text-center border border-black">{leaveRequest.noOfDays}</td>
                    <td className="px-4 py-2 text-center border border-black">{leaveRequest.leaveReason}</td>
                    <td className="px-4 py-2 text-center border border-black">{leaveRequest.comment}</td>
                    <td className="px-4 py-2 text-center border border-black">{leaveRequest.employeeName}</td>
                    <td className={`px-4 py-2 text-center border border-black ${leaveRequest.isLeaveApproved === 'Approved' ? 'text-green-500' : leaveRequest.isLeaveApproved === 'Rejected' ? 'text-red-500' : ''}`}>
                      {leaveRequest.isLeaveApproved}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No past leaves found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TimeOffTable;
