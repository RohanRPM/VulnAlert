import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../../backend/controllers/authController';
// import {loginUser} from '../api';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     // try {
//     //   const response = await fetch('http://localhost:5000/api/auth/login', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify({ username, password }),
//     //   });

//     //   if (!response.ok) {
//     //     throw new Error(`HTTP error! status: ${response.status}`);
//     //   }

//     //   const data = await response.json();
      
//     //   // Login successful
//     //   localStorage.setItem('token', data.token);
//     //   navigate('/dashboard'); // Redirect to /dashboard
//     // } catch (error) {
//     //   console.error('Login error:', error);
//     //   setError(error.message || 'An error occurred');
//     // }

//     try {
//       const response = await loginUser(username, password);
      
//       // Login successful
//       console.log("Hello");
//       localStorage.setItem('token', response.token);
//       navigate('/dashboard'); // Redirect to /dashboard
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">VulnAlert Login</h2>

//         {error && <div className="text-red-500 mb-4">{error}</div>}

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             if (username && password) {
//               handleLogin(); // Call handleLogin function
//             } else {
//               setError('Please fill out both fields.');
//             }
//           }}
//         >
//           <div className="mb-4">
//             <label className="block mb-2">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border rounded"
//               placeholder="Enter username"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block mb-2">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//               placeholder="Enter password"
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
const LoginPage = ({ onLogin }) => {
  const [showMFA, setShowMFA] = useState(false);
  const navigate = useNavigate();  // useNavigate hook for navigation

  const handleLogin = () => {
    // After successful login, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">VulnAlert Login</h2>
        {!showMFA ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowMFA(true);
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
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Next</button>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();  // Call handleLogin on form submission
            }}
          >
            <div className="mb-6">
              <label className="block mb-2">Multi-Factor Authentication Code</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter MFA code" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;