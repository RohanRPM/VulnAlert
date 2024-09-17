import React from 'react';

const Reports = () => (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow mb-4">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Vulnerability Trends</h3>
        <div className="h-64 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
          [Placeholder for Vulnerability Trend Chart]
        </div>
      </div>
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

export default Reports;
