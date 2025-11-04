
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { GradeCompositionData } from '../../types';
import { CHART_COLORS } from '../../constants';

interface GradeCompositionChartProps {
    data: GradeCompositionData[];
}

export const GradeCompositionChart: React.FC<GradeCompositionChartProps> = ({ data }) => {
    const barData = [
        { dataKey: 'delgadez', name: 'Delgadez', color: CHART_COLORS.delgadez },
        { dataKey: 'riesgoDelgadez', name: 'Riesgo de Delgadez', color: CHART_COLORS.riesgoDelgadez },
        { dataKey: 'adecuado', name: 'IMC Adecuado', color: CHART_COLORS.adecuado },
        { dataKey: 'sobrepeso', name: 'Sobrepeso', color: CHART_COLORS.sobrepeso },
        { dataKey: 'obesidad', name: 'Obesidad', color: CHART_COLORS.obesidad },
    ];
    
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
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis unit="%" tick={{ fontSize: 12 }} />
                <Tooltip 
                    formatter={(value: number) => `${value.toFixed(2)}%`}
                    cursor={{fill: 'rgba(206, 206, 206, 0.2)'}}
                />
                <Legend iconType="circle" />
                {barData.map(bar => (
                    <Bar 
                        key={bar.dataKey} 
                        dataKey={bar.dataKey} 
                        stackId="a" 
                        name={bar.name} 
                        fill={bar.color} 
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
};
