import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" dark:bg-black  bg-slate-100 h-screen w-full text-black">
      <div className=" max-w-5xl mx-auto px-8 flex flex-col justify-center items-center h-full">
        <p className="  dark:text-yellow-300">Hi,My Name is </p>
        <h1 className=" text-4xl sm:text-7xl font-bold dark:text-yellow-400">
          Suryaprakash
        </h1>
        <h2 className=" text-2xl  pt-1  md:text-4xl sm:text-7xl font-bold dark:text-yellow-500">
          I'm a Full Stack Developer
        </h2>
        <p className="pt-2 pb-4 max-w-[700px] dark:text-yellow-200">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focsed on
          building responsive full-stack web applications
        </p>
        <div>
          <button className=" group dark:text-white my-2 border-2 px-6 py-2 flex items-center gap-1 ">
            view work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
