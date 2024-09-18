import React, { useState } from 'react';

const Customization = () => {
  const [selectedSeverities, setSelectedSeverities] = useState({
    critical: true,
    high: true,
    medium: false,
    low: false,
  });
  
  const [email, setEmail] = useState('user@example.com');
  const [notifyByEmail, setNotifyByEmail] = useState(true);
  const [sources, setSources] = useState({
    oem: true,
    nvd: false,
    others: false,
  });

  const handleSeverityChange = (level) => {
    setSelectedSeverities({
      ...selectedSeverities,
      [level]: !selectedSeverities[level],
    });
  };

  const handleSourceChange = (source) => {
    setSources({
      ...sources,
      [source]: !sources[source],
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission (save customization settings)
    console.log('Submitted Settings:', {
      selectedSeverities,
      email,
      notifyByEmail,
      sources,
    });
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">Customization Settings</h2>

      {/* Alert Severity Settings */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6 shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Alert Severity Levels</h3>
        <div className="flex flex-wrap gap-4">
          {['critical', 'high', 'medium', 'low'].map((severity) => (
            <div key={severity}>
              <label className="flex items-center space-x-2 dark:text-white">
                <input
                  type="checkbox"
                  checked={selectedSeverities[severity]}
                  onChange={() => handleSeverityChange(severity)}
                  className="form-checkbox"
                />
                <span className="capitalize">{severity}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6 shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Notification Settings</h3>
        <label className="flex items-center mb-4 dark:text-white">
          <input
            type="checkbox"
            checked={notifyByEmail}
            onChange={() => setNotifyByEmail(!notifyByEmail)}
            className="form-checkbox"
          />
          <span className="ml-2">Notify me via Email</span>
        </label>
        {notifyByEmail && (
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          />
        )}
      </div>

      {/* Scraping Sources Settings */}
      <div className="bg-white dark:bg-gray-700 p-4 rounded mb-6 shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Sources to Monitor</h3>
        <div className="flex flex-wrap gap-4">
          {['oem', 'nvd', 'others'].map((source) => (
            <div key={source}>
              <label className="flex items-center space-x-2 dark:text-white">
                <input
                  type="checkbox"
                  checked={sources[source]}
                  onChange={() => handleSourceChange(source)}
                  className="form-checkbox"
                />
                <span className="capitalize">{source}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Customization;
