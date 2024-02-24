import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='text-gray-400 bg-black   p-16 font-custom-poppin'>
        <div className='flex flex-col sm:flex-row justify-around '>

            <div className="footer-logo flex items-center gap-5">
                <img src={footer_logo} alt="" />
            </div>

            <ul className="footer-links space-y-2 tracking-[2px]">
                <li className='cursor-pointer hover:text-gray-300'>Company</li>
                <li className='cursor-pointer hover:text-gray-300'>About</li>
                <li className='cursor-pointer hover:text-gray-300'>Products</li>
                <li className='cursor-pointer hover:text-gray-300'>Offices</li>
                <li className='cursor-pointer hover:text-gray-300'>Contact</li>
            </ul>

            <div className="footer-social-icon ">
                <div className="footer-icons-container flex ">
                    <img className='bg-white rounded-full p-1'  src={instagram_icon} alt="" />
                    <img className='bg-white rounded-full p-1' src={pintester_icon} alt="" />
                    <img className='bg-white rounded-full p-1' src={whatsapp_icon} alt="" />
                </div>
            </div>
        </div>

        <div className="footer-copyright justify-center flex mt-5 border-t-2 border-gray-200">
            <p className='pt-5'>@Coupyright 2024 - All</p> 
        </div>
    </div>
  )
}

export default Footer