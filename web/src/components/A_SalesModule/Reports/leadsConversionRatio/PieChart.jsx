import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';


const PieChartComp = () => {
  const RADIAN = Math.PI / 200;
  const data = [
    { name: 'A', value: 90, color: '#4fa183' },
    { name: 'B', value: 45, color: '#ececec' },
  ];
  const cx = 110;
  const cy = 80;
  const iR = 60;
  const oR = 75;
  const value = 100;

  

  return (
    <div>
      <PieChart width={400} height={500}  >
        <Pie
          dataKey="value"
          startAngle={225}
          endAngle={-45}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"

        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

      </PieChart>
    </div>
  )
}

export default PieChartComp
