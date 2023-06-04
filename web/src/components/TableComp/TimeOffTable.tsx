// import { useEffect, useState } from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// const TimeoffTable = ({ editEmployeeFun }) => {
//   const [leadsFetchedData, setLeadsFetchedData] = useState([]);
//   const [filterData, setFilterData] = useState([]);
//   const [selDept, setSelDept] = useState('all');
//   const [editMode, setEditMode] = useState(false);
//   const [selectedData, setSelectedData] = useState(null);

//   useEffect(() => {
//     getLeadsDataFun();
//     setSelDept('all');
//   }, []);

//   useEffect(() => {
//     if (selDept === 'all') {
//       setFilterData(leadsFetchedData);
//     } else {
//       setFilterData(
//         leadsFetchedData.filter(
//           (userD) => userD.department === selDept || userD?.department?.includes(selDept)
//         )
//       );
//     }
//   }, [selDept, leadsFetchedData]);

//   const getLeadsDataFun = async () => {
//     const usersListA = [
//       {
//         leaveType: 'Sick Leave',
//         fromDate: '2023-05-01',
//         toDate: '2023-05-05',
//         numOfDays: 5,
//         reason: 'Feeling unwell',
//         status: 'Approved',
//         approvedBy: 'Vijay',
//       },
//       {
//         leaveType: 'Annual Leave',
//         fromDate: '2023-06-10',
//         toDate: '2023-06-15',
//         numOfDays: 6,
//         reason: 'Vacation',
//         status: 'Pending',
//         approvedBy: 'Venky',
//       },
//       {
//         leaveType: 'Sick Leave',
//         fromDate: '2023-06-10',
//         toDate: '2023-06-15',
//         numOfDays: 2,
//         reason: 'Feeling Unwell',
//         status: 'Pending',
//         approvedBy: 'Sekhar',
//       },
//       {
//         leaveType: 'Personal',
//         fromDate: '2023-06-10',
//         toDate: '2023-06-15',
//         numOfDays: 3,
//         reason: 'Feeling Unwell',
//         status: 'Pending',
//         approvedBy: 'Venkatesh',
//       },
//       {
//         leaveType: 'Personal',
//         fromDate: '2023-06-10',
//         toDate: '2023-06-15',
//         numOfDays: 1,
//         reason: 'Doctor appointment',
//         status: 'Approved',
//         approvedBy: 'Pavan',
//       },
//       // Additional data entries...
//     ];
//     setLeadsFetchedData(usersListA);
//   };

//   const handleEdit = (data) => {
//     setEditMode(true);
//     setSelectedData(data);
//   };

//   const handleSave = () => {
//     // Apply the changes to the data
//     const updatedData = leadsFetchedData.map((data) =>
//       data === selectedData ? { ...selectedData } : data
//     );
//     setLeadsFetchedData(updatedData);

//     setEditMode(false);
//     setSelectedData(null);
//   };

//   const handleCancel = () => {
//     setEditMode(false);
//     setSelectedData(null);
//   };

//   const handleDelete = (data) => {
//     const updatedData = leadsFetchedData.filter((entry) => entry !== data);
//     setLeadsFetchedData(updatedData);
//   };

//   const truncateString = (str, maxLength) => {
//     if (str.length <= maxLength) {
//       return str;
//     }
//     return str.substring(0, maxLength - 3) + '...';
//   };

