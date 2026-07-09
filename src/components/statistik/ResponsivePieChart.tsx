import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import type { ChartDataItem } from '../../types/dashboard';
import { formatNumber } from '../../lib/format';

interface ResponsivePieChartProps {
  data: ChartDataItem[];
}

const COLORS = [
  '#4285F4', // Blue
  '#DB4437', // Red
  '#F4B400', // Yellow
  '#0F9D58', // Green
  '#AB47BC', // Purple
  '#00ACC1', // Cyan
  '#FF7043', // Orange
  '#9E9D24', // Lime
  '#5C6BC0', // Indigo
  '#EC407A', // Pink
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 text-sm">
        <p className="font-bold text-zinc-800 dark:text-zinc-200 mb-1">{payload[0].name}</p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Jumlah: <span className="font-semibold text-zinc-900 dark:text-white">{formatNumber(payload[0].value)}</span>
        </p>
      </div>
    );
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value }: any) => {
  const RADIAN = Math.PI / 180;
  // Position label slightly outside the center of the slice
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Only show label if percentage is > 5% to avoid overlapping
  if (percent < 0.05) return null;

  return (
    <text x={x} y={y} fill="#18181b" textAnchor="middle" dominantBaseline="central" className="text-xs font-semibold drop-shadow-md">
      {`${formatNumber(value)} (${(percent * 100).toFixed(1)}%)`}
    </text>
  );
};

export default function ResponsivePieChart({ data }: ResponsivePieChartProps) {
  // Filter out zero values and sort for better display
  const validData = data.filter(item => item.value > 0).sort((a, b) => b.value - a.value);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={validData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius="75%"
          fill="#8884d8"
          dataKey="value"
          nameKey="label"
        >
          {validData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          layout="horizontal" 
          verticalAlign="bottom" 
          align="center"
          wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
