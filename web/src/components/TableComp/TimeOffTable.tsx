import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TimeoffTable = ({ editEmployeeFun }) => {
  const [leadsFetchedData, setLeadsFetchedData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selDept, setSelDept] = useState('all');
  const [editMode, setEditMode] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    getLeadsDataFun();
    setSelDept('all');
  }, []);

  useEffect(() => {
    if (selDept === 'all') {
      setFilterData(leadsFetchedData);
    } else {
      setFilterData(
        leadsFetchedData.filter(
          (userD) => userD.department === selDept || userD?.department?.includes(selDept)
        )
      );
    }
  }, [selDept, leadsFetchedData]);

  const getLeadsDataFun = async () => {
    const usersListA = [
      {
        leaveType: 'Sick Leave',
        fromDate: '2023-05-01',
        toDate: '2023-05-05',
        numOfDays: 5,
        reason: 'Feeling unwell',
        status: 'Approved',
        approvedBy: 'Vijay',
      },
      {
        leaveType: 'Annual Leave',
        fromDate: '2023-06-10',
        toDate: '2023-06-15',
        numOfDays: 6,
        reason: 'Vacation',
        status: 'Pending',
        approvedBy: 'Venky',
      },
      {
        leaveType: 'Sick Leave',
        fromDate: '2023-06-10',
        toDate: '2023-06-15',
        numOfDays: 2,
        reason: 'Feeling Unwell',
        status: 'Pending',
        approvedBy: 'Sekhar',
      },
      {
        leaveType: 'Personal',
        fromDate: '2023-06-10',
        toDate: '2023-06-15',
        numOfDays: 3,
        reason: 'Feeling Unwell',
        status: 'Pending',
        approvedBy: 'Venkatesh',
      },
      {
        leaveType: 'Personal',
        fromDate: '2023-06-10',
        toDate: '2023-06-15',
        numOfDays: 1,
        reason: 'Doctor appointment',
        status: 'Approved',
        approvedBy: 'Pavan',
      },
      // Additional data entries...
    ];
    setLeadsFetchedData(usersListA);
  };

  const handleEdit = (data) => {
    setEditMode(true);
    setSelectedData(data);
  };

  const handleSave = () => {
    // Apply the changes to the data
    const updatedData = leadsFetchedData.map((data) =>
      data === selectedData ? { ...selectedData } : data
    );
    setLeadsFetchedData(updatedData);

    setEditMode(false);
    setSelectedData(null);
  };

  const handleCancel = () => {
    setEditMode(false);
    setSelectedData(null);
  };

  const handleDelete = (data) => {
    const updatedData = leadsFetchedData.filter((entry) => entry !== data);
    setLeadsFetchedData(updatedData);
  };

  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.substring(0, maxLength - 3) + '...';
  };

  const renderActions = (data) => {
    return (
      <div className="flex flex-wrap items-center justify-center">
        {editMode && selectedData === data ? (
          <>
            <button
              className="text-green-600 hover:text-green-900 mr-2 mb-2 sm:mb-0"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="text-indigo-600 hover:text-indigo-900 mr-2 mb-2 sm:mb-0"
            onClick={() => handleEdit(data)}
          >
            <FaEdit />
          </button>
        )}
        <button
          className="text-red-600 hover:text-red-900"
          onClick={() => handleDelete(data)}
        >
          <FaTrash />
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      Leave Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      To
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      No Of Days
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      Reason
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      Approved By
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filterData.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {editMode && selectedData === data ? (
                          <input
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selectedData.leaveType}
                            onChange={(e) =>
                              setSelectedData({
                                ...selectedData,
                                leaveType: e.target.value,
                              })
                            }
                          />
                        ) : (
                          truncateString(data.leaveType, 16)
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {editMode && selectedData === data ? (
                          <input
                            className="border border-gray-300 rounded-md px-2 py-1"
                            type="date"
                            value={selectedData.fromDate}
                            onChange={(e) =>
                              setSelectedData({
                                ...selectedData,
                                fromDate: e.target.value,
                              })
                            }
                          />
                        ) : (
                          data.fromDate
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {editMode && selectedData === data ? (
                          <input
                            className="border border-gray-300 rounded-md px-2 py-1"
                            type="date"
                            value={selectedData.toDate}
                            onChange={(e) =>
                              setSelectedData({
                                ...selectedData,
                                toDate: e.target.value,
                              })
                            }
                          />
                        ) : (
                          data.toDate
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {editMode && selectedData === data ? (
                          <input
                            className="border border-gray-300 rounded-md px-2 py-1"
                            type="number"
                            value={selectedData.numOfDays}
                            onChange={(e) =>
                              setSelectedData({
                                ...selectedData,
                                numOfDays: parseInt(e.target.value),
                              })
                            }
                          />
                        ) : (
                          data.numOfDays
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {editMode && selectedData === data ? (
                          <input
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selectedData.reason}
                            onChange={(e) =>
                              setSelectedData({
                                ...selectedData,
                                reason: e.target.value,
                              })
                            }
                          />
                        ) : (
                          truncateString(data.reason, 100)
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {editMode && selectedData === data ? (
                          <select
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selectedData.status}
                            onChange={(e) =>
                              setSelectedData({
                                ...selectedData,
                                status: e.target.value,
                              })
                            }
                          >
                            <option value="Approved">Approved</option>
                            <option value="Pending">Pending</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        ) : (
                          data.status
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {editMode && selectedData === data ? (
                          <input
                            className="border border-gray-300 rounded-md px-2 py-1"
                            value={selectedData.approvedBy}
                            onChange={(e) =>
                              setSelectedData({
                                ...selectedData,
                                approvedBy: e.target.value,
                              })
                            }
                          />
                        ) : (
                          truncateString(data.approvedBy, 16)
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {renderActions(data)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeoffTable;
