import React, { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
// import suryam from '../ images/suryam.mp4'

const Navbar = () => {
  const [theme, settheme] = useState("dark");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      settheme("dark");
    } else {
      settheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const [nav, setNav] = useState(false);
  const handleclick = () => {
    setNav(!nav);
  };
  const handlelightmode = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="fixed w-full dark:bg-black bg-slate-100 h-15 text-black  px-2  flex justify-between items-center">
      <div>
      {/* <video src="/suryam.mp4" alt="surya" className="h-40 w-40" autoPlay loop muted /> */}
        {/* <img src="/suryaPrakash.png" alt="surya" className="h-10 w-10 " /> */}
        <h1 className="pt-2 dark:text-yellow-400 font-h1 text-3xl font-bold">Surya</h1>
      </div>

      <ul className=" hidden md:flex dark:text-yellow-400">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="skills">Skills</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <span>
        <button
          onClick={handlelightmode}
          className=" hidden md:flex px-3  dark:text-white cursor-pointer"
        >
          {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
      </span>

      {/* // social icon */}
      <div
        onClick={handleclick}
        className="md:hidden dark:text-yellow-400 z-10"
      >
        {!nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile view */}

      <ul
        className={
          !nav
            ? "absolute top-0 left-0 w-full h-screen  dark:bg-black  bg-slate-100 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl dark:text-white">
          <Link onClick={handleclick} to="home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl dark:text-white">
          <Link onClick={handleclick} to="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl dark:text-white">
          <Link onClick={handleclick} to="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl dark:text-white">
          <Link onClick={handleclick} to="projects">
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl dark:text-white">
          <Link onClick={handleclick} to="contact">
            Contact
          </Link>
        </li>
        <li>
        <button
          onClick={handlelightmode}
          className=" block sm:flex px-3 text-3xl dark:text-white cursor-pointer"
        >
          {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
        </li>
      </ul>



      {/* social icon */}
      <div className="hidden lg:flex  fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:text-yellow-400">
            <a
              className="flex justify-between items-center w-full right-0 "
              href="https://www.linkedin.com/in/suryaprakashchary/"
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className=" w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:text-yellow-400">
            <a
              className="flex justify-between items-center w-full right-0 "
              href="https://github.com/suryasardar"
            >
              GitHub <FaGithub size={25} />
            </a>
          </li>
          <li className=" w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:text-yellow-400">
            <a
              className="flex justify-between items-center w-full right-0 "
              href="mailto:suryaprakashchary616@gmail.com"
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className=" w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 dark:text-yellow-400">
            <a
              className="flex justify-between items-center w-full right-0 "
              href="/suryamca.pdf"
              download={true}
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
