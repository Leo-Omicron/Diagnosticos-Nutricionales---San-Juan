import React from 'react';

import { Header } from './components/Header';
import { StatCard } from './components/StatCard';
import { ActionCard } from './components/ActionCard';
import { DistributionChart } from './components/charts/DistributionChart';
import { GenderComparisonChart } from './components/charts/GenderComparisonChart';
import { GradeCompositionChart } from './components/charts/GradeCompositionChart';

import { 
    SUMMARY_STATS,
    DISTRIBUTION_DATA, 
    GENDER_COMPARISON_DATA, 
    GRADE_COMPOSITION_DATA,
    ACTION_PLAN_ITEMS 
} from './constants';

const App: React.FC = () => {
    return (
        <div className="bg-gray-50 text-[#0C3B5E]">
            <Header />

            <main className="container mx-auto p-4 md:p-8">
                <section className="mb-12 bg-white rounded-xl shadow-lg p-6 border-l-8 border-[#0F4C81]">
                    <h2 className="text-2xl font-bold text-[#0C3B5E] mb-3">Presentación de Resultados</h2>
                    <p className="text-gray-700 mb-2">
                        El presente diagnóstico se enmarca en el proyecto <strong>"Educación con Bienestar: Estrategia de Escuelas Saludables"</strong>, una iniciativa para mejorar las condiciones de salud y bienestar de los estudiantes en las instituciones oficiales de Ciénaga, Magdalena.
                    </p>
                    <p className="text-gray-700">
                        A continuación, se presentan los resultados y hallazgos clave de la valoración nutricional (Peso, Talla e IMC) realizada a los estudiantes de la <strong>I.E. San Juan del Córdoba</strong>.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#0F4C81] mb-4">Resumen Ejecutivo</h2>
                    <p className="text-lg mb-6 text-gray-700">El diagnóstico nutricional evaluó a 288 estudiantes, identificando los principales focos de riesgo y bienestar para orientar acciones de intervención.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SUMMARY_STATS.map((stat) => (
                           <StatCard key={stat.label} label={stat.label} value={stat.value} unit={stat.unit} color={stat.color} />
                        ))}
                    </div>
                    
                    <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-5 rounded-lg shadow-sm">
                        <p className="font-bold text-lg">Hallazgo Principal</p>
                        <p>La mayoría de los estudiantes (58.33%) presenta un IMC adecuado. Sin embargo, se identifica un foco de riesgo por exceso (sobrepeso y obesidad) que alcanza al 25%, y un 13.19% en riesgo de delgadez.</p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#0F4C81] mb-4">Diagnóstico del Estado Nutricional</h2>
                    <p className="text-lg mb-6 text-gray-700">Esta sección visualiza la variable clave, "Clasificación Nutricional", para entender el panorama completo de la institución.</p>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-center text-[#0C3B5E]">Visual 1: Distribución Nutricional General</h3>
                        <div className="h-80 w-full max-w-md mx-auto">
                           <DistributionChart data={DISTRIBUTION_DATA} />
                        </div>
                        <DataTable />
                        <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
                            <span className="font-bold">Interpretación:</span> El gráfico y la tabla muestran que la mayoría (58.33%) tiene un IMC adecuado. El desafío es doble: atender al 25% con malnutrición por exceso (sobrepeso/obesidad) y al 16.66% con malnutrición por déficit (riesgo/delgadez).
                        </p>
                    </div>
                </section>
                
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#0F4C81] mb-4">Identificación de Focos de Riesgo</h2>
                    <p className="text-lg mb-6 text-gray-700">Aquí segmentamos los datos para que los docentes y coordinadores sepan qué grupos priorizar para las intervenciones.</p>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ChartCard title="Visual 2: Comparativa por Sexo" interpretation="El riesgo de delgadez es superior en mujeres (13.99% vs 12.41%), mientras que la obesidad es levemente más alta en hombres (8.97% vs 7.69%).">
                            <GenderComparisonChart data={GENDER_COMPARISON_DATA} />
                        </ChartCard>
                         <ChartCard title="Visual 3: Composición por Grado" interpretation='Se observa una tendencia clara: el "IMC Adecuado" (verde) disminuye y el exceso de peso (Sobrepeso + Obesidad) aumenta con el grado. 11° es el grado con mayor malnutrición por exceso (29.79%).'>
                             <GradeCompositionChart data={GRADE_COMPOSITION_DATA} />
                        </ChartCard>
                    </div>
                    <SessionComparisonTable />
                </section>

                 <section className="mb-12">
                    <h2 className="text-3xl font-bold text-[#0F4C81] mb-4">Conclusiones y Recomendaciones</h2>
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold mb-2 text-[#0C3B5E]">Conclusión Diagnóstica</h3>
                        <p className="text-gray-700">El diagnóstico revela un <strong>doble desafío nutricional</strong>. Por un lado, la <strong>malnutrición por exceso</strong> (Sobrepeso + Obesidad) que afecta a 1 de cada 4 estudiantes (25%). Este riesgo es progresivo, aumentando en los grados superiores y es más acentuado en la <strong>Jornada Mañana</strong>. Por otro lado, un <strong>déficit nutricional</strong> que impacta al 16.66% de la población y requiere atención.</p>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F4C81] mb-4 mt-8">Plan de Acción Sugerido</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {ACTION_PLAN_ITEMS.map((item, index) => (
                           <ActionCard key={index} title={`${index + 1}. ${item.title}`} description={item.description} color={item.color} />
                        ))}
                    </div>
                    <KeyInterventions />
                </section>
            </main>
            
            <AppFooter />
        </div>
    );
};

