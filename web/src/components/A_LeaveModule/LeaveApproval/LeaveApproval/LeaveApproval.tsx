import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { approveLeave, rejectLeave } from '../../../../state/actions/'; // Import the action creators
import { storeLeaveDetails } from 'src/context/dbQueryFirebase';

interface LeaveApprovalProps {
  dateApplied: string; // Added dateApplied prop
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

  // Calculate the number of leave days
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const diffTime = Math.abs(to.getTime() - from.getTime());
  const leaveDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const dispatch = useDispatch();

  const handleApproval = async (status: string) => {
    const leaveStatus = status === 'Accepted' ? 'Approved' : 'Rejected';

    const leaveDetails = {
      dateApplied,
      employeeName,
      fromDate,
      toDate,
      leaveDays,
      isLeaveApproved: leaveStatus,
    };

    await storeLeaveDetails(leaveDetails);

    if (status === 'Accepted') {
      toast.success('Leave Approved', { position: 'top-right' });
      setApproved(true);
      dispatch(approveLeave(leaveDetails)); // Pass the leaveDetails as payload
    } else if (status === 'Rejected') {
      toast.error('Leave Rejected', { position: 'top-right' });
      setApproved(true);
      dispatch(rejectLeave(leaveDetails)); // Pass the leaveDetails as payload
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
      <td className="py-2 text-center border border-black">{leaveDays}</td>
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
