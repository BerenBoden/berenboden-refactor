import React from "react";
import Form from "../../components/form/Form";
import showcaseImg from "../../images/banner-bg.png";
import Layout from "../../components/layout/Layout";
import LangaugeCards from "../../components/cards/LangaugeCards";

const Contact = () => {

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="absolute z-10">
            <div className="text-center mt-32 font-bold md:text-3xl text-2xl capitalize text-white underline top-0 banner-head">
              About Me
            </div>
          </div>
        </div>
        <img
          className="object-cover absolute w-screen relative top-0 z-0 h-64 md:shadow-2xl mb-24"
          src={showcaseImg}
          alt=""
        />
      </div>
      <Layout className="flex">
        <div>
          <h1 className="mt-16 text-black font-bold text-3xl underline py-2">What do I do?</h1>
        </div>
        <div>
          <p className="py-4">
          I am a full-stack web developer and typically program in JavaScript and its many frameworks and libraries. I also am skilled in using cloud services like Azure, AWS, and Firebase for uploading and hosting websites. I know how to package and deploy websites using build tools like Web Pack. I also know a bit about databases and how to retrieve and store data in a database using Node.JS and MongoDB. I am very passionate about web development and love learning new technologies and skills. 
          </p>
          <LangaugeCards />
        </div>
      </Layout>
      <Form />
    </div>
  );
};

export default Contact;
