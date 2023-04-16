import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectImg from "../assets/images/background.jpg";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo veritatis
        exercitationem fugit. Quos facere perspiciatis asperiores explicabo
        maxime! Ex repellendus quaerat incidunt explicabo dolore laboriosam fuga
        a enim doloribus debitis!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
        <ProjectItem img={ProjectImg} title="Place holder" />
      </div>
    </div>
  );
};

export default Projects;
