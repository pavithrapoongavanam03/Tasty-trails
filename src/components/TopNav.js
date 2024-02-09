import React, { useState } from 'react'
import{AiOutlineMenu, AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import { BsFillCartFill} from 'react-icons/bs'
import {FaGoogleWallet} from 'react-icons/fa'
import {MdHelp,MdAccountCircle,MdDeliveryDining,MdFavorite} from 'react-icons/md'
import { Link ,NavLink} from 'react-router-dom'

const TopNav = () => {
  const [sideNav, setSideNav]=useState(false)
  console.log(sideNav )
  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=> setSideNav(!sideNav)}   className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            
    </div> 
    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Tasty
    <span className='font-bold'>Trail</span></h1>
    <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-{14px}'>
        <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
        <p className='p-2 text-bold'>Delivery </p>
    </div>
    <nav className='hidden lg:flex justify-between item-center px-4 pt-1'>
    <ul className="flex space-x-2">
    <li className='inline-block border font-semibold rounded-full py-2 px-4 bg-orange-700  hover:bg-orange-600  text-white'>
                    <Link to='/Home'>Home</Link>
                    </li>
                    <li className='inline-block border font-semibold rounded-full py-2 px-4 bg-orange-700  hover:bg-orange-600  text-white'>
                    <Link to='/Meal'>Menu</Link>
                    </li>
                    <li className='inline-block border font-semibold rounded-full py-2 px-4 bg-orange-700  hover:bg-orange-600  text-white'>
                    <Link to='/Aboutus'>AboutUs</Link>
                    </li>
                    <li className='inline-block border font-semibold rounded-full py-2 px-4 bg-orange-700  hover:bg-orange-600  text-white'>
                    <Link to='/contact'>Contact</Link>
                    </li>
                    </ul>
    </nav>
    </div>
    <div className='bg-gray-200 rounded-full flex items-center px-2  w-[200px] sm:w0[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25}/>
          <input className='bg-transparent p-2 w-full focus:outline-none' 
          type='text' 
          placeholder='search meals'/>
    </div>
    <button className='bg-orange-700 text-white font-semibold md:flex items-center rounded-3xl px-2 py-2'>
       <BsFillCartFill size={25}/> 
    
                   
                    <Link to='/MyCart'>Cart</Link>
                    
       
    </button>{
       sideNav ?( <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
       onClick={()=>setSideNav(!sideNav)}></div>
       ):("")
    } 
        <div className={
          sideNav 
          ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
          : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
        ><AiOutlineClose onClick={()=> setSideNav(!sideNav)} size={25}
        className='absolute right-4 top-4 cursor-pointer'/>
          <h2 className='text-2xl p-4'>Tasty<span className='text-orange-700 font-bold'>Trail</span></h2>
          <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex'>
                        <MdAccountCircle size={25}
                        className='mr-4 text-white bg-black rounded-full'/>
                        <NavLink to='/MyAccount'>My Account</NavLink>
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdDeliveryDining size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            <NavLink to='/Delivery'>Delivery</NavLink>
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdFavorite size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            <NavLink to='/MyFavorites'>My Favorites</NavLink>
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaGoogleWallet size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            <NavLink to='/MyWallet'>My Wallet</NavLink>
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdHelp size={25}
                            className='mr-4 text-white bg-black rounded-full'/>
                            <NavLink to='/Help'>Help</NavLink>
                        </li>
            

            </ul>
          </nav>
        </div>
    </div>
  )
}

export default TopNav