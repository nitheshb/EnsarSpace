import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { SearchIcon } from '@heroicons/react/outline';

const AttendancePage = () => {
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const [attendanceData, setAttendanceData] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedCheckIn, setEditedCheckIn] = useState('');
  const [editedCheckOut, setEditedCheckOut] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endMonth, setEndMonth] = useState('');

  useEffect(() => {
    const storedAttendanceData = localStorage.getItem('attendanceData');
    if (storedAttendanceData) {
      setAttendanceData(JSON.parse(storedAttendanceData));
    }
  }, []);

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
      date: new Date().toLocaleDateString(),
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
    const diffInMilliseconds = checkOutTime - checkInTime;

    const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMilliseconds / (1000 * 60)) % 60);
    const seconds = Math.floor((diffInMilliseconds / 1000) % 60);

    return `${hours} hours ${minutes} minutes ${seconds} seconds`;
  };

  const handleEdit = (id, checkIn, checkOut) => {
    setEditMode(id);
    setEditedCheckIn(checkIn);
    setEditedCheckOut(checkOut);
  };

  const handleSave = (id) => {
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

  const handleSearch = () => {
    console.log('Searching...');
  };

  return (
    <Card>
      <Card sx={{ mt: 2 }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', border: 'none' }}>
        <Box display="flex" flexDirection="column" alignItems="center">

          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body1">
              Current Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </Typography>
            <Button variant="contained" onClick={handleCheckIn}>
              Check In
            </Button>
            <Button variant="contained" onClick={handleCheckOut} disabled={!checkInTime}>
              Check Out
            </Button>
            <Button variant="contained" onClick={handleSubmit} disabled={!checkInTime || !checkOutTime}>
              Submit
            </Button>
          </Box>
        </Box>
        </CardContent>

        </Card>




<Card sx={{ mt: 2 }}>
  <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', border: 'none' }}>
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
<CardContent sx={{ display: 'flex', justifyContent: 'flex-end', border: 'none' }}>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Shift Date</TableCell>
              <TableCell>First Check In</TableCell>
              <TableCell>Last Check Out</TableCell>
              <TableCell>Total Hours</TableCell>
              <TableCell>Actions</TableCell>
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
                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<SaveIcon />}
                      onClick={() => handleSave(record.id)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => handleEdit(record.id, record.checkIn, record.checkOut)}
                    >
                      {/* Edit */}
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(record.id)}
                  >
                    {/* Delete */}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      </Card>
    </Card>
  );
};

export default AttendancePage;
