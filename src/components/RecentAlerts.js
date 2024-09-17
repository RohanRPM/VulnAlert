import React from 'react';

const RecentAlerts = () => (
    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Recent Alerts</h3>
      <ul>
        {['Critical vulnerability in OpenSSL', 'High severity issue in Apache', 'Medium risk in MySQL'].map((alert, index) => (
          <li key={index} className="mb-2 pb-2 border-b last:border-b-0 dark:text-white">{alert}</li>
        ))}
      </ul>
    </div>
  );

export default RecentAlerts;
