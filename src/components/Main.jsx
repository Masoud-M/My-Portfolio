import React, { useEffect } from "react";
import MyImg from "../assets/images/background.jpg";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-right" id="main">
      <div>
        <div className=" max-w-[700px]  m-auto h-screen w-full flex flex-col justify-center items-center">
          <p className="text-2xl text-gray-500 self-start pl-2">
            &emsp;&#60;div&#62;
          </p>
          <p className="text-2xl text-gray-500 self-start pl-2">
            &emsp;&emsp;&#60;h1&#62;
          </p>
          <h1 className="sm:text-5xl text-4xl font-bold   text-gray-300">
            I'm Masoud
          </h1>
          <p className="text-2xl text-gray-500 self-start pl-2">
            &emsp;&emsp;&#60;&#47;h1&#62;
          </p>
          <p className="text-2xl text-gray-500 self-start pl-2">
            &emsp;&emsp;&#60;h2&#62;
          </p>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-orange-500">
            I'm a
            <TypeAnimation
              sequence={["Front-end Developer", 2000, "Tech Enthusiat", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <p className="text-2xl text-gray-500 self-start pl-2">
            &emsp;&emsp;&#60;&#47;h2&#62;
          </p>
          <p className="text-2xl text-gray-500 self-start pl-2">
            &emsp;&#60;&#47;div&#62;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
