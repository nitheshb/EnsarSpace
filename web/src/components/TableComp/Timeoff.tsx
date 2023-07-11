import React, { useEffect, useState } from "react";
import SUserSignup from "./addLearning/SUserSignup";

const LeaveForm = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClose = () => setIsOpen(false);
  const [empData, setEmpData] = useState({});
  const [employees, setEmployees] = useState([]);
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
    padding: "20px"
  };
  const openButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer"
  };
  return (
    <div style={containerStyle}> {" "}
      <SUserSignup open={isOpen}
        setOpen={handleOnClose}
        title="User" empData={empData}
      />{" "}
    </div>);
};
export default LeaveForm;
