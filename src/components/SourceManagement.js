import React from 'react';
import PropTypes from 'prop-types'; // Import for prop validation
import { Edit, Trash2 } from 'lucide-react';

const SourceManagement = ({ onAddNew, sources = [] }) => (
  <div className="p-6 fade-in">
    {/* Card container for the Monitored Sources table */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-6 dark:text-white">Monitored Sources</h3>

      {/* Table for displaying sources */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="text-left py-3 px-4 dark:text-white">Source Name</th>
              <th className="text-left py-3 px-4 dark:text-white">Type</th>
              <th className="text-left py-3 px-4 dark:text-white">Status</th>
              <th className="text-left py-3 px-4 dark:text-white">Last Checked</th>
              <th className="text-left py-3 px-4 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sources.length > 0 ? (
              sources.map((source, index) => (
                <tr key={index} className="border-t dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200">
                  <td className="py-4 px-4 dark:text-white">{source.name}</td>
                  <td className="py-4 px-4 dark:text-white">{source.type}</td>
                  <td className={`py-4 px-4 dark:text-white ${source.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {source.status}
                  </td>
                  <td className="py-4 px-4 dark:text-white">{source.lastChecked}</td>
                  <td className="py-4 px-4 flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700 transition duration-150">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition duration-150">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center dark:text-white">
                  No sources found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    {/* Add New Source button */}
    <button
      onClick={onAddNew}
      className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
    >
      Add New Source
    </button>
  </div>
);

SourceManagement.propTypes = {
  onAddNew: PropTypes.func.isRequired,
  sources: PropTypes.array, // Ensure sources is an array
};

SourceManagement.defaultProps = {
  sources: [], // Default value to prevent errors
};

export default SourceManagement;
