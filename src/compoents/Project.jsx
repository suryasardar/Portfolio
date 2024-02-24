import React from "react";

import Ecommerce from "../ images/Ecommerce.png";
import Typing from "../ images/Typing.jpg";

const Project = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-slate-100  dark:bg-black text-black"
    >
      <div className="max-w-4xl mx-auto p-4 flex  flex-col justify-center w-full h-full">
        <div className="pb-8 dark:text-yellow-400">
          <p className="text-4xl font-blod inline border-b-4 dark:border-yellow-600">
            Projects
          </p>
          <p className="py-4"> Check out some of my recent projects </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className=" group-hover:opacity-100">
              <span className="text-2xl font-bl=old text-white bg-black tracking-wider">
                E-commerce Website
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/suryasardar/EcommerceWebsite">
                  <button className=" text-center rounded-lg px-2 py-1 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Typing})` }}
            className=" group shadow-lg shadow-white container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" group-hover:opacity-100">
              <span className="text-2xl font-bl=old text-white bg-black tracking-wider">
                Typing Website
              </span>
                          <div className="pt-8 text-center">
                          <a href="https://6583075430feee29e4925af3--fanciful-shortbread-401dc6.netlify.app/">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/suryasardar/typingwebsite">
                  <button className="text-center rounded-lg px-2 py-1 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
