import React, { useState } from 'react'


import logo from './Assets/logo.png';
import cart_icon from './Assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [Menu, setMenu] = useState('Shop');

  return (
    <div className='flex justify-around p-5 bg-gray-200  font-custom-poppin'> 
      <div className="nav-logo flex  gap-2 ">
        <img src={logo} alt='logo' width={50} height={50}/>
        <p className='text-lg flex font-bold items-center  '>SHOPPER</p>
      </div>

      <ul className="nav-menu flex gap-6 text-sm md:text-lg  ">
        <li onClick={() => setMenu('Shop')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Shop') ? 'border-b-2 border-gray-500' : ''}`}>
          <Link to='/'>Shop</Link></li>
        <li onClick={() => setMenu('Men')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Men') ? 'border-b-2 border-gray-500' : ''}`}>
          <Link  to='/mens'>Mens</Link></li>
        <li onClick={() => setMenu('Women')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Women') ? 'border-b-2 border-gray-500' : ''}`}>
          <Link to='/womens'>Womens</Link></li>
        <li onClick={() => setMenu('Kids')} className={`flex items-center cursor-pointer font-medium ${(Menu === 'Kids') ? 'border-b-2 border-gray-500' : ''}`}>
          <Link to='/kids'>Kids</Link></li>
      </ul>

      <div onClick={() => setMenu(' ')} className="nav-login-cart flex  "> 
        <button  className='border-gray-500 border-2 rounded-full px-5  text-base 
        font-semibold'>  
          <Link to='/login'>Login</Link>
        </button>

        <Link to='/cart'><img className='p-2 cursor-pointer' src={cart_icon} alt='cart'  width={50} height={50}/> </Link>
        <div className="nav-cart-count font-semibold text-base flex mt-[-3px] ml-[-8px] 
        text-white bg-red-800 rounded-full p-1 h-6 items-center justify-center">0</div>
        
      </div>
    </div>
  )
}

export default Navbar