import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-white text-[#0C3B5E] p-4 sm:p-6 shadow-md border-b-4 border-[#0F4C81]">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left side: Main Logo + Title */}
                <div className="flex items-center">
                    <img src="https://i.ibb.co/84LBwsN3/Imagen1.png" alt="Fundación Ciénaga Caribe Logo" className="h-16 sm:h-20 mr-4 object-contain" />
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Diagnóstico Nutricional</h1>
                        <p className="text-sm sm:text-lg text-gray-600">I.E. San Juan del Córdoba</p>
                    </div>
                </div>

                {/* Right side: Partner Logos */}
                <div className="hidden sm:flex items-center space-x-6">
                    <img src="https://i.ibb.co/tZ4dYJj/alcaldia.png" alt="Alcaldía de Ciénaga Logo" className="h-16 object-contain" />
                    <img src="https://i.ibb.co/z57dGHM/sgr.png" alt="SGR Logo" className="h-14 object-contain" />
                </div>
            </div>
        </header>
    );
};