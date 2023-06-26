import React from "react";
import ProjectItem from "./ProjectItem";
import CarRental from "../assets/car-rental.png";
import EcommerceImg from "../assets/ecommerce.png";
import GymImg from "../assets/gym-website.png";
import SortingVisualizer from "../assets/sorting-visualizer.png";
import { TypeAnimation } from "react-type-animation";

const Projects = ({ displayMode }) => {
  const secondaryTextStyle = " text-2xl text-gray-500 font-semibold font-sans ";
  return (
    <div id="projects" className="my-[100px]">
      <div className="w-[90%] lg:w-[65%] mx-auto ">
        <div className="md:ml-[100px]">
          <div className="flex flex-col justify-center">
            <span className={`${secondaryTextStyle}  my-4 `}>
              &#60;div&#62;
            </span>
            <div className="my-4">
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;h1&#62;
              </span>
              <div
                className={`${displayMode.accentText} items-center justify-center my-4 flex sm:text-5xl text-4xl font-bold`}
              >
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
              </div>
              <span className={`${secondaryTextStyle}   `}>
                &emsp;&#60;&#47;h1&#62;
              </span>
            </div>
            <div>
              <span className={`${secondaryTextStyle} my-4 ml-6 `}>
                &#60;div&#62;
              </span>
              <div className="grid grid-cols-1 gap-12 w-[70%] mx-auto py-8">
                <ProjectItem
                  displayMode={displayMode}
                  img={SortingVisualizer}
                  title="Sorting Visualizer"
                  description="A way to show how different sorting algorithms work by slowing them down and visually showing the process, which you can set the side of the array and the sorting speed and choose between different algorithms"
                  techStack={["React", "TypeScript", "Tailwind"]}
                  srcLink="https://github.com/Masoud-M/sorting-algorithms"
                  demo="https://teal-melba-fffa8e.netlify.app/"
                />
                <ProjectItem
                  displayMode={displayMode}
                  img={CarRental}
                  title="Car Rental"
                  description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                  techStack={["Next JS", "TypeScript", "Tailwind"]}
                  srcLink="https://github.com/Masoud-M/car-rental"
                  demo="https://647eead214d0787e130c91b3--delicate-tiramisu-c6cc9e.netlify.app/"
                />
                <ProjectItem
                  displayMode={displayMode}
                  img={GymImg}
                  title="Gym Website"
                  description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                  techStack={["React", "CSS"]}
                  srcLink="https://github.com/Masoud-M/gym-website"
                  demo="https://fitclub-1my.pages.dev/"
                />
                <ProjectItem
                  displayMode={displayMode}
                  img={EcommerceImg}
                  title="Ecommerce"
                  description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                  techStack={["React", "Tailwind"]}
                  srcLink="https://github.com/Masoud-M/ecommerce"
                  demo="https://timely-haupia-f35fe4.netlify.app/"
                />
              </div>
              <span className={`${secondaryTextStyle} my-4 ml-6 `}>
                &#60;&#47;div&#62;
              </span>
            </div>
            <span className={`${secondaryTextStyle} mt-4  `}>
              &#60;&#47;div&#62;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
