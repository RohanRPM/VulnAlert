import React from 'react';

const Widget = ({ title, value, change }) => (
  <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
    <h3 className="text-lg font-semibold mb-2 dark:text-white">{title}</h3>
    <p className="text-2xl font-bold dark:text-white">{value}</p>
    <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
    </p>
  </div>
);

export default Widget;
