
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { DistributionData } from '../../types';

interface DistributionChartProps {
    data: DistributionData[];
}

export const DistributionChart: React.FC<DistributionChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    formatter={(value: number) => `${value.toFixed(2)}%`}
                    cursor={{ fill: 'rgba(206, 206, 206, 0.2)' }}
                />
                <Legend iconType="circle" />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};
