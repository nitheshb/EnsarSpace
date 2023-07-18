/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'

const PieChartTable = (props: { pieData: any; allPieData: any }) => {
  console.log(props.pieData, 'qqqqqqqqqqqqqq')
  // const pietableData = props.pieData
  const [pietableData, setPietableData] = useState<any>()
  useEffect(() => {
    setPietableData(props.pieData)
  }, [props.pieData])
  const handleRefreshData = () => {
    setPietableData(props.allPieData)
  }

  return (
    <div className="p-2">
      <table>
        <tr>
          <th
            style={{
              border: '1px solid black',
              textAlign: 'left',
              padding: '8px',
            }}
          >
            Name
          </th>
          <th
            style={{
              border: '1px solid black',
              textAlign: 'left',
              padding: '8px',
            }}
          >
            Value
          </th>
          <th className="pl-5">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleRefreshData}
            >
              <path
                d="M17.6495 4.35L14.8595 7.14C14.5395 7.46 14.7595 8 15.2095 8H16.9995C16.9995 11.31 14.3095 14 10.9995 14C10.2095 14 9.43954 13.85 8.74954 13.56C8.38954 13.41 7.97954 13.52 7.70954 13.79C7.19954 14.3 7.37954 15.16 8.04954 15.43C8.95954 15.8 9.95954 16 10.9995 16C15.4195 16 18.9995 12.42 18.9995 8H20.7895C21.2395 8 21.4595 7.46 21.1395 7.15L18.3495 4.36C18.1595 4.16 17.8395 4.16 17.6495 4.35ZM4.99954 8C4.99954 4.69 7.68954 2 10.9995 2C11.7895 2 12.5595 2.15 13.2495 2.44C13.6095 2.59 14.0195 2.48 14.2895 2.21C14.7995 1.7 14.6195 0.84 13.9495 0.57C13.0395 0.2 12.0395 0 10.9995 0C6.57954 0 2.99954 3.58 2.99954 8H1.20954C0.759542 8 0.539542 8.54 0.859542 8.85L3.64954 11.64C3.84954 11.84 4.15954 11.84 4.35954 11.64L7.14954 8.85C7.45954 8.54 7.23954 8 6.78954 8H4.99954Z"
                fill="black"
              />
            </svg>
          </th>
        </tr>
        {pietableData &&
          pietableData?.length > 0 &&
          pietableData?.map((val: any) => (
            <tr>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                {val?.label}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  textAlign: 'left',
                  padding: '8px',
                }}
              >
                {val?.value}
              </td>
            </tr>
          ))}
      </table>
    </div>
  )
}

export default PieChartTable
