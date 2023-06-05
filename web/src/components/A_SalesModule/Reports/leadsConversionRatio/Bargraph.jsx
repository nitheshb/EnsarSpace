import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Bargraph = () => {
  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}`}</text>;
  };
  const data = [{ name: 'Page A', uv: 100, pv: 200, amt: 400 }, { name: 'Page B', uv: 400, pv: 200, amt: 240 }, { name: 'Page C', uv: 200, pv: 200, amt: 400 }, { name: 'Page D', uv: 500, pv: 500, amt: 240 }, { name: 'Page A', uv: 0, pv: 200, amt: 400 }, { name: 'Page B', uv: 400, pv: 200, amt: 240 }, { name: 'Page C', uv: 200, pv: 200, amt: 400 }, { name: 'Page D', uv: 500, pv: 500, amt: 240 }, { name: 'Page A', uv: 100, pv: 200, amt: 400 }, { name: 'Page B', uv: 400, pv: 200, amt: 240 }, { name: 'Page C', uv: 200, pv: 200, amt: 400 }, { name: 'Page D', uv: 500, pv: 500, amt: 240 }, { name: 'Page A', uv: 100, pv: 200, amt: 400 }, { name: 'Page B', uv: 400, pv: 200, amt: 240 }, { name: 'Page C', uv: 200, pv: 200, amt: 400 }, { name: 'Page D', uv: 500, pv: 500, amt: 240 }, { name: 'Page B', uv: 400, pv: 200, amt: 240 }, { name: 'Page C', uv: 200, pv: 200, amt: 400 }, { name: 'Page D', uv: 500, pv: 500, amt: 240 },];
  return (
    <div>
      <BarChart width={800} height={200} data={data}>d
        
        <Bar label={renderCustomBarLabel} dataKey="uv" fill="#397d8a" barSize={15} />
      </BarChart>
    </div>
  )
}

export default Bargraph
