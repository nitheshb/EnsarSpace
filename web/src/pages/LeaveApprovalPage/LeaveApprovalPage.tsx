import { useEffect, useMemo, useState } from "react";
import LeaveApproval from '../../components/A_LeaveModule/LeaveApproval/LeaveApproval';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLeaveRequests, steamUsersList } from 'src/context/dbQueryFirebase';
import { useAuth } from 'src/context/firebase-auth-context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const LeaveApprovalPage: React.FC = () => {
  const [leaveApprovals, setLeaveApprovals] = useState([]);
  const [selLeave, setSelLeave] = useState('all');
  const [leadsFetchedData, setLeadsFetchedData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    getLeadsDataFun()
  }, [])

  const getLeadsDataFun = async () => {
    const unsubscribe = steamUsersList(
      user.orgId,
      (querySnapshot) => {
        const usersListA = querySnapshot.docs.map((docSnapshot) =>
          docSnapshot.data()
        )
        setLeadsFetchedData(usersListA)
      },
      () => setLeadsFetchedData([])
    )
    return unsubscribe
  }

  useEffect(() => {
    const getAllRequests = async () => {
      try {
        const requests = await getLeaveRequests(user.orgId);
        return requests;
      } catch (error) {
        console.error("Error retrieving leave requests:", error);
        return [];
      }
    };

    getAllRequests()
      .then((requests) => {
        console.log("REQUEST DETAILS DATA");
        console.log(requests);
        setLeaveApprovals(requests);
      })
      .catch((error) => {
        console.error("Error setting leave approvals:", error);
      });
  }, []);

  const handleLeaveStatusChange = () => {
    setLeaveApprovals((prevApprovals) =>
      prevApprovals.filter((approval) => approval.isLeaveApproved !== 'Pending')
    );

    enqueueSnackbar('Leave status changed successfully!', { variant: 'success' });
  };

  const showOnlyLeave = (category) => {
    setSelLeave(category);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelLeave('all'); // Reset the selected leave category when a date is selected
  };

  const filteredLeaveApprovals = useMemo(() => {
    if (selectedDate) {
      return leaveApprovals.filter((approval) => {
        const fromDate = new Date(approval.fromDate).setHours(0, 0, 0, 0);
        const selectedDateValue = selectedDate.setHours(0, 0, 0, 0);
        return fromDate === selectedDateValue && (selectedEmployee === '' || approval.displayName === selectedEmployee);
      });
    } else {
      return leaveApprovals.filter((approval) => approval.displayName === selectedEmployee || selectedEmployee === '');
    }
  }, [leaveApprovals, selectedDate, selectedEmployee]);


  return (
    <div className="bg-white mt-10">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <section className="flex ml-auto mt-[18px] bg-white border-gray-100 py-4 md:py-7 px-4">
              {[
                { label: 'All', val: 'all' },
                { label: 'Sick', val: 'Sick Leave' },
                { label: 'Casual', val: 'Casual Leave' },
                { label: 'LOP', val: 'LOP' },
                { label: 'Pending', val: 'Pending' },
              ].map((dat, index) => (
                <a
                  key={index}
                  className={`rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 mr-4`}
                  onClick={() => showOnlyLeave(dat.val)}
                >
                  <div
                    className={`py-2 px-8 rounded-full hover:text-indigo-700 hover:bg-indigo-100 ${selLeave.includes(
                      dat.val
                    )
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600'
                      }`}
                  >
                    {dat.label}
                  </div>
                </a>
              ))}
              <div className="ml-auto flex items-center">
                <select
                  className="bg-white border border-gray-300 rounded-md py-2 px-4 text-sm"
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                  <option value="">All Employees</option>
                  {leadsFetchedData.map((employee) => (
                    <option key={employee.name} value={employee.name}>
                      {employee.name}
                    </option>
                  ))}
                </select>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  customInput={
                    <button className="ml-4 bg-white border border-gray-300 rounded-md py-2 px-4 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>

                    </button>
                  }
                />
              </div>
            </section>

            <ToastContainer position="top-right" />
            <div className="shadow overflow-hidden border-b border-gray-200 mx-auto p-4 mb-20">
              <table className="w-full table-auto">
                <thead className="bg-gray-50">
                  <tr >
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N.o.D</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Reason</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {filteredLeaveApprovals.length === 0 ? (
                    <tr>
                      <td className="px-6 py-4 text-center text-gray-500">
                        No leaves found
                      </td>
                    </tr>
                  ) : (
                    filteredLeaveApprovals.map((approval, index) => (
                      <LeaveApproval
                        key={index}
                        requestId={approval.requestId}
                        displayName={approval.displayName}
                        uid={approval.uid}
                        fromDate={approval.fromDate}
                        toDate={approval.toDate}
                        noOfDays={approval.noOfDays}
                        leaveType={approval.leaveType}
                        isLeaveApproved={approval.isLeaveApproved}
                        leaveReason={approval.leaveReason}
                        comment={approval.comment}
                        onLeaveStatusChange={handleLeaveStatusChange}
                        showActions={approval.isLeaveApproved === 'Pending'}
                      />
                    ))
                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveApprovalPage;
