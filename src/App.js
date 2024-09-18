import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import SourceManagement from './components/SourceManagement';
import AlertConfiguration from './components/AlertConfiguration';
import Recipients from './components/Recipients';
import Reports from './components/Reports';
import Integrations from './components/Integrations';
import AssetInventory from './components/AssetInventory';
import Prototype from './components/Prototype'; // Import your Prototype component
import Customization from './components/Customization';
import AuditLogs from './components/AuditLogs';
import Settings from './components/Settings';
import './index.css';
// import { loginUser } from './api'; 

const App = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sources, setSources] = useState([]); // Initialize sources as an empty array

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleAddNewSource = () => {
    // Handle adding new sources logic here
    const newSource = {
      name: 'New Source',
      type: 'API',
      status: 'Active',
      lastChecked: new Date().toLocaleString(),
    };
    setSources([...sources, newSource]);
  };
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleLogin = async () => {
  //   try {
  //     const data = await loginUser(username, password);
  //     // Handle successful login (e.g., store token, redirect user)
  //     console.log('Login successful:', data);
  //     // Example: localStorage.setItem('token', data.token);
  //   } catch (error) {
  //     setError('Invalid credentials');
  //   }
  // };



// Demo data for testing
const demoRecipients = [
  { name: 'John Doe', email: 'john.doe@example.com', group: 'Network Team' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', group: 'Application Security' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', group: 'Management' },
  { name: 'Alice Brown', email: 'alice.brown@example.com', group: 'Development' },
  { name: 'Michael White', email: 'michael.white@example.com', group: 'Operations' },
];

  return (
    <Router>
      <div className={`flex ${isDarkMode ? 'dark' : ''}`}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="flex-1">
          <Header
            title={activePage}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <div className="p-6">
            <Routes>
            <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route 
                path="/source-management" 
                element={<SourceManagement onAddNew={handleAddNewSource} sources={sources} />} 
              />
              <Route path="/alert-configuration" element={<AlertConfiguration />} />
              <Route path="/recipients" element={<Recipients recipients={demoRecipients}/>} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/asset-inventory" element={<AssetInventory />} />
              <Route path="/prototype" element={<Prototype />} />
              <Route path="/customization" element={<Customization />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
