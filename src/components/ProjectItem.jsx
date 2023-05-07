import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectItem = ({ img, title, description, techStack, srcLink, demo }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col justify-center md:flex-row p-2 items-center bg-zinc-900"
    >
      <img className=" sm:max-w-sm  m-4  rounded-xl" src={img} alt="/" />

      <div className=" border-t-2 md:border-t-0 md:border-l-2 border-zinc-700 flex flex-col justify-center p-4 items-center ">
        <p className="text-3xl text-white  font-bold  mb-2">{title}</p>
        <p className=" text-gray-300">{description}</p>
        <div className=" px-4 my-4 flex flex-row justify-between">
          <button className=" hover:scale-110 ease-in duration-150 mx-2 font-bold rounded-md bg-orange-500 w-[120px] height-[20px] px-2 py-1 text-gray-900">
            <a href={srcLink} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </button>
          <button className=" hover:scale-110 ease-in duration-150 mx-2 font-bold rounded-md bg-orange-500 w-[120px] height-[20px] px-2 py-1 text-gray-900">
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </button>
        </div>
        <p className=" font-semibold text-lg text-gray-500">
          Technologies Used
        </p>
        <p className=" font-semibold text-gray-300">{techStack}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
