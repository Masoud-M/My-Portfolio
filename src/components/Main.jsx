import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import HTML from "../assets/Images/html.svg";
import CSS from "../assets/Images/css.svg";
import JavaScript from "../assets/Images/javascript.svg";
import ReactIcon from "../assets/Images/react.svg";
import Tailwind from "../assets/Images/tailwind.svg";

const Main = ({ displayMode }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const secondaryTextStyle = " text-2xl text-gray-500 font-semibold font-sans ";
  const iconStyle = `${displayMode.secondBg} ${displayMode.primaryText} flex flex-col  items-center justify-center w-[75px] h-[75px] p-2 gap-1 rounded-md text-[12px] `;
  return (
    <div data-aos="fade-right" id="main">
      <div className=" w-[90%] lg:w-[65%] mx-auto">
        <div className=" md:ml-[100px]">
          <div className="flex flex-col justify-center h-screen my-4">
            <span className={`${secondaryTextStyle}   `}>&#60;div&#62;</span>
            <div className="my-4">
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;h1&#62;
              </span>
              <div
                className={`${displayMode.primaryText} text-center my-4 sm:text-5xl text-4xl font-bold  `}
              >
                I'm Masoud
              </div>
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;&#47;h1&#62;
              </span>
            </div>
            <div className="my-4">
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;h2&#62;
              </span>
              <div
                className={`${displayMode.accentText}  items-center justify-center my-4 flex sm:text-3xl text-2xl  `}
              >
                I'm a
                <TypeAnimation
                  sequence={[
                    "Front-end Developer",
                    2000,
                    "Tech Enthusiat",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "1em",
                    display: "inline-block",
                    paddingLeft: "5px",
                  }}
                />
              </div>
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;&#47;h2&#62;
              </span>
            </div>

            <span className={`${secondaryTextStyle} my-4 ml-6  `}>
              &#60;div&#62;
            </span>
            <div className="flex flex-col px-[80px] items-center gap-[35px]">
              <span
                className={`${displayMode.primaryText}  text-2xl font-semibold text-white`}
              >
                Tech Stack
              </span>
              <ul className="flex flex-wrap justify-center items-center gap-[20px]">
                <li className={iconStyle}>
                  <img className="w-[34px] h-[34px]" src={HTML} />
                  <span>HTML</span>
                </li>
                <li className={iconStyle}>
                  <img className="w-[34px] h-[34px]" src={CSS} />
                  <span>CSS</span>
                </li>
                <li className={iconStyle}>
                  <img className="w-[34px] h-[34px]" src={JavaScript} />
                  <span>JavaScript</span>
                </li>
                <li className={iconStyle}>
                  <img className="w-[34px] h-[34px]" src={ReactIcon} />
                  <span>React</span>
                </li>
                <li className={iconStyle}>
                  <img className="w-[34px] h-[34px]" src={Tailwind} />
                  <span>Tailwind</span>
                </li>
              </ul>
            </div>
            <span className={`${secondaryTextStyle} my-4 ml-6 `}>
              &#60;&#47;div&#62;
            </span>
            <span className={`${secondaryTextStyle} my-4  `}>
              &#60;&#47;div&#62;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
