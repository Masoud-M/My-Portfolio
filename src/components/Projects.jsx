import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectImg from "../assets/images/background.jpg";
import { TypeAnimation } from "react-type-animation";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col items-center lg:max-w-4xl "
    >
      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&#60;div&#62;
      </p>
      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&emsp;&#60;h1&#62;
      </p>
      <h1 className="text-4xl font-bold text-center text-orange-500">
        <TypeAnimation
          sequence={["Projects", 1000, " ", 1000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "1em",
            display: "inline-block",
            paddingLeft: "5px",
          }}
        />
      </h1>

      <p className="text-2xl text-gray-500 self-start pl-2">
        &emsp;&emsp;&#60;&#47;h1&#62;
      </p>

      <div className=" lg:max-w-lg md:max-w-md max-w-sm flex flex-col  justify-center items-center gap-10">
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
      </div>
      <p className="text-2xl text-gray-500 self-start pl-2">
        &#60;&#47;div&#62;
      </p>
    </div>
  );
};

export default Projects;
