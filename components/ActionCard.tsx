
import React from 'react';

interface ActionCardProps {
    title: string;
    description: string;
    color: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({ title, description, color }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 h-full" style={{ borderTop: `6px solid ${color}` }}>
            <h4 className="text-lg font-bold mb-2 text-[#0C3B5E]">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};
