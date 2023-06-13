
import React, { useState, useEffect } from 'react';

const Calendar = ({ holidays, deleteHoliday }) => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '60%',
    height: '30%',
    backgroundColor: 'white',
    marginLeft: '50px',
    marginTop: '20px',
  };


  const thStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

  const deleteIconStyle = {
    cursor: 'pointer',
    marginLeft: '5px',
  };




  return (
    <table style={tableStyle}>



<thead>
        <tr>
          <th style={thStyle}>S.No</th>
          <th style={thStyle}>Date</th>
          <th style={thStyle}>Day</th>
          <th style={thStyle}>Holidays</th>
          <th style={thStyle}>Action</th>
        </tr>
      </thead>



      <tbody>
        {holidays.map((holiday, index) => (
          <tr key={index}>
            <td style={tdStyle}>{index + 1}</td>
            <td style={tdStyle}>{holiday.date}</td>
            <td style={tdStyle}>{holiday.day}</td>
            <td style={tdStyle}>{holiday.name}</td>
            <td style={tdStyle}>


<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  className="bi bi-trash"
  viewBox="0 0 16 16"
  style={{ ...deleteIconStyle, display: 'block', margin: 'auto' }}
  onClick={() => deleteHoliday(index)}
>
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
</svg>



            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [holidays, setHolidays] = useState([]);

  const [newHoliday, setNewHoliday] = useState({
    date: '',
    day: '',
    name: '',
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedHolidays = localStorage.getItem('holidays');
    if (storedHolidays) {
      setHolidays(JSON.parse(storedHolidays));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('holidays', JSON.stringify(holidays));
  }, [holidays]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday((prevHoliday) => ({
      ...prevHoliday,
      [name]: value,
    }));
  };




  const addHoliday = () => {
    if (newHoliday.date.trim() === '' || newHoliday.day.trim() === '' || newHoliday.name.trim() === '') {
      return;
    }

    setHolidays((prevHolidays) => [...prevHolidays, newHoliday]);
    setNewHoliday({
      date: '',
      day: '',
      name: '',
    });
    setShowForm(false);
  };

  const cancelAddHoliday = () => {
    setShowForm(false);
    setNewHoliday({
      date: '',
      day: '',
      name: '',
    });
  };





  const deleteHoliday = (index) => {
    setHolidays((prevHolidays) => {
      const updatedHolidays = [...prevHolidays];
      updatedHolidays.splice(index, 1);
      return updatedHolidays;
    });
  };

  const formContainerStyle = {
    position: 'absolute',
    top: '95px',
    right: '35px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    marginBottom: '10px',
    width: '200px',
  };





  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    width: '120px',
    alignSelf: 'center',
    marginRight: '10px',
  };

  const cancelButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    width: '120px',
    alignSelf: 'center',
  };

  const tableStyle = {
    fontFamily: 'Arial, sans-serif',
    marginLeft: '50px',
  };

  return (
    <div>
      <div style={formContainerStyle}>
        {showForm ? (
          <form style={formStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <label htmlFor="date">Date:</label>
              <input
                style={inputStyle}
                type="text"
                id="date"
                value={newHoliday.date}
                onChange={handleInputChange}
                name="date"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <label htmlFor="day">Day:</label>
              <input
                style={inputStyle}
                type="text"
                id="day"
                value={newHoliday.day}
                onChange={handleInputChange}
                name="day"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <label htmlFor="name">Holiday:</label>
              <input
                style={inputStyle}
                type="text"
                id="name"
                value={newHoliday.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <button style={buttonStyle} onClick={addHoliday}>
                Submit
              </button>
              <button style={cancelButtonStyle} onClick={cancelAddHoliday}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center h-10 px-4 bg-gray-200 ml-auto text-sm font-medium rounded hover:bg-gray-300"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="ml-1 leading-none">Add Holiday</span>
          </button>
        )}
      </div>
      <div style={tableStyle}>
        <Calendar holidays={holidays} deleteHoliday={deleteHoliday} />
      </div>
    </div>
  );
};

export default App;




