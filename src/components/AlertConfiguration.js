import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AlertConfiguration = () => {
  const [thresholds, setThresholds] = useState({
    Critical: 50,
    High: 30,
    Medium: 20,
    Low: 10
  });

  const handleThresholdChange = (severity, value) => {
    setThresholds({
      ...thresholds,
      [severity]: value
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <motion.div
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Alert Thresholds</h3>
        {['Critical', 'High', 'Medium', 'Low'].map((severity) => (
          <div key={severity} className="mb-4">
            <label className="block text-sm mb-1 dark:text-white">{severity} Severity Threshold</label>
            <input
              type="range"
              min="0"
              max="100"
              value={thresholds[severity]}
              onChange={(e) => handleThresholdChange(severity, e.target.value)}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between mt-1 text-xs text-gray-600 dark:text-gray-300">
              <span>0</span>
              <span>{thresholds[severity]}</span>
              <span>100</span>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 dark:text-white">Business Hours</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 dark:text-white">Start Time</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 dark:text-white">End Time</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AlertConfiguration;