// Sub-components for better readability
const ChartCard: React.FC<{ title: string; interpretation: string; children: React.ReactNode }> = ({ title, interpretation, children }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-center text-[#0C3B5E]">{title}</h3>
        <div className="h-96 w-full">
            {children}
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm">
            <span className="font-bold">Interpretación:</span> {interpretation}
        </p>
    </div>
);

const DataTable: React.FC = () => (
    <div className="overflow-x-auto mt-6">
        <table className="w-full max-w-md mx-auto text-left text-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th className="p-3 font-semibold text-gray-700">Clasificación Nutricional</th>
                    <th className="p-3 font-semibold text-center text-gray-700">Estudiantes (n)</th>
                    <th className="p-3 font-semibold text-center text-gray-700">Porcentaje (%)</th>
                </tr>
            </thead>
            <tbody>
                {DISTRIBUTION_DATA.map((item) => (
                    <tr key={item.name} className="border-b even:bg-gray-50">
                        <td className="p-3 font-medium text-gray-800">{item.name}</td>
                        <td className="p-3 text-center text-gray-600">{item.students}</td>
                        <td className="p-3 text-center text-gray-600">{item.value.toFixed(2)}%</td>
                    </tr>
                ))}
                 <tr className="bg-slate-200">
                    <td className="p-3 font-bold text-[#0C3B5E]">Total</td>
                    <td className="p-3 text-center font-bold text-[#0C3B5E]">288</td>
                    <td className="p-3 text-center font-bold text-[#0C3B5E]">100.00%</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const SessionComparisonTable: React.FC = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-4 text-center text-[#0C3B5E]">Visual 4: Comparativa de Jornadas (Mañana vs. Tarde)</h3>
        <div className="overflow-x-auto">
            <table className="w-full max-w-lg mx-auto text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 font-semibold text-gray-700">Métrica Clave</th>
                        <th className="p-3 font-semibold text-center text-gray-700">Jornada Mañana (n=213)</th>
                        <th className="p-3 font-semibold text-center text-gray-700">Jornada Tarde (n=75)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b odd:bg-white even:bg-gray-50"><td className="p-3 font-medium text-gray-800">Promedio IMC</td><td className="p-3 text-center text-gray-600">22.31</td><td className="p-3 text-center text-gray-600">24.73</td></tr>
                    <tr className="border-b odd:bg-white even:bg-gray-50"><td className="p-3 font-medium text-gray-800">% Sobrepeso</td><td className="p-3 text-center text-gray-600">16.90%</td><td className="p-3 text-center text-gray-600">16.00%</td></tr>
                    <tr className="border-b odd:bg-white even:bg-gray-50"><td className="p-3 font-medium text-gray-800">% Obesidad</td><td className="p-3 text-center text-gray-600">9.86%</td><td className="p-3 text-center text-gray-600">4.00%</td></tr>
                    <tr className="border-b bg-red-100"><td className="p-3 font-bold text-red-900">Total Exceso</td><td className="p-3 text-center font-bold text-red-900">26.76%</td><td className="p-3 text-center font-bold text-red-900">20.00%</td></tr>
                    <tr className="odd:bg-white even:bg-gray-50"><td className="p-3 font-medium text-gray-800">% Delgadez</td><td className="p-3 text-center text-gray-600">3.28%</td><td className="p-3 text-center text-gray-600">4.00%</td></tr>
                </tbody>
            </table>
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm">
            <span className="font-bold">Interpretación:</span> La malnutrición por exceso es notablemente mayor en la jornada de la mañana (26.76%) que en la tarde (20.00%).
        </p>
    </div>
);


const KeyInterventions: React.FC = () => (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-t-8 border-[#0F4C81]">
        <h3 className="text-2xl font-bold mb-4 text-[#0C3B5E]">Estrategias Clave de Intervención</h3>
        <div className="space-y-6">
            <div>
                <h4 className="text-lg font-bold text-[#0C3B5E]">1. Fortalecer la Educación Alimentaria y la Práctica Física</h4>
                <p className="text-gray-600">Implementar talleres didácticos sobre "el plato saludable", lectura de etiquetas y riesgo de bebidas azucaradas. Fomentar la actividad física como parte de la cultura escolar diaria.</p>
            </div>
            <hr/>
            <div>
                <h4 className="text-lg font-bold text-[#0C3B5E]">2. Promover Refrigerios Saludables y Pausas Activas</h4>
                <p className="text-gray-600">Diseñar campañas para incentivar el consumo de frutas y agua. Establecer "Pausas Activas" de 5 minutos en el aula, especialmente en la Jornada Mañana.</p>
            </div>
             <hr/>
            <div>
                <h4 className="text-lg font-bold text-[#0C3B5E]">3. Fomentar un Entorno Escolar Saludable</h4>
                <p className="text-gray-600">Colaborar con el quiosco escolar para aumentar la oferta de opciones saludables. Asegurar el acceso continuo a puntos de hidratación.</p>
            </div>
        </div>
    </div>
);

const AppFooter: React.FC = () => (
    <footer className="bg-white text-[#0C3B5E] p-8 mt-12 shadow-inner border-t-2">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="font-bold text-base mb-4 md:mb-0">Fundación Ciénaga Caribe - Entidad Sin Ánimo De Lucro</p>
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0F4C81]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m0 0a9 9 0 019-9m-9 9a9 9 0 009 9" />
                        </svg>
                        <span className="font-medium">NIT 900953007-5</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0F4C81]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-medium">Calle 12 # 11-32</span>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-gray-500 mt-6 border-t pt-6">
                <p>Informe generado para el Programa "Educación con Bienestar: Estrategia de Escuelas Saludables".</p>
                <p>&copy; {new Date().getFullYear()} - I.E. San Juan del Córdoba</p>
            </div>
        </div>
    </footer>
);

export default App;