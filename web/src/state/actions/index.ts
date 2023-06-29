// Action Types
export const APPROVE_LEAVE = 'APPROVE_LEAVE';
export const REJECT_LEAVE = 'REJECT_LEAVE';

// Action Creators
export const approveLeave = (leaveDetails) => {
  return {
    type: APPROVE_LEAVE,
    payload: {
      ...leaveDetails,
      isLeaveApproved: true,
    },
  };
};

export const rejectLeave = (leaveDetails) => {
  return {
    type: REJECT_LEAVE,
    payload: {
      ...leaveDetails,
      isLeaveApproved: false,
    },
  };
};
