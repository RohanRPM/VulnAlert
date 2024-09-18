import React from 'react';
import Widget from './Widget';
import RecentAlerts from './RecentAlerts';
import { useSpring, animated } from 'react-spring';

const Dashboard = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 120, friction: 14 }
  });

  return (
    <div className="p-6  min-h-screen">
      {/* Widget section with dynamic effect */}
      <animated.div style={fadeIn}>

      </animated.div>

      {/* Alerts and System Status */}
      <animated.div style={fadeIn}>
        <div className="grid grid-cols-2 gap-6">
          <RecentAlerts />
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">System Status</h3>
            <p className="dark:text-white text-lg flex items-center">
              <span className="text-green-500 mr-2">✔</span> All systems operational
            </p>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Dashboard;
