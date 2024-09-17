import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [showMFA, setShowMFA] = useState(false);

  // Debugging log to check state
  console.log('Show MFA:', showMFA);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">VulnAlert Login</h2>

        {!showMFA ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Username and password form submitted'); // Check if this gets logged
              setShowMFA(true); // Update state to show MFA form
            }}
          >
            <div className="mb-4">
              <label className="block mb-2">Username</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter username" />
            </div>
            <div className="mb-6">
              <label className="block mb-2">Password</label>
              <input type="password" className="w-full p-2 border rounded" placeholder="Enter password" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              Next
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('MFA form submitted'); // Check if this gets logged
              onLogin(); // Call the onLogin prop to handle successful login
            }}
          >
            <div className="mb-6">
              <label className="block mb-2">Multi-Factor Authentication Code</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter MFA code" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
