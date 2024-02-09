import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center' >Quick Delivery App</h3>
   <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt="pic"></img>
     <div className='flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold'>Get the App</p>
      <h1 className='md-text-4xl sm:text-2xl text-2xl font-bold py-2'> Limitless Convenience on-demand</h1>
      <p className='justify-left'>
      "Welcome to <b>TastyTrail</b> - Where Flavor Meets Convenience! Discover a world of delectable cuisine at your fingertips. W
      ith a few taps, you can explore a diverse menu of mouthwatering dishes, from local favorites 
      to international delights. Our commitment to quality, freshness, and speedy delivery ensures that every
       meal you order is an experience worth savoring. So, why wait? Let's embark on a culinary journey, 
       one order at a time!
      </p>
      <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4'>Get Started</button>

     </div>
   </div>
    </div> 
  )
}

export default Delivery