import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, Users, List, BarChart2, Key, Sliders,  Home, Database, Activity } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage }) => (
  <div className="w-64 bg-gray-800 h-screen p-4 text-white">
    <h1 className="text-xl font-bold mb-8">VulnAlert</h1>
    <nav>
      {[{
        path: '/dashboard',
        icon: <Home size={20} />,
        label: 'Dashboard',
      }, {
        path: '/source-management',
        icon: <List size={20} />,
        label: 'Source Management',
      }, {
        path: '/alert-configuration',
        icon: <Bell size={20} />,
        label: 'Alert Configuration',
      }, {
        path: '/recipients',
        icon: <Users size={20} />,
        label: 'Recipients',
      }, {
        path: '/reports',
        icon: <BarChart2 size={20} />,
        label: 'Reports',
      }, {
        path: '/integrations',
        icon: <Key size={20} />,
        label: 'Integrations',
      }, {
        path: '/asset-inventory',
        icon: <Database size={20} />,
        label: 'Asset Inventory',
      }, {
        path: '/customization',
        icon: <Sliders size={20} />,
        label: 'Customization',
      }, {
        path: '/audit-logs',
        icon: <Activity size={20} />,
        label: 'Audit Logs',
      }, {
        path: '/settings',
        icon: <Settings size={20} />,
        label: 'Settings',
      }].map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`flex items-center mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded ${activePage === item.label ? 'bg-gray-700' : ''}`}
          onClick={() => setActivePage(item.label)}
        >
          {item.icon}
          <span className="ml-2">{item.label}</span>
        </Link>
      ))}
    </nav>
  </div>
);

export default Sidebar;
