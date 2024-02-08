// MyCart.js
import React from 'react';

const  MyCart = () => {
  // Replace this with actual cart data or fetch it from an API
  const cartItems = [
    { id: 1, name: 'Pizza', price: 12.99, quantity: 2, image: "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" },
    { id: 2, name: 'Burger', price: 8.49, quantity: 1, image: "https://img.freepik.com/free-photo/grilled-cheeseburger-sesame-bun-with-fresh-toppings-generative-ai_188544-12325.jpg" },
    // Add more cart items as needed
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Cart</h1>

      {/* Cart items */}
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
          <div className="flex items-center">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4" />
            <div>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
          </div>
          <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}

      {/* Total price */}
      <div className="mt-4">
        <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MyCart;
