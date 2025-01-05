import React, { useState, useEffect } from 'react';
import LoginSignupPage from './Signuppage';

const Profile = () => {
  const [user, setUser] = useState(null);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data from server or local storage
      setUser({
        name: 'John Doe',
        email: 'johndoe@example.com',
      });
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);  // Set logged-in user data
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {!user ? (
        <LoginSignupPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          {/* Profile Info Section */}
          <section className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </section>

          {/* Order History Section */}
          <section className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <ul>
              <li className="border-b py-2">
                Order #1234 - <span className="text-gray-600">Completed</span>
              </li>
              <li className="border-b py-2">
                Order #5678 - <span className="text-gray-600">Shipped</span>
              </li>
            </ul>
          </section>

          {/* Settings Section */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="flex flex-col gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Change Password
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Delete Account
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Profile;
