import React from "react";
import img from "./imgs/img.png";

const Mangmentsection = () => {
    return(
    <div className=" w-full mx-auto p-3 py-16 bg-white grid items-center grid-cols-1 sm:grid-cols-2  gap-8">
        <img src={img} className="rounded-lg max-w-[80%] mx-auto" alt="" />
        <div className="text-black text-left ">
            <p className=" font-bold  text-[#00df9a] md:text-[17px] lg:text-[25px]">Data Analytics Dashboard </p>
            <h1 className="py-2  text-[18px] font-bold md:text-[22px] lg:text-2xl">Manage Data Analytics Centrally</h1>
            <p className="pb-4 lg:max-w-[90%]  2xl:max-w-[70%] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, est? Cupiditate quaerat porro molestiae reiciendis fugiat? Beatae dolor, totam, deserunt adipisci consequatur at cumque accusantium aut harum molestias reiciendis laboriosam?</p>
            <button className="bg-black text-[#00df9a] py-2 px-5 rounded-lg duration-300 md:px-10 hover:bg-[#00df9a] hover:text-black 2xl:px-16" >Get Started</button>
        </div>
    </div>
    )
}
export default Mangmentsection;