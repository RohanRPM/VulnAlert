import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const Integrations = () => {
  const [apiKey, setApiKey] = useState('•••••••••••••••');
  const [webhookUrl, setWebhookUrl] = useState('https://example.com/webhook');
  const [feedback, setFeedback] = useState(null);

  const handleGenerateNewKey = () => {
    // Simulate API key generation
    setApiKey('NewGeneratedAPIKey123456');
    setFeedback({ type: 'success', message: 'New API key generated successfully!' });
  };

  const handleSaveWebhook = () => {
    // Simulate saving webhook URL
    setFeedback({ type: 'success', message: 'Webhook URL saved successfully!' });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Feedback Message */}
      {feedback && (
        <div className={`mb-4 p-4 rounded ${feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {feedback.type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
          <span className="ml-2">{feedback.message}</span>
        </div>
      )}

      {/* API Keys Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 dark:text-white">API Keys</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="dark:text-white">Current API Key: {apiKey}</span>
          <button
            onClick={handleGenerateNewKey}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Generate New Key
          </button>
        </div>
      </motion.div>

      {/* Webhooks Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 dark:text-white">Webhooks</h3>
        <div className="mb-4">
          <label className="block mb-2 dark:text-white">Webhook URL</label>
          <input
            type="url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="https://example.com/webhook"
          />
        </div>
        <button
          onClick={handleSaveWebhook}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save Webhook
        </button>
      </motion.div>
    </div>
  );
};

export default Integrations;
