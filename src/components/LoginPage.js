import React, { useState } from 'react';
import { loginUser } from '../api';

const LoginPage = () => {
  const [showMFA, setShowMFA] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mfaCode, setMfaCode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const data = await loginUser(username, password); // Call the login API with username and password
  
      // Check if MFA is required (adjust according to your backend response)
      if (data.mfaRequired) {
        // MFA is required, show MFA form
        setShowMFA(true);
      } else {
        // Login successful, handle success
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token); // Store token or handle it as needed
        // Redirect user or update state as necessary
        // Example: history.push('/dashboard'); // If using react-router
      }
    } catch (error) {
      console.error('Login error:', error); // Log error for debugging
      setError(error.message); // Display error message to user
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">VulnAlert Login</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {!showMFA ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (username && password) {
                console.log('Username and password form submitted');
                setShowMFA(true); // Proceed to MFA form
              } else {
                setError('Please fill out both fields.');
              }
            }}
          >
            <div className="mb-4">
              <label className="block mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              Next
            </button>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (mfaCode) {
                console.log('MFA form submitted');
                handleLogin(); // Call the login handler with MFA
              } else {
                setError('Please enter the MFA code.');
              }
            }}
          >
            <div className="mb-6">
              <label className="block mb-2">Multi-Factor Authentication Code</label>
              <input
                type="text"
                value={mfaCode}
                onChange={(e) => setMfaCode(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter MFA code"
              />
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
