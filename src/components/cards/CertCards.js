import React from "react";
import network from "../../images/network.jpg";
import security from "../../images/security.jpg";
import working from "../../images/working.png";

const CertCards = () => {
  const cardInfo = [
    {
      key: "network",
      image: network,
      title: "Network+ Comptia Certification",
      description: [
        'Currently working towards earning my Network+ certification and learning about how networks work, and how devices interact with each other as well as a broad overview of the many devices that are used in large companys. ',
      ],
      liveLink: ""
    },
    {
      key: "security",
      image: security,
      title: "Security+ Comptia Certification",
      description: ["After I earn my Network+ I am going to start working on the Security+, this is to improve my skills and security knowledge with networking."],
      liveLink: ""
    },
    {
      key: "working",
      image: working,
      title: "",
      description: [],
      liveLink: ""
    },
    {
      key: "working1",
      image: working,
      title: "",
      description: [],
      liveLink: ""
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
                Unavailable
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="lg:px-48 md:px-24 px-6 mt-16 text-black font-bold text-3xl underline py-2">
        My Certifications...
      </h1>
      <div className="lg:px-48 md:px-24 px-6 grid xl:grid-cols-4 xl:grid-rows-1 xl:gap-4 lg:grid-rows-2 lg:grid-cols-2 gap-2 grid-rows-2 sm:grid-cols-2">
        {cardInfo.map(renderCard)}
      </div>
    </>
  );
};

export default CertCards;