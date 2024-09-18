import React, { useState } from 'react';
import { AiOutlineClockCircle, AiOutlineMail, AiOutlineFileText, AiOutlineEye } from 'react-icons/ai';

// Sample data for audit logs
const logs = [
  {
    id: 1,
    timestamp: '2024-09-15 10:34:22',
    action: 'Scraped vulnerability data from OEM website',
    user: 'System',
    details: 'Scraped vulnerability info from Google OEM website. Severity: High.',
  },
  {
    id: 2,
    timestamp: '2024-09-15 11:00:15',
    action: 'Email sent',
    user: 'System',
    details: 'Notification email sent to user@example.com regarding Critical vulnerabilities.',
  },
  {
    id: 3,
    timestamp: '2024-09-16 09:10:08',
    action: 'Report generated',
    user: 'Admin',
    details: 'Monthly Vulnerability Summary report generated and downloaded by Admin.',
  },
  {
    id: 4,
    timestamp: '2024-09-16 09:30:40',
    action: 'Monitored source added',
    user: 'Admin',
    details: 'Admin added new OEM website for vulnerability monitoring.',
  },
];

const AuditLogs = () => {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedLogs = [...logs].sort((a, b) => {
    return sortOrder === 'asc'
      ? new Date(a.timestamp) - new Date(b.timestamp)
      : new Date(b.timestamp) - new Date(a.timestamp);
  });

  const toggleSortOrder = () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 dark:text-white flex items-center">
        <AiOutlineEye className="mr-2 text-blue-500" /> Audit Logs
      </h2>
      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-300 cursor-pointer" onClick={toggleSortOrder}>
                Timestamp {sortOrder === 'asc' ? '🔼' : '🔽'}
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-300">Action</th>
              <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-300">User</th>
              <th className="px-4 py-2 text-left text-sm font-semibold dark:text-gray-300">Details</th>
            </tr>
          </thead>
          <tbody>
            {sortedLogs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-100 dark:hover:bg-gray-600 border-b">
                <td className="px-4 py-2 dark:text-gray-200 flex items-center">
                  <AiOutlineClockCircle className="mr-2 text-gray-500 dark:text-gray-400" />
                  {log.timestamp}
                </td>
                <td className="px-4 py-2 dark:text-gray-200">
                  {log.action.includes('Email') ? (
                    <AiOutlineMail className="inline-block mr-1 text-blue-500 dark:text-blue-400" />
                  ) : log.action.includes('Report') ? (
                    <AiOutlineFileText className="inline-block mr-1 text-green-500 dark:text-green-400" />
                  ) : (
                    <AiOutlineClockCircle className="inline-block mr-1 text-gray-500 dark:text-gray-400" />
                  )}
                  {log.action}
                </td>
                <td className="px-4 py-2 dark:text-gray-200">{log.user}</td>
                <td className="px-4 py-2 dark:text-gray-200">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLogs;
