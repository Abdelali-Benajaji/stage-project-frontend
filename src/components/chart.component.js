import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/graph');
    const data = await response.json();
    const labels = data.labels;
    const datasets = data.datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor,
      borderColor: dataset.borderColor,
      borderWidth: dataset.borderWidth,
    }));
    setChartData({
      labels: labels,
      datasets: datasets,
    });
  };

  useEffect(() => {
    if (!chartData) {
      return;
    }

    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart('chart', {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    setChart(newChart);
  }, [chartData]);

  return (
    <canvas id="chart"></canvas>
  );
};

export default ChartComponent;
