
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VibrationChart = () => {
  const sampleData = [
    {"ts": "2024-01-21T15:00:00Z", "machine_status": 1},
    {"ts": "2024-01-21T15:00:01Z", "machine_status": 1},
    {"ts": "2024-01-21T15:00:02Z", "machine_status": 1},
    {"ts": "2024-01-21T15:00:03Z", "machine_status": 1},
    {"ts": "2024-01-21T15:00:04Z", "machine_status": 0},
    {"ts": "2024-01-21T15:00:05Z", "machine_status": 1},
    
  ];

  const data = {
    labels: sampleData.map(data => new Date(data.ts).toLocaleTimeString()), // Time labels for x-axis
    datasets: [
      {
        label: 'Machine Status',
        data: sampleData.map(data => data.machine_status),
        backgroundColor: sampleData.map(data => data.machine_status === 1 ? 'green' : 'yellow'),
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'x', 
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        },
        title: {
          display: true,
          text: 'Status (0 or 1)'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <h2>Machine Status Over Time</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VibrationChart;
