import React, { useState } from 'react';

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
  ];

  const rows = [
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
  ];

  const [checkboxValues, setCheckboxValues] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCheckboxChange = (rowIndex, columnIndex) => {
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [rowIndex]: {
        ...prevValues[rowIndex],
        [columnIndex]: !prevValues[rowIndex]?.[columnIndex],
      },
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredRows =
    selectedCategory === 'all'
      ? rows
      : rows.filter((row) => row[0] === selectedCategory);

  return (
    <section className="flex flex-col ml-auto mt-[18px] bg-white border-gray-100 py-4 md:py-7 px-4 md:px-8 xl:px-10 table-container">
      <div className="category-buttons">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        <button
          className={selectedCategory === 'Trainee' ? 'active' : ''}
          onClick={() => handleCategoryChange('Trainee')}
        >
          Trainee
        </button>
        <button
          className={selectedCategory === 'IT Support' ? 'active' : ''}
          onClick={() => handleCategoryChange('IT Support')}
        >
          IT Support
        </button>
        <button
          className={selectedCategory === 'Legal Manager' ? 'active' : ''}
          onClick={() => handleCategoryChange('Legal Manager')}
        >
          Legal Manager
        </button>
        <button
          className={selectedCategory === 'Admin Project Manager' ? 'active' : ''}
          onClick={() => handleCategoryChange('Admin Project Manager')}
        >
          Admin Project Manager
        </button>
        <button
          className={selectedCategory === 'Project Executive' ? 'active' : ''}
          onClick={() => handleCategoryChange('Project Executive')}
        >
          Project Executive
        </button>
        <button
          className={selectedCategory === 'Data Scientist' ? 'active' : ''}
          onClick={() => handleCategoryChange('Data Scientist')}
        >
          Data Scientist
        </button>
        <button
          className={selectedCategory === 'Sales Manager' ? 'active' : ''}
          onClick={() => handleCategoryChange('Sales Manager')}
        >
          Sales Manager
        </button>
        <button
          className={selectedCategory === 'HR Executive' ? 'active' : ''}
          onClick={() => handleCategoryChange('HR Executive')}
        >
          HR Executive
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {filteredRows.map((row, rowIndex) => (
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
          .table-container {
            border-radius: 10px;
            overflow: hidden;
            margin-right: 18px; /* Add desired spacing to the right */
          }

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

          .category-buttons {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 10px;
          }

          .category-buttons button {
            padding: 5px 10px;
            margin-right: 5px;
            font-size: 14px;
            cursor: pointer;
          }

          .category-buttons button.active {
            background-color: #ccc;
          }
        `}
      </style>
    </section>
  );
};

export default TableData;
