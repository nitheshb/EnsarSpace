
import React, { useState } from "react";
import SUserSignup from "./addLearning/SUserSignup";
import { FaEdit, FaSave, FaTimes, FaTrash } from "react-icons/fa";
const LeaveForm = ({ submitLeaveRequest }) => {
  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [dateError, setDateError] = useState("");
  const [approvedBy, setapprovedBy] = useState("");
  const [status, setstatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(fromDate) > new Date(toDate)) {
      setDateError("To Date should not be earlier than From Date");
      return;
    }
    const leaveRequest = {
      leaveType,
      fromDate,
      toDate,
      reason,
      comment,
      approvedBy,
      status,
    };
    submitLeaveRequest(leaveRequest);
    console.log("Leave Request:", leaveRequest);
    setLeaveType("");
    setFromDate("");
    setToDate("");
    setNoOf("");
    setReason("");
    setComment("");
    setDateError("");
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: "#f4f4f4",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const textareaStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "vertical",
  };

  const submitButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const leaveTypes = ["Casual Leave", "Sick Leave", "LOP"];

  function setNoOfDays(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div style={formStyle}>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="leaveType" style={labelStyle}>
            Leave Type:
          </label>
          <select
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">Select Leave Type</option>
            {leaveTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="fromDate" style={labelStyle}>
            From Date:
          </label>
          <input
            type="date"
            id="fromDate"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="toDate" style={labelStyle}>
            To Date:
          </label>
          <input
            type="date"
            id="toDate"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
            style={inputStyle}
          />
          <div style={formGroupStyle}>
          <label htmlFor="noOfDays" style={labelStyle}>
            No Of Days:
          </label>
          <input
            type="date"
            id="noOfDays"
            value={reason}
            onChange={(e) => setNoOfDays(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        </div>
        {dateError && <p style={{ color: "red" }}>{dateError}</p>}
        <div style={formGroupStyle}>
          <label htmlFor="reason" style={labelStyle}>
            Reason:
          </label>
          <input
            type="text"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="comment" style={labelStyle}>
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            style={textareaStyle}
          />
        </div>
        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

const App = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      leaveType: "Casual Leave",
      fromDate: "2023-06-05",
      toDate: "2023-06-07",
      noofdays: "2",
      reason: "Vacation",
      comment: "Enjoying some time off",
      approvedBy: "nithesh",
      status: "Approved",
    },
    {
      leaveType: "Sick Leave",
      fromDate: "2023-06-10",
      toDate: "2023-06-11",
      noofdays: "1",
      reason: "Illness",
      comment: "Recovering from a flu",
      approvedBy: "nithesh",
      status: "Pending",
      },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClose = () => setIsOpen(false);
  const [empData, setEmpData] = useState({});

  const tabHandler = (sel) => {
    setEmpData(sel);
    setIsOpen(true);
  };

  const submitLeaveRequest = (leaveRequest) => {
    setLeaveRequests([...leaveRequests, leaveRequest]);
  };

  const handleDelete = (index) => {
    const updatedLeaveRequests = leaveRequests.filter((_, i) => i !== index);
    setLeaveRequests(updatedLeaveRequests);
  };

  const containerStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const openButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "flex-end",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    color: "#333",
    padding: "10px",
    textAlign: "center",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const actionsStyle = {
    display: "flex",
    justifyContent: "",
    alignItems: "center",
  };

  const editButtonStyle = {
    padding: "5px 10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const deleteButtonStyle = {
    padding: "5px 10px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  };

  return (

    <div style={containerStyle}>
       <button
        type="button"
        className={`tab-btn`}
        style={openButtonStyle}
        onClick={() => tabHandler("TIME_OFF")}
      >
        Time Off Form
      </button>

      {showForm && <LeaveForm submitLeaveRequest={submitLeaveRequest} />}

      {leaveRequests.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Leave Type</th>
              <th style={thStyle}>From Date</th>
              <th style={thStyle}>To Date</th>
              <th style={thStyle}>No Of Days</th>
              <th style={thStyle}>Reason</th>
              <th style={thStyle}>Comment</th>
              <th style={thStyle}>Approved By</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>

            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leaveRequest, index) => (
              <tr key={index} style=
              {{textAlign:'center'}}>
                <td style={tdStyle}>{leaveRequest.leaveType}</td>
                <td style={tdStyle}>{leaveRequest.fromDate}</td>
                <td style={tdStyle}>{leaveRequest.toDate}</td>
                <td style={tdStyle}>{leaveRequest.noofdays}</td>
                <td style={tdStyle}>{leaveRequest.reason}</td>
                <td style={tdStyle}>{leaveRequest.comment}</td>
                <td style={tdStyle}>{leaveRequest.approvedBy}</td>
                <td style={tdStyle}>{leaveRequest.status}</td>
                <td style={tdStyle}>
                  <div style={actionsStyle} className="ml-10">
                    <button
                      style={editButtonStyle}
                      onClick={() => tabHandler("TIME_OFF")}
                    >
                      <FaEdit />
                    </button>
                    <button
                      style={deleteButtonStyle}
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <SUserSignup
        open={isOpen}
        setOpen={handleOnClose}
        title="User"
        empData={empData}
      />
    </div>
  );
};

export default App;



function setNoOf(arg0: string) {
  throw new Error("Function not implemented.");
}

