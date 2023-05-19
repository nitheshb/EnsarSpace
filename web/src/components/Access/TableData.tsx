
import React, { useState } from 'react';

import th from 'date-fns/locale/th';

import tr from 'date-fns/locale/tr';


const TableData = () => {
  const headers = [
    'Type',
    'Access Learning Module',
    'Manage Project',
    'View Project',
    'Update Unit Status',
    'View Leads',
    'Update Leads',
    'Manage Leads',
    'Manage Users',
    'View Users',
    'View CRM',
    'Update CRM',
  ]
  const rows = [
    // [

    //       'Trainee',
    //       'IT Support',
    //       'Legal Manager',
    //       'Admin Project Manager',
    //       'Project Executive',
    //       'Data Scientist',
    //       'Sales Manager',
    //       'HR Executive',
    //     ],
    [
      'Trainee',
      true,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    [
      'IT Support',
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
    ],
    [
      'Legal Manager',
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      false,
    ],
    [
      'Admin Project Manager',
      false,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
    ],
    [
      'Project Executive',
      false,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
    ],
    [
      'Data Scientist',
      false,
      true,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
    ],
    [
      'Sales Manager',
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
    ],
    [
      'HR Executive',
      false,
      true,
      false,
      false,
      true,
      true,
      false,
      false,
      true,
      true,
      true,
    ],
  ]

  const [checkboxValues, setCheckboxValues] = useState({});

  const handleCheckboxChange = (rowIndex, columnIndex) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [rowIndex]: {
        ...prevValues[rowIndex],
        [columnIndex]: !prevValues[rowIndex]?.[columnIndex],
      },
    }));
  };

  return (
    <section className="flex ml-auto mt-[18px] bg-white border-gray-100 py-4 md:py-7 px-4 md:px-8 xl:px-10">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {rows.map((row, rowIndex) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              {row.slice(1).map((_, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="checkbox"
                    checked={checkboxValues[rowIndex]?.[columnIndex] || false}
                    onChange={() => handleCheckboxChange(rowIndex, columnIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style>
        {`
        table {
          border-collapse: collapse;
          width: 100%;
        }

        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: center;
          
        }

        th {
          border-bottom: none; /* Remove bottom border from table header */
        }
        `}
      </style>
    </section>
  );
};

export default TableData;
