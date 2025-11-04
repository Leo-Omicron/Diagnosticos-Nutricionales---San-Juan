
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { GenderComparisonData } from '../../types';
import { CHART_COLORS } from '../../constants';

interface GenderComparisonChartProps {
    data: GenderComparisonData[];
}

export const GenderComparisonChart: React.FC<GenderComparisonChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis unit="%" tick={{ fontSize: 12 }} />
                <Tooltip 
                    formatter={(value: number) => `${value.toFixed(2)}%`}
                    cursor={{fill: 'rgba(206, 206, 206, 0.2)'}}
                />
                <Legend iconType="circle"/>
                <Bar dataKey="femenino" name="Femenino" fill={CHART_COLORS.femenino} radius={[4, 4, 0, 0]} />
                <Bar dataKey="masculino" name="Masculino" fill={CHART_COLORS.masculino} radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};
