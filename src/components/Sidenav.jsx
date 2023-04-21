import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineGithub size={20} />
            <span className="pl-4">Github</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div
        data-aos="fade-right"
        className="md:block hidden fixed top-[25%] z-10"
      >
        <div className="flex flex-col ">
          <a
            href="#main"
            className=" flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
            <span className="text-[10px]">Home</span>
          </a>
          <a
            href="#projects"
            className=" flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
            <span className="text-[10px]">Projects</span>
          </a>
          <a
            href="#contact"
            className=" flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
            <span className="text-[10px]">Contact</span>
          </a>
          <a
            href="/"
            className=" flex flex-col justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineGithub size={20} />
            <span className="text-[10px]">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
