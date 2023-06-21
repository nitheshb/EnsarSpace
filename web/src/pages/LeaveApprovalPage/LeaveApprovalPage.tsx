import React, { useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import LeaveApproval from '../../components/A_LeaveModule/LeaveApproval/LeaveApproval/LeaveApproval';
import { format, addDays, subDays } from 'date-fns';

const LeaveApprovalPage: React.FC = () => {
  const [leaveApprovals, setLeaveApprovals] = useState([
    // Leave approvals data
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const { enqueueSnackbar } = useSnackbar();

  const handleLeaveStatusChange = () => {
    setLeaveApprovals(prevApprovals =>
      prevApprovals.filter(approval => !approval.isLeaveApproved)
    );

    enqueueSnackbar('Leave status changed successfully!', { variant: 'success' });
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const filteredLeaveApprovals = leaveApprovals.filter(
    approval =>
      format(new Date(approval.dateApplied), 'dd-MM-yyyy') ===
      format(selectedDate, 'dd-MM-yyyy')
  );

  return (
    <div className="bg-white mt-10">
      <SnackbarProvider>
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
      </SnackbarProvider>
    </div>
  );
};

export default LeaveApprovalPage;
