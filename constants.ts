
import type { DistributionData, GenderComparisonData, GradeCompositionData } from './types';

export const CHART_COLORS = {
    adecuado: '#06D6A0',
    riesgoDelgadez: '#FFD166',
    sobrepeso: '#FF6B6B',
    obesidad: '#B91C1C',
    delgadez: '#118AB2',
    femenino: '#EF476F',
    masculino: '#073B4C'
};

export const SUMMARY_STATS = [
    { label: "Total Evaluados", value: "288", color: "#E63946" },
    { label: "Peso Promedio", value: "60.74", unit: "kg", color: "#06D6A0" },
    { label: "Talla Promedio", value: "162.89", unit: "cm", color: "#06D6A0" },
    { label: "IMC Promedio", value: "22.95", color: "#06D6A0" },
];

export const DISTRIBUTION_DATA: DistributionData[] = [
    { name: 'IMC Adecuado', value: 58.33, students: 168, color: CHART_COLORS.adecuado },
    { name: 'Sobrepeso', value: 16.67, students: 48, color: CHART_COLORS.sobrepeso },
    { name: 'Riesgo de Delgadez', value: 13.19, students: 38, color: CHART_COLORS.riesgoDelgadez },
    { name: 'Obesidad', value: 8.33, students: 24, color: CHART_COLORS.obesidad },
    { name: 'Delgadez', value: 3.47, students: 10, color: CHART_COLORS.delgadez },
];

export const GENDER_COMPARISON_DATA: GenderComparisonData[] = [
    { name: 'IMC Adecuado', femenino: 58.04, masculino: 58.62 },
    { name: 'Sobrepeso', femenino: 16.08, masculino: 17.24 },
    { name: 'Riesgo Delgadez', femenino: 13.99, masculino: 12.41 },
    { name: 'Obesidad', femenino: 7.69, masculino: 8.97 },
    { name: 'Delgadez', femenino: 4.20, masculino: 2.76 },
];

export const GRADE_COMPOSITION_DATA: GradeCompositionData[] = [
    { name: 'Grado 9°', delgadez: 3.06, riesgoDelgadez: 14.29, adecuado: 61.22, sobrepeso: 15.31, obesidad: 6.12 },
    { name: 'Grado 10°', delgadez: 4.17, riesgoDelgadez: 13.54, adecuado: 58.33, sobrepeso: 16.67, obesidad: 7.29 },
    { name: 'Grado 11°', delgadez: 3.19, riesgoDelgadez: 11.70, adecuado: 55.32, sobrepeso: 18.09, obesidad: 11.70 },
];

export const ACTION_PLAN_ITEMS = [
    { title: "Nivel Universal", description: "Acciones de promoción y prevención: Talleres de alimentación, campañas de hidratación y ferias de 'Escuelas Saludables'.", color: "#06D6A0" },
    { title: "Nivel Focalizado", description: "Priorizar talleres de actividad física en la jornada mañana y en los grados 10° y 11°, donde el riesgo de exceso de peso es mayor.", color: "#FFD166" },
    { title: "Nivel Individual", description: "Activar la ruta de acompañamiento para estudiantes con Obesidad o Delgadez, asegurando remisión y seguimiento nutricional.", color: "#FF6B6B" },
];
