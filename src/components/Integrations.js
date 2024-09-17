import React from 'react';

const Integrations = () => (
    <div className="p-6">
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow mb-4">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">API Keys</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="dark:text-white">Current API Key: ••••••••••••••••</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Generate New Key</button>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-700 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Webhooks</h3>
        <div className="mb-4">
          <label className="block mb-2 dark:text-white">Webhook URL</label>
          <input type="url" className="w-full p-2 border rounded" placeholder="https://example.com/webhook" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save Webhook</button>
      </div>
    </div>
  );

export default Integrations;
