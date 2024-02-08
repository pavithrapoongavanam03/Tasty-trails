// Help.js
import React from 'react';

const Help = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Help Center</h1>

      {/* Frequently Asked Questions (FAQs) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2>
        {/* List common questions and answers */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Q: How do I place an order?</p>
          <p className="text-gray-600">A: You can place an order by...</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Q: How can I track my order?</p>
          <p className="text-gray-600">A: To track your order, please...</p>
        </div>
        {/* Add more FAQs as needed */}
      </section>

      {/* Contact Support */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
        <p className="text-lg mb-4">If you couldn't find the answers you were looking for, feel free to contact our support team.</p>

        {/* Add a contact form or provide contact information */}
        <div className="mb-4">
          <p className="text-lg font-semibold">Email: support@example.com</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Phone: +1 (123) 456-7890</p>
        </div>
        {/* Add more contact options as needed */}
      </section>
    </div>
  );
};

export default Help;

