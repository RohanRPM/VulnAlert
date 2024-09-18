import React from 'react';
import { AlertCircle, AlertTriangle, AlertOctagon } from 'lucide-react'; // Import icons for different alert types
import { motion } from 'framer-motion';

// Define different alert types for demonstration purposes
const ALERT_TYPES = {
  critical: { icon: <AlertCircle size={20} />, color: 'bg-red-100 text-red-800' },
  high: { icon: <AlertTriangle size={20} />, color: 'bg-yellow-100 text-yellow-800' },
  medium: { icon: <AlertOctagon size={20} />, color: 'bg-blue-100 text-blue-800' },
};

const RecentAlerts = ({ alerts = [] }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-semibold mb-6 dark:text-white">Recent Alerts</h3>
    <ul>
      {alerts.length > 0 ? (
        alerts.map((alert, index) => {
          const { type, message } = alert;
          const { icon, color } = ALERT_TYPES[type] || {};
          return (
            <li
              key={index}
              className={`flex items-start mb-4 pb-2 border-b last:border-b-0 dark:text-white ${color} p-4 rounded-lg`}
            >
              <div className="mr-4">
                {icon}
              </div>
              <div>
                {message}
              </div>
            </li>
          );
        })
      ) : (
        <li className="text-center dark:text-white">No recent alerts</li>
      )}
    </ul>
  </motion.div>
);

export default RecentAlerts;
