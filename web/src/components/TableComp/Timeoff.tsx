import React, { useState } from "react";
import SUserSignup from "./addLearning/SUserSignup";

const LeaveForm = ({ submitLeaveRequest }) => {
  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [dateError, setDateError] = useState("");

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
    };
    submitLeaveRequest(leaveRequest);
    console.log("Leave Request:", leaveRequest);
    setLeaveType("");
    setFromDate("");
    setToDate("");
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

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <form onSubmit={handleSubmit} style={{ ...formStyle, textAlign: "right" }}>
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
      reason: "Vacation",
      comment: "Enjoying some time off",
    },
    {
      leaveType: "Sick Leave",
      fromDate: "2023-06-10",
      toDate: "2023-06-11",
      reason: "Illness",
      comment: "Recovering from a flu",
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

  const openForm = () => {
    setShowForm(true);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px",
  };

  const openButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {!showForm && (
        <button
          type="button"
          className={`tab-btn`}
          style={openButtonStyle}
          onClick={() => tabHandler("TIME_OFF")}
        >
          Time Off Form
        </button>
      )}
      {showForm && <LeaveForm submitLeaveRequest={submitLeaveRequest} />}

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