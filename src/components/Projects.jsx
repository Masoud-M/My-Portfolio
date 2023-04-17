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

      <p className="text-center py-8 text-gray-100 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo veritatis
        exercitationem fugit. Quos facere perspiciatis asperiores explicabo
        maxime! Ex repellendus quaerat incidunt explicabo dolore laboriosam fuga
        a enim doloribus debitis!
      </p>
      <div className=" lg:max-w-lg md:max-w-md max-w-sm flex flex-col  justify-center items-center gap-10">
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
      </div>
    </div>
  );
};

export default Projects;
