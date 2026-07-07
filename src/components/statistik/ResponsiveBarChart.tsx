
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import type { ChartDataItem } from '../../types/dashboard';

interface ResponsiveBarChartProps {
  data: ChartDataItem[];
  layout?: 'horizontal' | 'vertical';
  fillColor?: string;
  angleXAxis?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 text-sm">
        <p className="font-bold text-zinc-800 dark:text-zinc-200 mb-1">{label}</p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Jumlah: <span className="font-semibold text-zinc-900 dark:text-white">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function ResponsiveBarChart({ data, layout = 'horizontal', fillColor = '#3f3f46', angleXAxis = false }: ResponsiveBarChartProps) {
  // Sort data descending by value for better visual presentation, but if angleXAxis is true, maybe keep original order if it's RT
  const sortedData = angleXAxis ? data : [...data].sort((a, b) => b.value - a.value);

  return (
    <div className={`w-full h-full ${angleXAxis ? 'min-w-[700px]' : 'min-w-[400px]'} text-zinc-800 dark:text-zinc-200`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
        data={sortedData}
        layout={layout}
        margin={{ top: 30, right: 30, left: layout === 'vertical' ? 100 : 0, bottom: angleXAxis ? 80 : 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={layout === 'horizontal'} horizontal={layout === 'vertical'} stroke="#e4e4e7" opacity={0.5} />
        {layout === 'horizontal' ? (
          <>
            <XAxis 
              dataKey="label" 
              tick={{ fontSize: 10, fill: 'currentColor' }} 
              axisLine={false} 
              tickLine={false} 
              interval={0}
              angle={angleXAxis ? -45 : 0}
              textAnchor={angleXAxis ? 'end' : 'middle'}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: 'currentColor' }} 
              axisLine={false} 
              tickLine={false} 
            />
          </>
        ) : (
          <>
            <XAxis 
              type="number" 
              tick={{ fontSize: 12, fill: 'currentColor' }} 
              axisLine={false} 
              tickLine={false} 
            />
            <YAxis 
              dataKey="label" 
              type="category" 
              tick={{ fontSize: 12, fill: 'currentColor' }} 
              axisLine={false} 
              tickLine={false} 
              width={90}
            />
          </>
        )}
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
        <Bar dataKey="value" radius={[4, 4, 4, 4]}>
          <LabelList dataKey="value" position={layout === 'horizontal' ? 'top' : 'right'} style={{ fontSize: '11px', fontWeight: 'bold', fill: 'currentColor' }} />
          {sortedData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={fillColor} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
