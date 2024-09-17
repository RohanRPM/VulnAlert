import React from 'react';

const AssetInventory = () => (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Asset Inventory</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left dark:text-white">Asset Name</th>
              <th className="text-left dark:text-white">Category</th>
              <th className="text-left dark:text-white">Version</th>
              <th className="text-left dark:text-white">Responsible Team</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Web Server 1', category: 'Server', version: 'Apache 2.4.41', team: 'Infrastructure' },
              { name: 'Database 1', category: 'Database', version: 'MySQL 8.0', team: 'Data Management' },
              { name: 'Firewall', category: 'Network', version: 'Cisco ASA 9.8', team: 'Network Security' },
              { name: 'Load Balancer', category: 'Network', version: 'F5 BIG-IP 15.1', team: 'Infrastructure' },
              { name: 'Application Server 1', category: 'Server', version: 'Tomcat 9.0.37', team: 'Application Development' },
            ].map((asset, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 dark:text-white">{asset.name}</td>
                <td className="py-2 dark:text-white">{asset.category}</td>
                <td className="py-2 dark:text-white">{asset.version}</td>
                <td className="py-2 dark:text-white">{asset.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

export default AssetInventory;
