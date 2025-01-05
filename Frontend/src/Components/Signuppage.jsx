import React, { useState } from 'react';
import axios from 'axios';

function LoginSignupPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email: formData.email,
        password: formData.password,
      });
      console.log("Login successful:", response.data);
      localStorage.setItem('token', response.data.token);  // Save token to local storage
      onLoginSuccess(response.data.user);  // Call parent function with user data
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log("Signup successful:", response.data);
      onLoginSuccess(response.data.user);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && (
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded"
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleForm} className="text-blue-500 hover:underline">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginSignupPage;
