/* eslint-disable no-unused-vars */
import React from "react";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import Delivery from "./components/Delivery";
import 'tailwindcss/tailwind.css'
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import {Link, Route,Routes,Router } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Contact from "./pages/contact";
import MyAccount from "./pages/MyAccount";
import MyFavorites from "./pages/MyFavorites";
import MyWallet from "./pages/MyWallet";
import Help from "./pages/Help";
import MyCart from "./pages/MyCart";


function App() {

  return (
      <>

      <TopNav/>
     
      {/* <AboutUs/> */}
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Meal" element={<Meal/>}/>
        <Route path="/Aboutus" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/MyAccount" element={<MyAccount/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
        <Route path="/MyFavorites" element={<MyFavorites/>}/>
        <Route path="/MyWallet" element={<MyWallet/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/MyCart" element={<MyCart/>}/>

      
      </Routes>
      
      </>
  )
}

export default App

