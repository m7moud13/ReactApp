import React from "react";

const Tips = () => {
    return(
        <div className="bg-[#000#300] mx-auto p-3 text-white w-full py-16 grid gap-9 grid-cols-1 md:grid-cols-2">
            <h1 className= "text-[20px] text-left md:mx-auto sm:text-xl md:text-[19px] lg:text-[27px] 2xl:text-4xl"> Want tips & tricks to optimize your flow?<span className="block text-gray-400 text-sm  text-left mt-2 lg:textlg 2xl:text-[18px]">Sign up to our newsletter and stay up to date.</span></h1>
            <div>
                <div className="flex gap-2">
                    <input type="email" placeholder="Enter your email"  className=" rounded-lg py-2 px-3 text-black outline-none duration-300 w-[30%] focus:outline-none focus:w-[40%]  focus:placeholder:opacity-0" />
                    <button className="bg-[#00df9a] text-black py-2 px-5 rounded-lg duration-300 md:px-8 hover:bg-white hover:text-black ">Notify Me</button>
                </div>
                <p className="my-4 sm:text-[18px] md:text-[15px] lg:text-[17px]">We care bout the protection of your data. Read our <span className="block underline text-[#00df9a] cursor-pointer w-fit">rivacy Policy.</span></p>
            </div>
        </div>
    )
}
export default Tips;