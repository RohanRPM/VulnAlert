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
import './index.css';

const App = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleLogin = () => {
    // Handle successful login, e.g., redirect to the dashboard
    window.location.href = '/dashboard';
  };
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
              <Route path="/" element={<LoginPage onLogin={() => {handleLogin();}} />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/source-management" element={<SourceManagement onAddNew={() => { /* Handle add new */ }} />} />
              <Route path="/alert-configuration" element={<AlertConfiguration />} />
              <Route path="/recipients" element={<Recipients />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/asset-inventory" element={<AssetInventory />} />
              <Route path="/prototype" element={<Prototype />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
