import { combineReducers } from 'redux';
import { APPROVE_LEAVE, REJECT_LEAVE } from '../actions/index';

// Leave Status Reducer
const isLeaveApprovedReducer = (state = false, action) => {
  switch (action.type) {
    case APPROVE_LEAVE:
      return true;
    case REJECT_LEAVE:
      return true;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isLeaveApproved: isLeaveApprovedReducer,
});

export default rootReducer;
