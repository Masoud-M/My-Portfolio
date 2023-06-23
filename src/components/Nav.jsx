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

const Sidenav = ({ displayMode }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const listStyle =
    "w-[75%] flex justify-center items-center rounded-full shadow-lg bg-orange-500 font-semibold  m-2 p-4 cursor-pointer hover:scale-110 hover:text-white ease-in duration-200";
  const sideNavStyle = `${displayMode.accentColor} ${displayMode.sideNavText} flex flex-col justify-center items-center rounded-md shadow-lg font-semibold py-2 w-[75%]  cursor-pointer hover:text-white ease-in duration-200 `;
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden text-xl text-orange-500"
      />
      {nav ? (
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="fixed top-0 bottom-0 right-0 left-0 w-full h-screen bg-zinc-800 flex flex-col justify-center items-center z-20"
        >
          <a onClick={handleNav} href="#main" className={listStyle}>
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a onClick={handleNav} href="#projects" className={listStyle}>
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a onClick={handleNav} href="#contact" className={listStyle}>
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          <a
            onClick={handleNav}
            href="https://github.com/Masoud-M"
            target="_blank"
            rel="noopener noreferrer"
            className={listStyle}
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
        className={`${displayMode.sideNavBg} md:block hidden fixed top-0 bottom-0 left-0 w-[100px] z-10 `}
      >
        <div className="flex flex-col h-full gap-4 justify-center items-center ">
          <a href="#main" className={sideNavStyle}>
            <AiOutlineHome size={20} />
            <span className="text-[10px]">Home</span>
          </a>
          <a href="#projects" className={sideNavStyle}>
            <GrProjects size={20} />
            <span className="text-[10px]">Projects</span>
          </a>
          <a href="#contact" className={sideNavStyle}>
            <AiOutlineMail size={20} />
            <span className="text-[10px]">Contact</span>
          </a>
          <a
            href="https://github.com/Masoud-M"
            target="_blank"
            rel="noopener noreferrer"
            className={sideNavStyle}
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
