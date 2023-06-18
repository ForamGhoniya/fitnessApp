import React from "react";
import jsonData from "../../../dashboard/json/fitness.jsx";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Heart-Rates chart",
            color:"#000000",
        },
        },
};

const labels = jsonData.activities.map((activity) => activity.date);
const heartRates = jsonData.activities
    
    .map((activity) => activity.heart_rate.average);
const heartRatesMax = jsonData.activities
    
    .map((activity) => activity.heart_rate.max);

export const data = {
    labels: labels.slice(0, heartRates.length),
    datasets: [
        {
            label: "average",
            data: heartRates,
            borderColor: "#4B0082",
            backgroundColor: "#4B0082",
        },

        {
            label: "max",
            data: heartRatesMax,
            borderColor: "#FF1493",
            backgroundColor: "#FF1493",
        },

    ],
    };

export function App() {
    return (
                <Line 
                options={options}
                data={data}
                />
            );
}
