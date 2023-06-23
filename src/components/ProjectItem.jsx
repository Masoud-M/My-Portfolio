import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectItem = ({
  displayMode,
  img,
  title,
  description,
  techStack,
  srcLink,
  demo,
}) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const arr = techStack;
  return (
    <div
      data-aos="zoom-in"
      className={`${displayMode.secondBg} grid grid-cols-1 gap-6 lg:grid-cols-2 justify-center p-4 items-center rounded-xl`}
    >
      <div className="rounded-xl">
        <img
          className="mx-auto w-[500px] h-[400px] object-cover object-top hover:object-bottom image-scroll ease-linear overflow-hidden rounded-xl cursor-pointer "
          src={img}
          alt="/"
        />
      </div>

      <div className=" border-t-2 lg:border-t-0 lg:border-l-2 border-zinc-700 flex flex-col justify-center p-4 items-center ">
        <p
          className={`${displayMode.primaryText} text-3xl text-white  font-bold  mb-2`}
        >
          {title}
        </p>
        <p className={`${displayMode.secondaryText} text-center`}>
          {description}
        </p>

        <p
          className={`${displayMode.primaryText} font-semibold text-lg mt-6 mb-2`}
        >
          Technologies Used
        </p>
        <p
          className={`${displayMode.primaryText} flex flex-wrap justify-between gap-2 font-semibold`}
        >
          {arr.map((title) => {
            return (
              <div
                className={`${displayMode.firstBg} flex flex-row mt-2 px-2 py-1 items-center justify-center rounded-md`}
                key={title}
              >
                {title}
              </div>
            );
          })}
        </p>
        <div className="  px-4 mt-8 mb-4 flex flex-row justify-between">
          <button
            className={` ${displayMode.accentColor}  hover:scale-110 hover:text-white ease-in duration-150 mx-2 font-semibold rounded-md w-[120px] height-[20px] px-2 py-1`}
          >
            <a href={srcLink} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </button>
          <button
            className={` ${displayMode.accentColor}   hover:scale-110 hover:text-white ease-in duration-150 mx-2 font-semibold rounded-md w-[120px] height-[20px] px-2 py-1`}
          >
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
