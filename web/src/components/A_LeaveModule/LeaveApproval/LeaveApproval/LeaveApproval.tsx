import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { approveLeave, rejectLeave } from '../../../../state/actions/'; // Import the action creators
import { updateLeaveRequest } from 'src/context/dbQueryFirebase';
import { useAuth } from 'src/context/firebase-auth-context';

interface LeaveApprovalProps {
  requestId: string;
  displayName: string;
  uid: string;
  fromDate: string;
  toDate: string;
  noOfDays: string,
  leaveReason: string;
  comment: string;
  leaveType: string;
  isLeaveApproved: boolean;
  showActions: boolean;
  onLeaveStatusChange: (requestId: string) => void;
}

const LeaveApproval: React.FC<LeaveApprovalProps> = ({
  requestId,
  displayName,
  uid,
  fromDate,
  toDate,
  noOfDays,
  leaveReason,
  comment,
  leaveType,
  showActions,
  isLeaveApproved,
  onLeaveStatusChange,
}) => {
  const [approved, setApproved] = useState(false);

  const { user } = useAuth();

  const dispatch = useDispatch();

  const handleApproval = async (status: string) => {
    const leaveStatus = status === 'Accepted' ? 'Approved' : 'Rejected';

    const leaveDetails = {
      requestId,
      displayName,
      uid,
      leaveType,
      fromDate,
      toDate,
      noOfDays,
      leaveReason,
      comment,
      isLeaveApproved: leaveStatus,
    };

    await updateLeaveRequest(user.orgId, leaveDetails.requestId, { isLeaveApproved: leaveStatus });

    if (status === 'Accepted') {
      toast.success('Leave Approved', { position: 'top-right' });
      setApproved(true);
      dispatch(approveLeave(leaveDetails));
    } else if (status === 'Rejected') {
      toast.error('Leave Rejected', { position: 'top-right' });
      setApproved(true);
      dispatch(rejectLeave(leaveDetails));
    }

    onLeaveStatusChange(leaveDetails.requestId);
  };

  if (approved) {
    return null;
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {displayName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {uid}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {format(new Date(fromDate), 'dd-MM-yyyy')}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {format(new Date(toDate), 'dd-MM-yyyy')}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {noOfDays}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {leaveType}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {leaveReason}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {comment}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {isLeaveApproved}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {showActions ? (
          <>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded-md text-sm mr-2"
              onClick={() => handleApproval(requestId)}
            >
              Approve
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white rounded-md text-sm"
              onClick={() => handleApproval(requestId)}
            >
              Reject
            </button>

          </>
        ) : (
          'N/A'
        )}
      </td>
    </tr>
  );
};

export default LeaveApproval;
