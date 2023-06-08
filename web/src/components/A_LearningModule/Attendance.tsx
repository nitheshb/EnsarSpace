import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, Table, TableBody, TextField, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';




const AttendancePage = () => {
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);


  const [startMonth, setStartMonth] = useState('');
  const [endMonth, setEndMonth] = useState('');

  const [editMode, setEditMode] = useState(null);
  const [editedCheckIn, setEditedCheckIn] = useState('');
  const [editedCheckOut, setEditedCheckOut] = useState('');



  const handleEdit = (id) => {
    const recordToEdit = attendanceData.find((record) => record.id === id);
    setEditMode(id);
    setEditedCheckIn(recordToEdit.checkIn);
    setEditedCheckOut(recordToEdit.checkOut);
  };

  const handleSave = (id, editedCheckIn, editedCheckOut) => {
    const updatedData = attendanceData.map((record) => {
      if (record.id === id) {
        const totalHours = calculateTotalHours(editedCheckIn, editedCheckOut);
        return {
          ...record,
          checkIn: editedCheckIn,
          checkOut: editedCheckOut,
          totalHours: totalHours,
        };
      }
      return record;
    });

    setAttendanceData(updatedData);
    setEditMode(null);
  };




  // Load attendance data from localStorage on component mount
  useEffect(() => {
    const storedAttendanceData = localStorage.getItem('attendanceData');
    if (storedAttendanceData) {
      setAttendanceData(JSON.parse(storedAttendanceData));
    }
  }, []);



  // Save attendance data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
  }, [attendanceData]);

  const handleCheckIn = () => {
    const currentTime = new Date().toLocaleTimeString();
    setCheckInTime(currentTime);
  };

  const handleCheckOut = () => {
    const currentTime = new Date().toLocaleTimeString();
    setCheckOutTime(currentTime);
  };

  const handleSubmit = () => {
    const totalHours = calculateTotalHours(checkInTime, checkOutTime);

    const attendanceRecord = {
      id: new Date().getTime(),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      checkIn: checkInTime,
      checkOut: checkOutTime,
      totalHours: totalHours,
    };

    setAttendanceData((prevData) => [...prevData, attendanceRecord]);
    setCheckInTime('');
    setCheckOutTime('');
  };

  const handleDelete = (id) => {
    setAttendanceData((prevData) => prevData.filter((record) => record.id !== id));
  };

  const calculateTotalHours = (checkIn, checkOut) => {
    const checkInTime = new Date(`2000/01/01 ${checkIn}`);
    const checkOutTime = new Date(`2000/01/01 ${checkOut}`);
    const diff = checkOutTime - checkInTime;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  // const handleSearch = () => {
  //   console.log('Searching...');
  // };

  const handleSearch = () => {
    const startDate = new Date(startMonth);
    const endDate = new Date(endMonth);

    const filteredData = attendanceData.filter((record) => {
      const recordDate = new Date(record.date);
      return recordDate >= startDate && recordDate <= endDate;
    });

    if (filteredData.length > 0) {
      console.log('Filtered data:', filteredData);
    } else {
      console.log('No records found within the specified date range');
    }
  };





  useEffect(() => {
    getCurrentMonthRange();
  }, []);

  const getCurrentMonthRange = () => {
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    setStartMonth(startOfMonth.toISOString().slice(0, 10));
    setEndMonth(endOfMonth.toISOString().slice(0, 10));
  };

  return (
    <Box>
      <Card>

        <Card sx={{ mt: 2 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '90px', ml: 10, justifyContent: 'between' }}>
            <Typography variant="body1">
              Current Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </Typography>

            <div>
              {checkInTime && (
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>{checkInTime}</Typography>
              )}

              <Button variant="contained" onClick={handleCheckIn}>
                Check In
              </Button>

            </div>


            <div>
              {checkOutTime && (
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>{checkOutTime}</Typography>
              )}
              <Button variant="contained" onClick={handleCheckOut} disabled={!checkInTime}>
                Check Out
              </Button>

            </div>


            <Typography variant="body1">
              Work Hours: {checkInTime && checkOutTime ? calculateTotalHours(checkInTime, checkOutTime) : "10:00 hrs"}
            </Typography>

            <Button variant="contained" onClick={handleSubmit} disabled={!checkInTime || !checkOutTime}>
              Submit
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 , border: 'none'}}>
          <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', borderBottom: 'none'}}>
            <TextField
              label="Start Date"
              type="date"
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
              sx={{ width: '150px', marginRight: '5px' }}
            />
            <TextField
              label="End Date"
              type="date"
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
              sx={{ width: '150px', marginRight: '5px' }}
            />
            <Button variant="contained" onClick={handleSearch}>
              <SearchIcon />
            </Button>
          </CardContent>
        </Card>



        <Card sx={{ mt: 2 }}>
          <CardContent>
            {attendanceData.length > 0 && (
              <Box mt={4}>

                {/* <Table>
                  <TableHead >
                    <TableRow >
                      <TableCell sx={{ fontWeight: 'bold' }}>Shift Date</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>First Check-In</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Last Check-Out</TableCell>
                      <TableCell sx={{fontWeight: 'bold' }}>Total Work Hours</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>


                    {attendanceData.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>
                        {editMode === record.id ? (
                          <TextField
                            value={editedCheckIn}
                            onChange={(e) => setEditedCheckIn(e.target.value)}
                          />
                        ) : (
                          record.checkIn
                        )}
                      </TableCell>
                      <TableCell>
                        {editMode === record.id ? (
                          <TextField
                            value={editedCheckOut}
                            onChange={(e) => setEditedCheckOut(e.target.value)}
                          />
                        ) : (
                          record.checkOut
                        )}
                      </TableCell>
                      <TableCell>{record.totalHours}</TableCell>
                      <TableCell>
                        {editMode === record.id ? (
                          <>

                          </>
                        ) : (
                          <Button size="small" onClick={() => handleEdit(record.id)}>
                            <EditIcon />
                          </Button>
                        )}
                          <Button size="small" onClick={() => handleDelete(record.id)}>
                            <DeleteIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table> */}

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}> Shift Date</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>First Check-In</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Last Check-Out</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Total Hours</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {attendanceData.map((record) => (
                      <TableRow key={record.id}>
                        {editMode === record.id ? (
                          <>
                            <TableCell>{record.date}</TableCell>
                            <TableCell>
                              <TextField
                                value={editedCheckIn}
                                onChange={(e) => setEditedCheckIn(e.target.value)}
                              />
                            </TableCell>
                            <TableCell>
                              <TextField
                                value={editedCheckOut}
                                onChange={(e) => setEditedCheckOut(e.target.value)}
                              />
                            </TableCell>
                            <TableCell>{record.totalHours}</TableCell>
                            <TableCell>
                              <Button onClick={() => handleSave(record.id, editedCheckIn, editedCheckOut)}>
                                Save
                              </Button>
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell>{record.date}</TableCell>
                            <TableCell>{record.checkIn}</TableCell>
                            <TableCell>{record.checkOut}</TableCell>
                            <TableCell>{record.totalHours}</TableCell>
                            <TableCell>
                              <Button onClick={() => handleEdit(record.id)} startIcon={<EditIcon />}>

                              </Button>
                              <Button onClick={() => handleDelete(record.id)} startIcon={<DeleteIcon />}>

                              </Button>
                            </TableCell>
                          </>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>



              </Box>
            )}
          </CardContent>
        </Card>
      </Card>
    </Box>
  );
};

export default AttendancePage;


















