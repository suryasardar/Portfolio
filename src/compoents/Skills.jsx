import React from "react";
import javascript from "../ images/javascript.png";
import Html from "../ images/html.png";
import Tailwind from "../ images/tailwind.png";
import mongo from "../ images/mongo.png";
import node from "../ images/node.png";
import github from "../ images/github.png";
import aws from "../ images/aws.png";
import docker from "../ images/Docker.png";
import Mysql from "../ images/Mysql.png";

import react from "../ images/react.png";

const Skills = () => {
  return (
    <div name="skills" className=" dark:bg-black bg-slate-100 text-black ">
      <div className="max-w-4xl mx-auto p-4 flex  flex-col justify-center w-full h-full">
        <div className="dark:text-yellow-400">
          <p className="text-4xl font-blod inline border-b-4 dark:border-yellow-600">
            Skills
          </p>
          <p className="py-4 dark:text-yellow-400">
            {" "}
            These are the technologies I've worked with{" "}
          </p>
        </div>

        <div className="w-full   grid grid-cols-2  sm:grid-cols-5 gap-4 text-center py-8">
          <div className=" shadow-md dark:shadow-white  shadow-orange-500 hover:scale-110 duration-500">
            <img src={Html} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">HTML</p>
          </div>
          <div className="shadow-md dark:shadow-white shadow-blue-500 hover:scale-110 duration-500">
            <img src={Tailwind} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">TAILWIND</p>
          </div>
          <div className="shadow-md dark:shadow-white shadow-yellow-300 hover:scale-110 duration-500">
            <img src={javascript} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">JAVASCRIPT</p>
          </div>
          <div className=" shadow-md dark:shadow-white shadow-blue-500 hover:scale-110 duration-500">
            <img src={react} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">REACT</p>
          </div>
          <div className="shadow-md dark:shadow-white shadow-lime-500 hover:scale-110 duration-500">
            <img src={node} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">NODE</p>
          </div>
          <div className=" shadow-md dark:shadow-white shadow-black hover:scale-110 duration-500">
            <img src={github} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">GITHUB</p>
          </div>
          <div className=" shadow-md dark:shadow-white shadow-green-400 hover:scale-110 duration-500">
            <img src={aws} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">AWS</p>
          </div>
          <div className="shadow-md dark:shadow-white  shadow-green-700 hover:scale-110 duration-500">
            <img src={mongo} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">MONGO</p>
          </div>
          <div className="shadow-md dark:shadow-white shadow-blue-900 hover:scale-110 duration-500">
            <img src={docker} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">Docker</p>
          </div>
          <div className="shadow-md dark:shadow-white shadow-blue-700 hover:scale-110 duration-500">
            <img src={Mysql} className="w-20 mx-auto" alt="js" />
            <p className="dark:text-yellow-400">Mysql</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
