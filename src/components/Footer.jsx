import React from "react";

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';
const Footer = () => {
    return(
        <div className="bg-[#000300] max-w-[1400px] mx-auto text-gray-300 py-16 grid grid-cols-2  md:grid-cols-2 md:gap-8 lg:grid-cols-4  items-center">
            <div className="p-3 w-full">
                <h1 className='text-3xl font-bold text-[#00df9a] py-3'>React .</h1>
                <p className="text-sm lg:text-[15px] leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ex, natus possimus cupiditate quasi voluptate omnis reiciendis ea officia labore impedit officiis sunt qui corrupti architecto facere ipsam inventore veniam!</p>
                <div className="flex  justify-around mt-5 ">
                <FaFacebookSquare size={30}  />
                <FaInstagram size={30}      />
                <FaTwitterSquare size={30}  />
                <FaGithubSquare size={30}   />
                <FaDribbbleSquare size={30}  />
                </div>
            </div>
            <div>
            <ul className=" m-auto xl:my-0">
                    <h6 className='font-medium text-gray-400 mb-2'>Solutions</h6>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Analytics</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Marketing</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Commerce</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Insights</li>
                    </ul>
            </div>
            <div>
            <ul className=" m-auto xl:my-0">
                    <h6 className='font-medium text-gray-400'>Support </h6>
                        <h6 className='font-medium text-gray-400 my-2'>Company</h6>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Pricing</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Documentation</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Guides</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>API Status</li>
                    </ul>
            </div>
            <div>
            <ul className=" m-auto xl:my-0">
                        <h6 className='font-medium text-gray-400 mb-2'>Legal</h6>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>About</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Blog</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Jobs</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Press</li>
                        <li className='py-2 text-sm cursor-pointer duration-300  hover:text-[#00df9a]'>Careers</li>
                    </ul>
            </div>
        </div>
        
    )
}

export default Footer;
