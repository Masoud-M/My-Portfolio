import React from "react";
import ProjectItem from "./ProjectItem";
import EcommerceImg from "../assets/ecommerce-3-devices-black.png";
import GymImg from "../assets/gym-3-devices-black.png";
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
      <br />
      <div className="flex flex-col justify-center p-4 m-4  items-center gap-4">
        <ProjectItem
          img={GymImg}
          title="Gym Website"
          description="one page static gym website to showcase the diffrent plans. it has hero section, testimonials section and plans section"
          techStack={["React", "Tailwind"]}
          srcLink="https://github.com/Masoud-M/gym-website"
          demo="#"
        />
        <ProjectItem
          img={EcommerceImg}
          title="Ecommerce"
          description="Ecommerce website to showcase products.
          it has a hero page, prdoduct page , cart page and checkout page"
          techStack={["React", "Tailwind"]}
          srcLink="https://github.com/Masoud-M/ecommerce"
          demo="https://timely-haupia-f35fe4.netlify.app/"
        />
      </div>
      <p className="text-2xl text-gray-500 self-start pl-2">
        <br />
        &#60;&#47;div&#62;
      </p>
    </div>
  );
};

export default Projects;
