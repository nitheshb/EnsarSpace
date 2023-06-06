

import React, { useState } from 'react';



const TimeOffForm = ({ isOpen, onClose }) => {

 const [reason, setReason] = useState('');

 const [startDate, setStartDate] = useState('');

 const [endDate, setEndDate] = useState('');



 const handleSubmit = (e) => {

  e.preventDefault();



   // Perform form submission logic here

   // You can access the form values: reason, startDate, endDate

   console.log('Form submitted:', reason, startDate, endDate);



   // Reset form fields

   setReason('');

   setStartDate('');

   setEndDate('');



   // Close the form

   onClose();

 };



 if (!isOpen) {

   return null; // Render nothing if the form is not open

 }



 return (

   <div>

     <h1>Time Off Request Form</h1>

     <form onSubmit={handleSubmit}>

       <div>

         <label htmlFor="reason">Reason:</label>

         <input

          type="text"

          id="reason"

          value={reason}

          onChange={(e) => setReason(e.target.value)}

         />

       </div>

       <div>

         <label htmlFor="startDate">Start Date:</label>

         <input

          type="date"

          id="startDate"

          value={startDate}

          onChange={(e) => setStartDate(e.target.value)}

         />

       </div>

       <div>

         <label htmlFor="endDate">End Date:</label>

         <input

          type="date"

          id="endDate"

          value={endDate}

          onChange={(e) => setEndDate(e.target.value)}

         />

       </div>

       <button type="submit">Submit</button>

     </form>

   </div>

 );

};

