import React from "react";
import MyImg from "../assets/images/background.jpg";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover " src={MyImg} alt="/" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className=" max-w-[700px]  m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Masoud
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Front-end Developer", // Types 'One'
                2000, // Waits 1s
                "Tech Enthusiat", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
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
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
