import React from 'react';

const Recipients = () => (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Alert Recipients</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left dark:text-white">Name</th>
              <th className="text-left dark:text-white">Email</th>
              <th className="text-left dark:text-white">Group</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'John Doe', email: 'john@example.com', group: 'Network Team' },
              { name: 'Jane Smith', email: 'jane@example.com', group: 'Application Security' },
              { name: 'Bob Johnson', email: 'bob@example.com', group: 'Management' },
            ].map((recipient, index) => (
              <tr key={index}>
                <td className="dark:text-white">{recipient.name}</td>
                <td className="dark:text-white">{recipient.email}</td>
                <td className="dark:text-white">{recipient.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

export default Recipients;
