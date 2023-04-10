import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title,data,firstParameter,secondParameter}) {

  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width='100%' aspect={4/1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey={firstParameter} stroke="#555555" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={secondParameter} stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
