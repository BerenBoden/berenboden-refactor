import React from "react";
import { Link } from "react-router-dom";
import webfirst from "../../images/webfirst.png";
import codification from "../../images/codification.png";
import gdrive from '../../images/google-drive-project.png'
import discordClone from "../../images/discord-clone.png";

const Cards = () => {
  const cardInfo = [
    {
      key: "webfirst",
      image: webfirst,
      title: "Webfirst | Website and Content Creation",
      description: [
        'Webfirst was created using Gatsby, the main purpose of this website was to create websites for people and businesses, at the lowset possible price without using any Content Management Systems like WordPress. I choose gatsby as this website is needed to rank on Google for specific keywords like "web developers" etc... ',
      ],
      liveLink: "https://webfirst.co.nz",
      codeLink: "https://github.com/BerenBoden/webfirst-gatsby",
    },
    {
      key: "codification",
      image: codification,
      title: "Expert Kubernetes consultancy | Codification.io",
      description: ["For my very first freelancing job on UpWork I was invited to help with front-end development for the company Codification.io. This website is for teaching employees of companies about cloud services such as Kubernetes and Azure etc... I mainly contributed to front end development on codification.io and coficication.bootcamp.io. "],
      liveLink: "https://codification.io",
      codeLink: "",
    },
    {
      key: "gdrive",
      image: gdrive,
      title: "Google Drive Clone With React.JS",
      description: ["This project was created using React.JS and it allows you to upload files and it copies the design on Google Drive. This app uses Google authentication for users to sign in with their Google accounts and allows you to upload images and files to a database."],
      liveLink: "https://drive-57245.web.app/",
      codeLink: "https://github.com/BerenBoden/google-drive",
    },
    {
      key: "discord-clone",
      image: discordClone,
      title: "Live Discord Chat Application Using React and Redux",
      description: ["This was created to copy a popular live messaging application called Discord, it uses a real-time database to store a user's input as a message and displays it on the screen in real-time. This application also uses Redux store for storing app data and user data and it uses persistence so you stay signed in, even if you refresh the page unless you sign out. You can also log in with Google and it will display your name and profile picture."],
      liveLink: "https://discord-clone-7d2eb.web.app/",
      codeLink: "https://github.com/BerenBoden/discord-clone",
    },
  ];

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
  };

  return (
    <>
      <h1 className="lg:px-48 md:px-24 px-6 text-black font-bold lg:text-3xl md:text-2xl text-xl underline py-2">
        My Projects...
      </h1>
      <div className="lg:px-48 md:px-24 px-6 grid xl:grid-cols-4 xl:grid-rows-1 xl:gap-4 lg:grid-rows-2 lg:grid-cols-2 gap-2 grid-rows-2 sm:grid-cols-2">
        {cardInfo.map(renderCard)}
      </div>
    </>
  );
};

export default Cards;