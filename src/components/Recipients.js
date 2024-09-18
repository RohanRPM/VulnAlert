import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2 } from 'lucide-react'; // Import icons for actions

const Recipients = ({ recipients = [] }) => (
  <motion.div
    className="p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 dark:text-white">Alert Recipients</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="text-left py-3 px-4 dark:text-white">Name</th>
              <th className="text-left py-3 px-4 dark:text-white">Email</th>
              <th className="text-left py-3 px-4 dark:text-white">Group</th>
              <th className="text-left py-3 px-4 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipients.length > 0 ? (
              recipients.map((recipient, index) => (
                <tr
                  key={index}
                  className="border-t dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
                >
                  <td className="py-4 px-4 dark:text-white">{recipient.name}</td>
                  <td className="py-4 px-4 dark:text-white">{recipient.email}</td>
                  <td className="py-4 px-4 dark:text-white">{recipient.group}</td>
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
                <td colSpan="4" className="py-4 text-center dark:text-white">
                  No recipients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </motion.div>
);

export default Recipients;
