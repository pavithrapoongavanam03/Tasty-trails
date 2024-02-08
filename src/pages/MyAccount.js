// MyAccount.js
import React from 'react';

const MyAccount = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Account</h1>

      {/* User Profile Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        {/* Display user profile information here */}
        <div className="flex items-center mb-4">
          <img
            className="rounded-full h-16 w-16 object-cover mr-4"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D" // Replace with user's profile image URL
            alt="Profile"
          />
          <div>
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        {/* Add more user details as needed */}
      </section>

      {/* Account Settings Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <p className="text-gray-700">john_doe123</p>
          {/* Add an option to change the username if needed */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <p className="text-gray-700">john.doe@example.com</p>
          {/* Add an option to change the email if needed */}
        </div>

        {/* Add more account settings options as needed */}
      </section>
    </div>
  );
};

export default MyAccount;
