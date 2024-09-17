import React from 'react';

const AlertConfiguration = () => (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow mb-4">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Alert Thresholds</h3>
        {['Critical', 'High', 'Medium', 'Low'].map((severity) => (
          <div key={severity} className="mb-4">
            <label className="block mb-2 dark:text-white">{severity} Severity Threshold</label>
            <input type="range" className="w-full" min="0" max="100" />
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Business Hours</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 dark:text-white">Start Time</label>
            <input type="time" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-2 dark:text-white">End Time</label>
            <input type="time" className="w-full p-2 border rounded" />
          </div>
        </div>
      </div>
    </div>
  );

export default AlertConfiguration;
