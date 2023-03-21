import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaWindowClose  } from "react-icons/fa";
const Header = () => {
    const [nav , Opennav] = useState(false)
    const sideopen = () => {
        Opennav(!nav)
    }

    return(
        <div className="container px-3 w-full flex mx-auto py-6 justify-between text-white items-center  max-w-[1024px]">
            <h1 className='w-full text-3xl font-bold text-[#00df9a]  h-full '>React .</h1>
            <div className=' hidden md:flex justify-between w-full '>
            <ul className='  md:flex w-full justify-end px-2 items-center'>
                <li className='p-3 text-sm cursor-pointer hover:text-[#00df9a] duration-300'>Home </li>
                <li className='p-3 text-sm cursor-pointer hover:text-[#00df9a] duration-300'>Account</li>
                <li className='p-3 text-sm cursor-pointer hover:text-[#00df9a] duration-300'>sign in</li>
                <li className="p-3 text-sm"><button className='bg-white text-black py-2 px-4 m-auto rounded-lg cursor-pointer hover:bg-[#00df9a] duration-300'>Get Started</button></li>
            </ul>
            </div>
            <div onClick={sideopen} className = "block md:hidden">
                {!nav ? <FaBars size={25} className=" cursor-pointer" /> :  <FaWindowClose  size= {25}  className=" cursor-pointer fixed right-5 top-10" />} 
            </div>
            <div className={nav ? 'duration-500  left-0 fixed top-0 h-full bg-[#000300] w-[50%] p-3' : ` duration-500 left-[-100%] fixed top-1 h-full bg-[#000300] w-[50%] p-3  `}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React .</h1>
                <ul className='py-5'>
                    <li className='p-4 border-b border-gray-400 w-full text-sm cursor-pointer  pt-5 hover:text-[#00df9a]  hover:translate-x-1  duration-300'>Home </li>
                    <li className='p-4 border-b w-full border-gray-400 text-sm cursor-pointer  pt-5 hover:text-[#00df9a]  hover:translate-x-1  duration-300'>Account</li>
                    <li className='p-4 border-b w-full  border-gray-400 text-sm cursor-pointer pt-5  hover:text-[#00df9a] hover:translate-x-1  duration-300'>sign in</li>
                    <li className="p-4 border-b w-full  border-gray-400 text-sm cursor-pointer pt-5  hover:text-[#00df9a] hover:translate-x-1  duration-300">Get Started</li>
                </ul>
            </div>
        </div>
        
    )
}
export default Header;
