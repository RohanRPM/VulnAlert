import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Reports = () => {
  // Pie Chart Data (Vulnerability Severity Distribution)
  const pieData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Vulnerabilities',
        data: [25, 40, 20, 15], // Sample data: Critical, High, Medium, Low vulnerabilities
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0'],
      },
    ],
  };

  // Line Graph Data (Vulnerability Trend Over Time)
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Example months
    datasets: [
      {
        label: 'Critical',
        data: [3, 5, 8, 10, 7, 6],
        borderColor: '#FF6384',
        fill: false,
      },
      {
        label: 'High',
        data: [6, 7, 9, 12, 10, 8],
        borderColor: '#FFCE56',
        fill: false,
      },
      {
        label: 'Medium',
        data: [10, 8, 7, 6, 8, 7],
        borderColor: '#36A2EB',
        fill: false,
      },
      {
        label: 'Low',
        data: [5, 4, 3, 6, 5, 4],
        borderColor: '#4BC0C0',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Flexbox container to display Pie and Line graph side by side */}
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Pie Chart Section */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex-1 min-w-[300px]">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Vulnerability Severity Distribution</h3>
          <div className="h-64">
            <Pie data={pieData} />
          </div>
        </div>

        {/* Line Graph Section */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex-1 min-w-[300px]">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Vulnerability Trend Over Time</h3>
          <div className="h-64">
            <Line data={lineData} />
          </div>
        </div>
      </div>

      {/* Recent Reports Section */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Recent Reports</h3>
        <ul>
          {['Monthly Vulnerability Summary', 'Critical Alerts Report', 'Source Performance Analysis'].map((report, index) => (
            <li key={index} className="mb-2 pb-2 border-b last:border-b-0 flex justify-between items-center">
              <span className="dark:text-white">{report}</span>
              <button className="text-blue-500">Download</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reports;
