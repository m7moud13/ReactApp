import React from "react";
import Typed from 'react-typed';
const Lading = () => {
    return(
        <div className=" container h-screen w-full flex  items-center mx-auto max-w-[1024px]">
                <div className="text-center w-full text-white">
                <p className="text-[#00df9a]  uppercase  text-bold md:text-xl">growind with data analyicts</p>
                <h1 className=" text-5xl py-5 font-bold lg:text-7xl">Grow With data.</h1>
                <div className="flex justify-center pb-3 font-bold">
                    <h2 className=" text-xl md:text-2xl lg:text-4xl">Fast, flexible financing for</h2>
                <Typed className="ml-2 text-xl md:text-2xl lg:text-4xl text-gray-400"  strings ={["BTB","SASS","BTC","SCSS"]} typeSpeed={120} backSpeed={150} loop/>
                </div>
                <p className="pb-3 text-gray-400  sm:text-xl lg:text-2xl lg:my-2">Monitor your data analytics to increase revenue for BTB,BTC, &SASS <br  className="mt-1"/>Platforms.</p>
                <button className="bg-[#00df9a] py-2 px-5 duration-300 rounded-lg text-black md:px-9 lg:px-12 hover:bg-white   ">Get Statred</button>
                </div>
        </div>
    )
}
export default Lading;