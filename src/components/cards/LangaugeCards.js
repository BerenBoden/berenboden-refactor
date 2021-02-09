import React from "react";
import aws from "../../images/aws.svg";
import bitbucket from "../../images/bitbucket.svg";
import bootstrap from "../../images/bootstrap.svg";
import css3 from "../../images/css3.svg";
import digitalOcean from "../../images/digital-ocean.svg";
import githubSquare from "../../images/github-square.svg";
import gulp from "../../images/gulp.svg";
import js from "../../images/js.svg";
import less from "../../images/less.svg";
import node from "../../images/node.svg";
import python from "../../images/python.svg";
import reactjs from "../../images/reactjs.svg";
import sass from "../../images/sass.svg";
import tailwindcss from '../../images/tailwindcss.svg';
import heroku from '../../images/heroku.svg';
import azure from '../../images/azure.svg';
import materialUi from '../../images/material-ui.svg';
import eslint from '../../images/eslint.svg';
import prettier from '../../images/prettier.svg';
import express from '../../images/express.svg';
import firebase from '../../images/firebase.svg';
import webpack from '../../images/webpack.svg';
import mongodb from '../../images/mongodb.svg';
import firestore from '../../images/firestore.svg';
import adobe from '../../images/adobe.svg';
import microsoftOffice from '../../images/microsoft-office.svg';
import jquery from '../../images/jquery.png';
import typescript from '../../images/typescript.svg';

const LangaugeCards = () => {
  const cardInfo = [
    {
      title: "Programming Langauges:",
      image: [js, python, css3, typescript],
      langauge: ["JavaScript", "Python", "CSS", "Typescript"],
    },
    {
      title: "Frameworks & Libraries / Runtime Environments",
      image: [reactjs, jquery, node, express],
      langauge: ["React.JS", "JQuery", "Node.JS", "Express.JS"],
    },
    {
      title: "Databases:",
      image: [mongodb, firestore],
      langauge: ["MongoDB", "Firestore"],
    },
    {
      title: "Cloud Services:",
      image: [aws, digitalOcean, heroku, azure, firebase],
      langauge: ["AWS", "Digital Ocean", "Heroku", "Azure", "Firebase"],
    },
    {
      title: "Applications:",
      image: [adobe, microsoftOffice],
      langauge: ["Adobe", "Microsoft Office"],
    },
    {
      title: "Work Environments / Social:",
      image: [githubSquare, bitbucket],
      langauge: ["Github", "Bitbucket"],
    },
    {
      title: "Build Tools / Formatters:",
      image: [webpack, gulp, eslint, prettier],
      langauge: ["Webpack", "Gulp", "ESLint", "Prettier"],
    },
    {
      title: "CSS Environment:",
      image: [less, sass, tailwindcss, bootstrap, materialUi],
      langauge: ["LESS", "SASS", "Tailwindcss", "Bootstrap", "Material UI"],
    },
  ];

  const renderCard = (card) => {
    return (
      <div className="border border-blue-200 p-4">
        <h1 className="text-black font-bold text-xl underline py-2">
          {card.title}
        </h1>
        <div>
          <div className="flex justify-evenly py-6">
            <div className="flex-col flex">
              <img src={card.image[0]} alt="" className="w-16 h-16" />
              <p>{card.langauge[0]}</p>
            </div>
            <div className="flex-col flex">
              <img src={card.image[1]} alt="" className="w-16 h-16" />
              <p>{card.langauge[1]}</p>
            </div>
            <div className="flex-col flex">
              <img src={card.image[2]} alt="" className="w-16 h-16" />
              <p>{card.langauge[2]}</p>
            </div>
            <div className="flex-col flex">
              <img src={card.image[3]} alt="" className="w-16 h-16" />
              <p>{card.langauge[3]}</p>
            </div>
            <div className="flex-col flex">
              <img src={card.image[4]} alt="" className="w-16 h-16" />
              <p>{card.langauge[4]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid xl:grid-cols-2 xl:grid-rows-1  lg:grid-rows-2 lg:grid-cols-2 gap-2 grid-rows-2 sm:grid-cols-2">
      {cardInfo.map(renderCard)}
    </div>
  );
};

export default LangaugeCards;
