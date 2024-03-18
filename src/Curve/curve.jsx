import { AreaChart, Area , Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 15,
    pv: 5,
    amt: 35,
  },
  {
    name: 'February',
    uv: 4,
    pv: 20,
    amt: 30,
  },
  {
    name: 'March',
    uv: 14,
    pv: 13,
    amt: 25,
  },
  {
    name: 'April',
    uv: 10,
    pv: 11,
    amt: 20,
  },
  {
    name: 'May',
    uv: 20,
    pv: 25,
    amt: 15,
  },
  {
    name: 'June',
    uv: 40,
    pv: 10,
    amt: 10,
  },
  {
    name: 'July',
    uv: 1,
    pv: 8,
    amt: 5,
  },
];

export default function Curve() {
 

 
    return (
      <ResponsiveContainer width="100%" aspect={2}>
                                 
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>
    );
  }