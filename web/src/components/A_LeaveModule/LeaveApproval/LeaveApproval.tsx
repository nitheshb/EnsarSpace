import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { approveLeave, rejectLeave } from "../../../state/actions/index"; // Import the action creators
import { storeLeaveDetails } from 'src/context/dbQueryFirebase';
import { useAuth } from 'src/context/firebase-auth-context';
import { v4 as uuidv4 } from 'uuid';
import differenceInCalendarDays from 'date-fns/esm/differenceInCalendarDays';

interface LeaveApprovalProps {
  requestId:string;
  employeeName: string;
  employeeId: string;
  fromDate: string;
  toDate: string;
  noOfDays: string,
  leaveReason: string;
  comment: string;
  leaveType: string;
  isLeaveApproved: boolean;
  onLeaveStatusChange: (requestId: string) => void;
}

const LeaveApproval: React.FC<LeaveApprovalProps> = ({
  requestId,
  employeeName,
  employeeId,
  fromDate,
  toDate,
  noOfDays,
  leaveReason,
  comment,
  leaveType,
  isLeaveApproved,
  onLeaveStatusChange,
}) => {
  const [approved, setApproved] = useState(false);

  const {user} = useAuth();

  const dispatch = useDispatch();

  const handleApproval = async (status: string) => {
    const leaveStatus = status === 'Accepted' ? 'Approved' : 'Rejected';

    const leaveDetails = {
      requestId: uuidv4(),
      employeeName,
      employeeId,
      leaveType,
      fromDate,
      toDate,
      noOfDays,
      leaveReason,
      comment,
      isLeaveApproved: leaveStatus,
    };

    await storeLeaveDetails(user.orgId, leaveDetails);

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

  const calculateNumberOfDays = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const numberOfDays = differenceInCalendarDays(endDate, startDate) + 1;
    return numberOfDays;
  };

  if (approved) {
    return null;
  }

  return (
    <tr>
      <td className="py-2 text-center border border-black">{employeeName}</td>
      <td className="py-2 text-center border border-black">{employeeId}</td>
      <td className="py-2 text-center border border-black">{format(new Date(fromDate), 'dd-MM-yyyy')}</td>
      <td className="py-2 text-center border border-black">{format(new Date(toDate), 'dd-MM-yyyy')}</td>
      <td className="py-2 text-center border border-black">{noOfDays}</td>
      <td className="py-2 text-center border border-black">{leaveType}</td>
      <td className="py-2 text-center border border-black">{leaveReason}</td>
      <td className="py-2 text-center border border-black">{comment}</td>
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
