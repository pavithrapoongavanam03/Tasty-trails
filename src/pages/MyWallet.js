// MyWallet.js
import React from 'react';

const MyWallet = () => {
  // Replace this with actual user data or fetch wallet information from an API
  const walletDetails = {
    balance: 150.00,
    transactions: [
      { id: 1, type: 'Credit', amount: 50.00, date: '2023-01-15', description: 'Added funds' },
      { id: 2, type: 'Debit', amount: 30.00, date: '2023-02-01', description: 'Order at Pizza Haven' },
      { id: 3, type: 'Credit', amount: 20.00, date: '2023-02-10', description: 'Promotional bonus' },
      // Add more transactions as needed
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Wallet</h1>

      {/* Display user's wallet information */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Current Balance: ${walletDetails.balance.toFixed(2)}</p>
      </div>

      {/* Display user's recent transactions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
        <ul>
          {walletDetails.transactions.map((transaction) => (
            <li key={transaction.id} className="mb-2">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">{transaction.type}</p>
                  <p className="text-gray-600">{transaction.date}</p>
                  <p className="text-gray-600">{transaction.description}</p>
                </div>
                <p className={`${transaction.type === 'Credit' ? 'text-green-500' : 'text-red-500'} text-lg font-semibold`}>
                  {transaction.type === 'Credit' ? '+' : '-'} ${transaction.amount.toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyWallet;
