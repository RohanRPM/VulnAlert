import React from 'react';
import PropTypes from 'prop-types'; // Import for prop validation

const SourceManagement = ({ onAddNew, sources = [] }) => (
  <div className="p-6">
    {/* Card container for the Monitored Sources table */}
    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow mb-4">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Monitored Sources</h3>

      {/* Table for displaying sources */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left dark:text-white py-2">Source Name</th>
            <th className="text-left dark:text-white py-2">Type</th>
            <th className="text-left dark:text-white py-2">Status</th>
            <th className="text-left dark:text-white py-2">Last Checked</th>
          </tr>
        </thead>
        <tbody>
          {sources.length > 0 ? (
            sources.map((source, index) => (
              <tr key={index} className="border-t dark:border-gray-600">
                <td className="py-2 dark:text-white">{source.name}</td>
                <td className="py-2 dark:text-white">{source.type}</td>
                <td className={`py-2 dark:text-white ${source.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                  {source.status}
                </td>
                <td className="py-2 dark:text-white">{source.lastChecked}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 text-center dark:text-white">
                No sources found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    {/* Add New Source button */}
    <button
      onClick={onAddNew}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
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
