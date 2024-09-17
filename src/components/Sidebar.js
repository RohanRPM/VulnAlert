import React from 'react';
import { Bell, Settings, Users, List, BarChart2, Key, Sliders, FileText, Home, Plus, X, Moon, Sun, Lock, Shield, Database, Activity } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage }) => (
  <div className="w-64 bg-gray-800 h-screen p-4 text-white">
    <h1 className="text-xl font-bold mb-8">VulnAlert</h1>
    <nav>
      {[
        { icon: <Home size={20} />, label: 'Dashboard' },
        { icon: <List size={20} />, label: 'Source Management' },
        { icon: <Bell size={20} />, label: 'Alert Configuration' },
        { icon: <Users size={20} />, label: 'Recipients' },
        { icon: <BarChart2 size={20} />, label: 'Reports' },
        { icon: <Key size={20} />, label: 'Integrations' },
        { icon: <Database size={20} />, label: 'Asset Inventory' },
        { icon: <Sliders size={20} />, label: 'Customization' },
        { icon: <Activity size={20} />, label: 'Audit Logs' },
        { icon: <Settings size={20} />, label: 'Settings' },
      ].map((item, index) => (
        <div 
          key={index} 
          className={`flex items-center mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded ${activePage === item.label ? 'bg-gray-700' : ''}`}
          onClick={() => setActivePage(item.label)}
        >
          {item.icon}
          <span className="ml-2">{item.label}</span>
        </div>
      ))}
    </nav>
  </div>
);

export default Sidebar;
