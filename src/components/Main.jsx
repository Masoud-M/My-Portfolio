import React, { useEffect } from "react";
import MyImg from "../assets/background.jpg";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const secondaryTextStyle = " text-2xl text-gray-500 font-semibold font-sans ";
  return (
    <div data-aos="fade-right" id="main">
      <div className="w-[90%] lg:w-[65%] mx-auto">
        <div className="md:ml-[100px]">
          <div className="flex flex-col justify-center h-screen my-4">
            <span className={`${secondaryTextStyle}   `}>&#60;div&#62;</span>
            <div className="my-4">
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;h1&#62;
              </span>
              <div className="text-center my-4 sm:text-5xl text-4xl font-bold   text-gray-300">
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
              <div className=" items-center justify-center my-4 flex sm:text-3xl text-2xl text-orange-500">
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
            <span className={`${secondaryTextStyle}   `}>
              &#60;&#47;div&#62;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
