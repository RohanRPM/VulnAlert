import React from 'react';
import Widget from './Widget';
import RecentAlerts from './RecentAlerts';

const Dashboard = () => (
  <div className="p-6">
    <div className="grid grid-cols-3 gap-4 mb-6">
      <Widget title="Total Alerts" value="1,234" change={5} />
      <Widget title="Critical Alerts" value="12" change={-2} />
      <Widget title="Sources Monitored" value="56" change={3} />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <RecentAlerts />
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">System Status</h3>
        <p className="dark:text-white">All systems operational</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
