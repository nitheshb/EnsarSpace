import React, { useEffect, useState } from 'react';
import LeaveApproval from '../../components/A_LeaveModule/LeaveApproval/LeaveApproval';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format, addDays, subDays } from 'date-fns';
import { getLeaveRequests } from 'src/context/dbQueryFirebase';
import { useAuth } from 'src/context/firebase-auth-context';

const LeaveApprovalPage: React.FC = () => {
  const [leaveApprovals, setLeaveApprovals] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useAuth();

  useEffect(() => {
    const getAllRequests = async () => {
      try {
        const requests = await getLeaveRequests(user.orgId);
        return requests;
      } catch (error) {
        console.error("Error retrieving leave requests:", error);
        return [];
      }
    };

    getAllRequests()
      .then((requests) => {
        console.log("REQUEST DETAILS DATA");
        console.log(requests);
        setLeaveApprovals(requests);
      })
      .catch((error) => {
        console.error("Error setting leave approvals:", error);
      });
  }, []);

  const handleLeaveStatusChange = () => {
    setLeaveApprovals(prevApprovals =>
      prevApprovals.filter(approval => !approval.isLeaveApproved)
    );
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const filteredLeaveApprovals = leaveApprovals.filter((approval) => {
    const isLeavePending = approval.isLeaveApproved === 'Pending';
    const isSameFromDate = format(new Date(approval.fromDate), 'dd-MM-yyyy') === format(selectedDate, 'dd-MM-yyyy');
    return isLeavePending && isSameFromDate;
  });

  return (
    <div className="bg-white mt-10">
      <ToastContainer position="top-right" />
      <div className="mx-auto p-4 mb-20">
        <div className="flex justify-center mb-4">
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
            onClick={() => handleDateChange(subDays(selectedDate, 1))}
          >
            Yesterday
          </button>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
            onClick={() => handleDateChange(new Date())}
          >
            Today
          </button>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
            onClick={() => handleDateChange(addDays(selectedDate, 1))}
          >
            Tomorrow
          </button>
          <input
            type="date"
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={e => handleDateChange(new Date(e.target.value))}
          />
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No of Days</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Reason</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaveApprovals.map((approval, index) => (
              <LeaveApproval
                key={index}
                requestId={approval.requestId}
                displayName={approval.displayName}
                uid={approval.uid}
                fromDate={approval.fromDate}
                toDate={approval.toDate}
                noOfDays={approval.noOfDays}
                leaveType={approval.leaveType}
                isLeaveApproved={approval.isLeaveApproved}
                leaveReason={approval.leaveReason}
                comment={approval.comment}
                onLeaveStatusChange={handleLeaveStatusChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveApprovalPage;