//   const renderActions = (data) => {
//     return (
//       <div className="flex flex-wrap items-center justify-center">
//         {editMode && selectedData === data ? (
//           <>
//             <button
//               className="text-green-600 hover:text-green-900 mr-2 mb-2 sm:mb-0"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//             <button
//               className="text-gray-600 hover:text-gray-900"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//           </>
//         ) : (
//           <button
//             className="text-indigo-600 hover:text-indigo-900 mr-2 mb-2 sm:mb-0"
//             onClick={() => handleEdit(data)}
//           >
//             <FaEdit />
//           </button>
//         )}
//         <button
//           className="text-red-600 hover:text-red-900"
//           onClick={() => handleDelete(data)}
//         >
//           <FaTrash />
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//           <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       Leave Type
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       From
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       To
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       No Of Days
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       Reason
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       Status
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       Approved By
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
//                     >
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filterData.map((data, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {editMode && selectedData === data ? (
//                           <input
//                             className="border border-gray-300 rounded-md px-2 py-1"
//                             value={selectedData.leaveType}
//                             onChange={(e) =>
//                               setSelectedData({
//                                 ...selectedData,
//                                 leaveType: e.target.value,
//                               })
//                             }
//                           />
//                         ) : (
//                           truncateString(data.leaveType, 16)
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {editMode && selectedData === data ? (
//                           <input
//                             className="border border-gray-300 rounded-md px-2 py-1"
//                             type="date"
//                             value={selectedData.fromDate}
//                             onChange={(e) =>
//                               setSelectedData({
//                                 ...selectedData,
//                                 fromDate: e.target.value,
//                               })
//                             }
//                           />
//                         ) : (
//                           data.fromDate
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {editMode && selectedData === data ? (
//                           <input
//                             className="border border-gray-300 rounded-md px-2 py-1"
//                             type="date"
//                             value={selectedData.toDate}
//                             onChange={(e) =>
//                               setSelectedData({
//                                 ...selectedData,
//                                 toDate: e.target.value,
//                               })
//                             }
//                           />
//                         ) : (
//                           data.toDate
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {editMode && selectedData === data ? (
//                           <input
//                             className="border border-gray-300 rounded-md px-2 py-1"
//                             type="number"
//                             value={selectedData.numOfDays}
//                             onChange={(e) =>
//                               setSelectedData({
//                                 ...selectedData,
//                                 numOfDays: parseInt(e.target.value),
//                               })
//                             }
//                           />
//                         ) : (
//                           data.numOfDays
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {editMode && selectedData === data ? (
//                           <input
//                             className="border border-gray-300 rounded-md px-2 py-1"
//                             value={selectedData.reason}
//                             onChange={(e) =>
//                               setSelectedData({
//                                 ...selectedData,
//                                 reason: e.target.value,
//                               })
//                             }
//                           />
//                         ) : (
//                           truncateString(data.reason, 100)
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {editMode && selectedData === data ? (
//                           <select
//                             className="border border-gray-300 rounded-md px-2 py-1"
//                             value={selectedData.status}
//                             onChange={(e) =>
//                               setSelectedData({
//                                 ...selectedData,
//                                 status: e.target.value,
//                               })
//                             }
//                           >
//                             <option value="Approved">Approved</option>
//                             <option value="Pending">Pending</option>
//                             <option value="Rejected">Rejected</option>
//                           </select>
//                         ) : (
//                           data.status
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {editMode && selectedData === data ? (
//                           <input
//                             className="border border-gray-300 rounded-md px-2 py-1"
//                             value={selectedData.approvedBy}
//                             onChange={(e) =>
//                               setSelectedData({
//                                 ...selectedData,
//                                 approvedBy: e.target.value,
//                               })
//                             }
//                           />
//                         ) : (
//                           truncateString(data.approvedBy, 16)
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-center">
//                         {renderActions(data)}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TimeoffTable;

import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit, FaSave, FaTimes, FaTrash } from "react-icons/fa";

const TimeOffTableWrapper = styled.div`
  .timeoff-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    margin-bottom: 1rem;
    font-size: 0.875rem;

    th,
    td {
      padding: 0.75rem;
      text-align: center;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: middle;
    }

    th {
      font-weight: 600;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }

    textarea {
      resize: none;
    }

    .button-row button {
      margin-right: 0.5rem;
    }

    .form-wrapper {
      margin-top: 1rem;
    }

    .form-row {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      label {
        flex: 0 0 8rem;
        font-weight: 600;
      }

      input,
      textarea {
        flex: 1;
        border: 1px solid #e2e8f0;
        padding: 0.25rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
      }

      .error-message {
        color: red;
        margin-top: 0.5rem;
      }
    }

    .action-icons {
      display: flex;
      justify-content: center;

      button {
        margin: 0 0.5rem;
        background: transparent;
        border: none;
        cursor: pointer;
        color: #333;
        font-size: 1rem;

        &:hover {
          color: #777;
        }
      }
    }
  }
`;

const TimeOffTable = () => {
  const CHARACTER_LIMIT = {
    leaveType: 16,
    reason: 100,
    status: 16,
    approvedBy: 16,
  };
  const [timeOffData, setTimeOffData] = useState([
    {
      id: 1,
      leaveType: "Personal Leave",
      fromDate: "2023-05-01",
      toDate: "2023-05-05",
      totalDays: 2,
      reason: "Doctor Appointment",
      status: "Approved",
      approvedBy: "John",
    },
    {
      id: 2,
      leaveType: "Sick Leave",
      fromDate: "2023-05-01",
      toDate: "2023-05-05",
      totalDays: 2,
      reason: "Feeling unwell",
      status: "Approved",
      approvedBy: "John",
    },
    {
      id: 3,
      leaveType: "Casual Leave",
      fromDate: "2023-05-01",
      toDate: "2023-05-05",
      totalDays: 1,
      reason: "Feeling unwell",
      status: "Approved",
      approvedBy: "John",
    },
    {
      id: 4,
      leaveType: "vacation",
      fromDate: "2023-05-01",
      toDate: "2023-05-05",
      totalDays: 5,
      reason: "Goa Trip",
      status: "Approved",
      approvedBy: "John",
    },
    // Add more dummy data here
  ]);

  const [editedData, setEditedData] = useState({});
  const [error, setError] = useState(null);

  const handleEditTimeOff = (id) => {
    const timeOff = timeOffData.find((item) => item.id === id);
    setEditedData(timeOff);
  };

  const handleSaveTimeOff = (id) => {
    if (!validateFormData()) return;

    const updatedTimeOffData = timeOffData.map((item) =>
      item.id === id ? { ...item, ...editedData } : item
    );
    setTimeOffData(updatedTimeOffData);
    setEditedData({});
    setError(null);
  };

  const handleCancelEdit = () => {
    setEditedData({});
    setError(null);
  };

  const handleDeleteTimeOff = (id) => {
    const updatedTimeOffData = timeOffData.filter((item) => item.id !== id);
    setTimeOffData(updatedTimeOffData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateFormData = () => {
    const { leaveType, fromDate, toDate, totalDays, reason } = editedData;
    if (!leaveType || !fromDate || !toDate || !totalDays || !reason) {
      setError("All fields are required.");
      return false;
    }
    return true;
  };

  return (
    <TimeOffTableWrapper>
      <table className="timeoff-table">
        <thead>
          <tr>
            <th>Leave Type</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Total Days</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Approved By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {timeOffData.map((timeOff) => (
            <tr key={timeOff.id}>
              <td>
                {timeOff.id === editedData.id ? (
                  <input
                    type="text"
                    name="leaveType"
                    value={editedData.leaveType || ""}
                    onChange={handleChange}
                  />
                ) : (
                  timeOff.leaveType
                )}
              </td>
              <td>
                {timeOff.id === editedData.id ? (
                  <input
                    type="date"
                    name="fromDate"
                    value={editedData.fromDate || ""}
                    onChange={handleChange}
                  />
                ) : (
                  timeOff.fromDate
                )}
              </td>
              <td>
                {timeOff.id === editedData.id ? (
                  <input
                    type="date"
                    name="toDate"
                    value={editedData.toDate || ""}
                    onChange={handleChange}
                  />
                ) : (
                  timeOff.toDate
                )}
              </td>
              <td>
                {timeOff.id === editedData.id ? (
                  <input
                    type="number"
                    name="totalDays"
                    value={editedData.totalDays || ""}
                    onChange={handleChange}
                  />
                ) : (
                  timeOff.totalDays
                )}
              </td>
              <td>
                {timeOff.id === editedData.id ? (
                  <textarea
                    name="reason"
                    value={editedData.reason || ""}
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  timeOff.reason
                )}
              </td>
              <td>{timeOff.status}</td>
              <td>{timeOff.approvedBy}</td>
              <td>
                {timeOff.id === editedData.id ? (
                  <div className="action-icons">
                    <button
                      onClick={() => handleSaveTimeOff(timeOff.id)}
                      style={{ color: "#009900" }}
                    >
                      <FaSave />
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      style={{ color: "#CC0000" }}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEditTimeOff(timeOff.id)}
                    style={{ color: "#0077FF" }}
                  >
                    <FaEdit />
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTimeOff(timeOff.id)}
                  style={{ color: "#CC0000" }}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TimeOffTableWrapper>
  );
};

export default TimeOffTable;


// import React, { useState } from "react";
// import SUserSignup from "./addLearning/SUserSignup";
// const LeaveForm = ({ submitLeaveRequest }) => {
//   const [leaveType, setLeaveType] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [reason, setReason] = useState("");
//   const [comment, setComment] = useState("");
//   const [dateError, setDateError] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (new Date(fromDate) > new Date(toDate)) {
//       setDateError("To Date should not be earlier than From Date");
//       return;
//     }
//     const leaveRequest = {
//       leaveType,
//       fromDate,
//       toDate,
//       reason,
//       comment
//     };
//     submitLeaveRequest(leaveRequest);
//     console.log("Leave Request:", leaveRequest);
//     setLeaveType("");
//     setFromDate("");
//     setToDate("");
//     setReason("");
//     setComment("");
//     setDateError("");
//   };
//   const formStyle = {
//     maxWidth: "400px",
//     margin: "0 auto",
//     padding: "20px",
//     borderRadius: "5px",
//     backgroundColor: "#f4f4f4"
//   };
//   const formGroupStyle = {
//     marginBottom: "15px"
//   };
//   const labelStyle = {
//     display: "block",
//     marginBottom: "5px",
//     fontWeight: "bold"
//   };
//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc"
//   };
//   const textareaStyle = {
//     width: "100%",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     resize: "vertical"
//   };
//   const submitButtonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#4caf50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer"
//   };
//   const leaveTypes = ["Casual Leave", "Sick Leave", "LOP"];
//   return (
//     <div style={{ display: "flex", justifyContent: "flex-end" }}>
//              {" "}
//       <form
//         onSubmit={handleSubmit}
//         style={{ ...formStyle, textAlign: "right" }}
//       >
//                  {" "}
//         <div style={formGroupStyle}>
//                      {" "}
//           <label htmlFor="leaveType" style={labelStyle}>
//                           Leave Type:            {" "}
//           </label>
//                      {" "}
//           <select
//             id="leaveType"
//             value={leaveType}
//             onChange={(e) => setLeaveType(e.target.value)}
//             required
//             style={inputStyle}
//           >
//                           <option value="">Select Leave Type</option>
//              {" "}
//             {leaveTypes.map((type) => (
//               <option key={type} value={type}>
//                                   {type}               {" "}
//               </option>
//             ))}
//                        {" "}
//           </select>
//                    {" "}
//         </div>
//                  {" "}
//         <div style={formGroupStyle}>
//                      {" "}
//           <label htmlFor="fromDate" style={labelStyle}>
//                           From Date:            {" "}
//           </label>
//                      {" "}
//           <input
//             type="date"
//             id="fromDate"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             required
//             style={inputStyle}
//           />
//                    {" "}
//         </div>
//                  {" "}
//         <div style={formGroupStyle}>
//                      {" "}
//           <label htmlFor="toDate" style={labelStyle}>
//                           To Date:            {" "}
//           </label>
//                      {" "}
//           <input
//             type="date"
//             id="toDate"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             required
//             style={inputStyle}
//           />
//                    {" "}
//         </div>
//                   {dateError && <p style={{ color: "red" }}>{dateError}</p>}
//              {" "}
//         <div style={formGroupStyle}>
//                      {" "}
//           <label htmlFor="reason" style={labelStyle}>
//                           Reason:            {" "}
//           </label>
//                      {" "}
//           <input
//             type="text"
//             id="reason"
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             required
//             style={inputStyle}
//           />
//                    {" "}
//         </div>
//                  {" "}
//         <div style={formGroupStyle}>
//                      {" "}
//           <label htmlFor="comment" style={labelStyle}>
//                           Comment:            {" "}
//           </label>
//                      {" "}
//           <textarea
//             id="comment"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             required
//             style={textareaStyle}
//           />
//                    {" "}
//         </div>
//                  {" "}
//         <button type="submit" style={submitButtonStyle}>
//                       Submit          {" "}
//         </button>
//                {" "}
//       </form>
//            {" "}
//     </div>
//   );
// };
// const App = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const handleOnClose = () => setIsOpen(false);
//   const [empData, setEmpData] = useState({});
//   const tabHandler = (sel) => {
//     setEmpData(sel);
//     setIsOpen(true);
//   };
//   const submitLeaveRequest = (leaveRequest) => {
//     setLeaveRequests([...leaveRequests, leaveRequest]);
//   };
//   const openForm = () => {
//     setShowForm(true);
//   };
//   const containerStyle = {
//     display: "flex",
//     justifyContent: "flex-end",
//     padding: "20px"
//   };
//   const openButtonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#4caf50",
//     color: "white",
//     border: "none",
//     cursor: "pointer"
//   };
//   return (
//     <div style={containerStyle}>
//              {" "}
//       {!showForm && (
//         <button
//           type="button"
//           className={`tab-btn `}
//           style={openButtonStyle}
//           onClick={() => tabHandler("TIME_OFF")}
//         >
//                       Time Off Form          {" "}
//         </button>
//       )}
//              {" "}
//       {showForm && <LeaveForm submitLeaveRequest={submitLeaveRequest} />}

//       <SUserSignup
//         open={isOpen}
//         setOpen={handleOnClose}
//         title="User"
//         empData={empData}
//       />
//            {" "}
//     </div>
//   );
// };
// export default App;

