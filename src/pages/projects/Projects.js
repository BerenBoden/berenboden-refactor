import React from "react";
import ProjectCards from "../../components/project/Projects";
import showcaseImg from "../../images/banner-bg.png";
import working from "../../images/working.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const cardInfo = [
    {
      key: "in-progress",
      image: working,
      title: "",
      description: [""],
      liveLink: "",
      codeLink: "",
    },
    {
      key: "in-progress",
      image: working,
      title: "",
      description: [""],
      liveLink: "",
      codeLink: "",
    },
    {
      key: "in-progress",
      image: working,
      title: "",
      description: [""],
      liveLink: "",
      codeLink: "",
    },
    {
      key: "in-progress",
      image: working,
      title: "",
      description: [""],
      liveLink: "",
      codeLink: "",
    },
  ]

  const renderCard = (card) => {
    return (
      <div className="shadow-xl rounded-lg" key={card.key}>
        <div>
          <img
            src={card.image}
            className="object-cover w-full"
            alt="project img"
          />
        </div>
        <div className="p-4 text-left">
          <div className="text-black font-bold text-lg">{card.title}</div>
          <div className="text-black text-xs mt-2">{card.description}</div>
          <div className="mt-2">
            <a target="_blank" rel="noreferrer" href={`${card.liveLink}`}>
              <button className="hover:text-white transition duration-100 ease-in-out hover:bg-blue-400 hover:border-blue-400 border-black border w-full my-1 py-1">
                View Live
              </button>
            </a>
            <a target="_blank" rel="noreferrer" href={`${card.codeLink}`}>
              <button className="hover:text-white transition duration-100 ease-in-out hover:bg-blue-400 hover:border-blue-400 border-black border w-full my-1 py-1">
                View Code
              </button>
            </a>
            <Link to={`/${card.key}`}>
              <button className="hover:text-white transition duration-100 ease-in-out hover:bg-blue-400 hover:border-blue-400 border-black border w-full my-1 py-1">
                View Case Study
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="absolute z-10">
            <div className="text-center mt-32 font-bold md:text-3xl text-2xl capitalize text-white underline top-0 banner-head">
              Latest Projects
            </div>
          </div>
        </div>
        <img
          className="object-cover absolute w-screen relative top-0 z-0 h-64 md:shadow-2xl mb-24"
          src={showcaseImg}
          alt=""
        />
      </div>
      <ProjectCards />
      <div className="lg:px-48 md:px-24 px-6 mt-12 grid xl:grid-cols-4 xl:grid-rows-1 xl:gap-4 lg:grid-rows-2 lg:grid-cols-2 gap-2 grid-rows-2 sm:grid-cols-2">
        {cardInfo.map(renderCard)}
      </div>
      <div className="lg:px-48 md:px-24 px-6 mt-24">
        <p className="font-bold">View More Projects:<span><a className="font-normal text-red-600 transition hover:text-red-300" target="_blank" rel="noreferrer" href="https://github.com/BerenBoden?tab=repositories"> My Github Repos</a></span></p>
      </div>
    </div>
  );
};

export default Projects;
