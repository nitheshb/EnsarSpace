import React, { useState } from 'react';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack'; // Import the useSnackbar hook
import { approveLeave, rejectLeave } from '../../../../state/actions/';

interface LeaveApprovalProps {
  dateApplied: string;
  employeeName: string;
  fromDate: string;
  toDate: string;
  isLeaveApproved: boolean;
  onLeaveStatusChange: () => void;
}

const LeaveApproval: React.FC<LeaveApprovalProps> = ({
  dateApplied,
  employeeName,
  fromDate,
  toDate,
  isLeaveApproved,
  onLeaveStatusChange,
}) => {
  const [approved, setApproved] = useState(false);
  const { enqueueSnackbar } = useSnackbar(); // Use the enqueueSnackbar function from useSnackbar
  const dispatch = useDispatch();

  const handleApproval = (status: string) => {
    const leaveStatus = status === 'Accepted' ? 'Approved' : 'Rejected';
    const leaveDetails = {
      dateApplied,
      employeeName,
      fromDate,
      toDate,
      leaveDays: 0, // Update this value with the actual calculation of leave days
      isLeaveApproved: leaveStatus,
    };

    if (status === 'Accepted') {
      enqueueSnackbar('Leave Approved', { variant: 'success' }); // Show success snackbar
      setApproved(true);
      dispatch(approveLeave(leaveDetails));
    } else if (status === 'Rejected') {
      enqueueSnackbar('Leave Rejected', { variant: 'error' }); // Show error snackbar
      setApproved(true);
      dispatch(rejectLeave(leaveDetails));
    }

    onLeaveStatusChange();
  };

  if (approved) {
    return null; // Render nothing if leave is already approved
  }

  return (
    <tr>
      <td className="py-2 text-center border border-black">{format(new Date(dateApplied), 'dd-MM-yyyy')}</td>
      <td className="py-2 text-center border border-black">{employeeName}</td>
      <td className="py-2 text-center border border-black">{format(new Date(fromDate), 'dd-MM-yyyy')}</td>
      <td className="py-2 text-center border border-black">{format(new Date(toDate), 'dd-MM-yyyy')}</td>
      <td className="py-2 text-center border border-black">Leave Days</td>
      <td className="py-2 text-center border border-black">
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded mr-2"
            onClick={() => handleApproval('Accepted')}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => handleApproval('Rejected')}
          >
            Reject
          </button>
        </div>
      </td>
    </tr>
  );
};

export default LeaveApproval;
