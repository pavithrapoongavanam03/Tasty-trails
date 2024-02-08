// MyFavorites.js
import React from 'react';

const MyFavorites = () => {
  // Replace this with actual user data or fetch favorites from an API
  const favoriteFoodItems = [
    { id: 1, name: 'Pizza', restaurant: 'Pizzeria Italia', imageUrl: 'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-still-life-hd-wallpaper-preview.jpg' },
    { id: 2, name: 'Sushi', restaurant: 'Tokyo Sushi Bar', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: 'Burger', restaurant: 'Classic Burgers', imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D' },
    // Add more favorite food items as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">My Favorites</h1>

      {/* Display user's favorite food items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteFoodItems.map((item) => (
          <div key={item.id} className="mb-4">
            <img
              className="rounded-lg h-40 w-full object-cover mb-2"
              src={item.imageUrl}
              alt={item.name}
            />
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.restaurant}</p>
            {/* Add more details about the favorite food item if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFavorites;
