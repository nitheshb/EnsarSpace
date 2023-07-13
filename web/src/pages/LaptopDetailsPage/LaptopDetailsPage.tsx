import React from 'react';

import { colors } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

// import { MetaTags } from '@redwoodjs/web';

const LaptopDetailsPage = () => {
  return (
    <>
      <div className="w-screen h-screen flex-grow p-6 overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
        <MetaTags title="LaptopDetails" description="LaptopDetails page" />
        <h1 style={{ fontSize: '32px' }}>Laptop Lists</h1>
        <div style={{
          width:"100%",
          height:"100vh",
          // display:"flex",
          // justifyContent:"center",
          alignItems:"center",
        }}>
          <table style={{
            border:"2px solid forestgreen",
            width:"800px",
            height:"200px",
            backgroundColor:"white",
          }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Laptop Model</th>
                <th>Processor</th>
                <th>Ram</th>
                <th>Allocation Status</th>
                <th>Working Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lenovo</td>
                <td>intel i5</td>
                <td>16gb</td>
                <td> <label className="switch"> <input type="checkbox" /> <span className="slider"></span> </label> </td>
                <td> <label className="switch"> <input type="checkbox" /> <span className="slider"></span> </label> </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dell</td>
                <td>AMD Ryzen 7</td>
                <td>32gb</td>
                <td> <label className="switch"> <input type="checkbox" /> <span className="slider"></span> </label> </td>
                <td> <label className="switch"> <input type="checkbox" /> <span className="slider"></span> </label> </td>
              </tr>
              <tr>
                <td>3</td>
                <td>HP</td>
                <td>Intel i7</td>
                <td>16gb</td>
                <td> <label className="switch"> <input type="checkbox" /> <span className="slider"></span> </label> </td>
                <td> <label className="switch"> <input type="checkbox" /> <span className="slider"></span> </label> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default LaptopDetailsPage;


