import React from 'react';
import { Pie } from 'react-chartjs-2';

interface IPieChartProps {
    labels: string[],
    data: Float32Array[],
    backgroundColor: string[]
    hoverBackgroundColor: string[]
}

const PieChart = (props: IPieChartProps) => {

    const data = {
        labels: props.labels,
        datasets: [
            {
                data: props.data,
                backgroundColor: props.backgroundColor,
                hoverBackgroundColor: props.hoverBackgroundColor,
            },
        ],
    };

    return <Pie data={data} />;
};

export default PieChart;
