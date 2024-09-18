import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@headlessui/react';
import { useForm } from 'react-hook-form';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [frequency, setFrequency] = useState('daily');
  const { register, handleSubmit } = useForm();

  const handleDarkModeToggle = () => setDarkMode(!darkMode);
  const handleEmailNotificationsToggle = () => setEmailNotifications(!emailNotifications);
  const handleFrequencyChange = (e) => setFrequency(e.target.value);
  const onSubmit = (data) => {
    console.log('Settings saved:', data);
  };

  return (
    <motion.div
      className={`flex flex-col h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-extrabold mb-8">Settings</h2>
      
      {/* Settings Sections */}
      <div className="flex flex-wrap gap-8">
        
        {/* Profile Section */}
        <div className={`flex-1 p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-6">Profile Settings</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  {...register('name')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                  {...register('email')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="New Password"
                  {...register('password')}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>

        {/* Notification Section */}
        <div className={`flex-1 p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-6">Notification Settings</h3>
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium mr-4">Email Notifications</span>
            <Switch
              checked={emailNotifications}
              onChange={handleEmailNotificationsToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${emailNotifications ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-5' : 'translate-x-1'}`}
              />
            </Switch>
          </div>
        </div>

        {/* System Settings */}
        <div className={`flex-1 p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-6">System Settings</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium mb-2">Vulnerability Check Frequency</label>
              <select
                value={frequency}
                onChange={handleFrequencyChange}
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200 mt-4"
            >
              Save Settings
            </button>
          </form>
        </div>

        {/* Theme Settings */}
        <div className={`flex-1 p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h3 className="text-xl font-semibold mb-6">Theme Settings</h3>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-4">Dark Mode</span>
            <Switch
              checked={darkMode}
              onChange={handleDarkModeToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-1'}`}
              />
            </Switch>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Settings;
