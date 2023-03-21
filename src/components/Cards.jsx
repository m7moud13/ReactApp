import React from "react"; 
import single from "./imgs/single.png"
import double from "./imgs/double.png"
import triple from "./imgs/triple.png"
const Cards = () => {
    return(
        <div className="bg-white py-20  w-full ">
            <div className="grid grid-cols-1 gap-16 2xl:gap-7 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
                {/* card - 1 */}
            <div className=" text-center rounded-lg font-bold  max-w-[400px] mx-auto w-full shadow-xl duration-300 hover:translate-y-[-10px] hover:shadow-2xl">
                <img src={single} alt="" className="mt-[-70px] w-28 h-15 mx-auto py-5" />
                <h1 className="py-4 text-xl md:text-2xl 2xl:text-4xl">Single User</h1>
                <h1 className="py-4 text-xl md:text-2xl 2xl:text-4xl">$149</h1>
                <div>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-300">500 GB Storage</p>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-300">1 User Allowed</p>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-300">Send up to 2GB</p>
                </div>
                <button className="m-10 bg-[#00df9a] py-2.5 px-9 rounded-lg duration-300 hover:bg-[#000300] hover:text-[#00df9a]">Start Trial</button>
            </div>
            {/* Card - 2 */}
            <div className=" text-center  font-bold bg-gray-200 rounded-lg  max-w-[400px] mx-auto w-full shadow-xl duration-300 hover:translate-y-[-10px] hover:shadow-2xl 2xl:translate-y-[-5px]">
                <img src={double} alt="" className="mt-[-70px] w-28 h-15 mx-auto py-5" />
                <h1 className="py-4 text-xl md:text-2xl 2xl:text-4xl">Double</h1>
                <h1 className="py-4 text-xl md:text-2xl 2xl:text-4xl">$199</h1>
                <div>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-400">1 TP Storage</p>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-400">3 User Allowed</p>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-400">Send up to 10 GB</p>
                </div>
                <button className="m-10 bg-[#00df9a] py-2.5 px-9 rounded-lg duration-300 hover:bg-[#000300] hover:text-[#00df9a]">Start Trial</button>
            </div>
            {/* Card - 3 */}
            <div className=" text-center  font-bold bg-white rounded-lg  max-w-[400px] mx-auto w-full shadow-xl duration-300 hover:translate-y-[-10px] hover:shadow-2xl 2xl:translate-y-[-5px]">
                <img src={triple} alt="" className="mt-[-70px] w-28 h-15 mx-auto py-5" />
                <h1 className="py-4 text-xl md:text-2xl 2xl:text-4xl">Group Account</h1>
                <h1 className="py-4 text-xl md:text-2xl 2xl:text-4xl">$299</h1>
                <div>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-400">5 TP Storage</p>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-400">10 User Allowed</p>
                    <p className="py-4 border-b w-[70%] mx-auto border-gray-400">Send up to 20 GB</p>
                </div>
                <button className="m-10 bg-[#00df9a] py-2.5 px-9 rounded-lg duration-300 hover:bg-[#000300] hover:text-[#00df9a]">Start Trial</button>
            </div>
            </div>
        </div>
    )
}

export default Cards;