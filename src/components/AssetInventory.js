import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AssetInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const assets = [
    { name: 'Web Server 1', category: 'Server', version: 'Apache 2.4.41', team: 'Infrastructure' },
    { name: 'Database 1', category: 'Database', version: 'MySQL 8.0', team: 'Data Management' },
    { name: 'Firewall', category: 'Network', version: 'Cisco ASA 9.8', team: 'Network Security' },
    { name: 'Load Balancer', category: 'Network', version: 'F5 BIG-IP 15.1', team: 'Infrastructure' },
    { name: 'Application Server 1', category: 'Server', version: 'Tomcat 9.0.37', team: 'Application Development' },
  ];

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <motion.div
        className="bg-gray-200 p-6 rounded-lg shadow-lg mb-6" // Light grey background
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Asset Inventory</h3> {/* Dark text */}

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-450 rounded-lg bg-white text-gray-900" // Light background and dark text
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-max bg-gray-300 rounded-lg overflow-hidden shadow-lg"> {/* Light grey background */}
            <thead className="bg-gray-300">
              <tr>
                <th className="text-left py-3 px-4 text-gray-900">Asset Name</th> {/* Dark text */}
                <th className="text-left py-3 px-4 text-gray-900">Category</th> {/* Dark text */}
                <th className="text-left py-3 px-4 text-gray-900">Version</th> {/* Dark text */}
                <th className="text-left py-3 px-4 text-gray-900">Responsible Team</th> {/* Dark text */}
              </tr>
            </thead>
            <tbody>
              {filteredAssets.length > 0 ? (
                filteredAssets.map((asset, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-gray-100 transition duration-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-100'}`} // Alternating light grey backgrounds
                  >
                    <td className="py-2 px-4 text-gray-900">{asset.name}</td> {/* Dark text */}
                    <td className="py-2 px-4 text-gray-900">{asset.category}</td> {/* Dark text */}
                    <td className="py-2 px-4 text-gray-900">{asset.version}</td> {/* Dark text */}
                    <td className="py-2 px-4 text-gray-900">{asset.team}</td> {/* Dark text */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-900">
                    No assets found
                  </td> {/* Dark text */}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default AssetInventory;
