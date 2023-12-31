import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user'
import searchReducer from "./search"
import searchDataReducer from "./searchData"
import isLeaveApprovedReducer from "./reducer"
const appReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  searchData: searchDataReducer,
  leaveApprove: isLeaveApprovedReducer,

})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    console.log('which one is first')
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer
