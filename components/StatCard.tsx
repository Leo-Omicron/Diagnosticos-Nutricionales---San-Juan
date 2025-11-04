
import React from 'react';

interface StatCardProps {
    label: string;
    value: string;
    unit?: string;
    color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, unit, color }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-5 text-center transition-transform transform hover:scale-105">
            <span className="text-sm font-semibold text-gray-500 block">{label}</span>
            <div className="mt-1">
                <span className="text-4xl font-extrabold" style={{ color: color }}>{value}</span>
                {unit && <span className="text-lg ml-1 font-medium text-gray-600">{unit}</span>}
            </div>
        </div>
    );
};
