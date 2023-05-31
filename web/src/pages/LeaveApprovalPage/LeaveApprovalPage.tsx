import React, { useState } from 'react';
import LeaveApproval from '../../components/LeaveApproval/LeaveApproval';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format, addDays, subDays } from 'date-fns'; // Added import for date manipulation

const LeaveApprovalPage: React.FC = () => {
  const [leaveApprovals, setLeaveApprovals] = useState([
    {
      dateApplied: '2023-05-28',
      employeeName: 'Connor Miller',
      fromDate: '2023-05-30',
      toDate: '2023-06-01',
      isLeaveApproved: false,
    },
    {
      dateApplied: '2023-05-28',
      employeeName: 'Elizabeth Sharp',
      fromDate: '2023-05-29',
      toDate: '2023-06-02',
      isLeaveApproved: false,
    },
    {
      dateApplied: '2023-05-30',
      employeeName: 'Anthony King',
      fromDate: '2023-05-31',
      toDate: '2023-06-06',
      isLeaveApproved: false,
    },
    {
      dateApplied: '2023-05-31',
      employeeName: 'Victoria	McDonald',
      fromDate: '2023-06-02',
      toDate: '2023-06-06',
      isLeaveApproved: false,
    },
    {
      dateApplied: '2023-06-01',
      employeeName: 'Karen	Bond',
      fromDate: '2023-06-05',
      toDate: '2023-06-15',
      isLeaveApproved: false,
    },
    {
      dateApplied: '2023-05-31',
      employeeName: 'Austin	Lawrence',
      fromDate: '2023-05-31',
      toDate: '2023-06-03',
      isLeaveApproved: false,
    },
    {
      dateApplied: '2023-06-01',
      employeeName: 'Justin	Johnson',
      fromDate: '2023-06-02',
      toDate: '2023-06-08',
      isLeaveApproved: false,
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleLeaveStatusChange = () => {
    setLeaveApprovals((prevApprovals) =>
      prevApprovals.filter((approval) => !approval.isLeaveApproved)
    );
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  // Filter leave approvals based on selected date
  const filteredLeaveApprovals = leaveApprovals.filter(
    (approval) =>
    format(new Date(approval.dateApplied), 'dd-MM-yyyy') ===
    format(selectedDate, 'dd-MM-yyyy')
  );

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
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-center border border-black">Date Applied</th>
              <th className="py-2 px-4 text-center border border-black">Employee Name</th>
              <th className="py-2 px-4 text-center border border-black">From Date</th>
              <th className="py-2 px-4 text-center border border-black">To Date</th>
              <th className="py-2 px-4 text-center border border-black">No. of Days</th>
              <th className="py-2 px-4 text-center border border-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaveApprovals.map((approval, index) => (
              <LeaveApproval
                key={index}
                employeeName={approval.employeeName}
                fromDate={approval.fromDate}
                toDate={approval.toDate}
                dateApplied={approval.dateApplied}
                isLeaveApproved={approval.isLeaveApproved}
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
